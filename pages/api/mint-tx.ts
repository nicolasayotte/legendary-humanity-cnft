import type { NextApiRequest, NextApiResponse } from 'next';
import { largestFirst } from '@meshsdk/core';
import type { Mint } from '@meshsdk/core';

import { IMintTxRequest, IMintTxResponse } from '@/backend';
import {
  GetAssetInfo,
  GetPolicyInfo,
  ParseSeries,
} from '@/lib/series';
import type { Series } from '@/lib/types';
import { GetPolicy } from '@/lib/server/policies';
import { getTxBuilder, getSlot, signTx } from '@/lib/server/wallet';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    recipientAddress,
    utxos,
    quantity: quantityNum,
    series: rawSeries,
  } = req.body as IMintTxRequest;

  const series: Series | undefined = ParseSeries(rawSeries);
  if (series === undefined) {
    console.error(`Series ${series} does not exist`);
    res.status(500);
    return;
  }

  const { assetName, metadata } = GetAssetInfo(series);
  const { price, profitsAddr, maxPerTx, accountIndex, keyIndex, fungible } = GetPolicyInfo(series);
  const { policyId, forgingScript } = GetPolicy(series);

  if (quantityNum > maxPerTx) {
    console.warn(`Cannot buy ${quantityNum}, maxPerTx is ${maxPerTx}`);
    res.status(500);
    return;
  }

  const quantity = BigInt(quantityNum);
  const lovelaceNeeded = fungible ?
    (quantity * price + 1_500_000n + 2_000_000n).toString()
    : (quantity * (price + 1_500_000n) + 2_000_000n).toString()

  console.debug('/mint-tx', { lovelaceNeeded })
  // TODO this can fail?
  const selectedUtxos = largestFirst(lovelaceNeeded, utxos, true);

  const tx = getTxBuilder(accountIndex, keyIndex)
  tx.setTxInputs(selectedUtxos);

  // Add the mint to the tx
  tx.mintAsset(forgingScript, toMint(quantity, assetName, recipientAddress));

  // Add the aggregated metadata to the tx
  const meta = { [assetName]: metadata };
  tx.txBuilder.metadataValue('721', { [policyId]: meta });
  console.debug({ [policyId]: meta })

  // Send the profits to the organisation wallet
  tx.sendAssets(profitsAddr, [
    { unit: 'lovelace', quantity: (quantity * price).toString() },
  ]);

  // Return the change to the user
  tx.setChangeAddress(recipientAddress);
  tx.setTimeToExpire(getSlot(5))

  // Build the transaction
  const unsignedTx = await tx.build();

  // Pre-sign the transaction with policy key to avoid tampering
  const signedTxCbor: string = signTx(unsignedTx, accountIndex, keyIndex);

  const response: IMintTxResponse = { tx: signedTxCbor };
  res.status(200).json(response);
}

function toMint(
  quantity: bigint,
  assetName: string,
  recipientAddress: string,
): Mint {
  const mint: Mint = {
    assetName,
    assetQuantity: quantity.toString(),
    recipient: { address: recipientAddress },
  };
  return mint;
}
