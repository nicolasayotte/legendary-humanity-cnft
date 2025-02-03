import {
  AppWallet,
  MeshWallet,
  EmbeddedWallet,
  KoiosProvider,
  Transaction,
  resolvePaymentKeyHash,
  deserializeAddress,
  resolveSlotNo,
} from '@meshsdk/core';

import { NETWORK } from '../consts';

let network: 'api' | 'preprod' = NETWORK === 'mainnet' ? 'api' : 'preprod';

console.warn('Loading server/wallet')
console.warn('MNEMONIC', process.env.MNEMONIC)

// Server side only

const words: string[] =
  process.env.MNEMONIC?.split(' ') || [...new Array(24)].map(() => 'solution');

if (words.length !== 24) {
  throw new Error('MNEMONIC env var must hold 24 words');
}

const blockchainProvider = new KoiosProvider(network);

const walletParams: any = {
  networkId: NETWORK === 'mainnet' ? 0 : 1,
  fetcher: blockchainProvider,
  submitter: blockchainProvider,
  key: {
    type: 'mnemonic',
    words,
  },
}

const appWallet: AppWallet = new AppWallet(walletParams)

export function makeMnemonic(): string[] {
  return EmbeddedWallet.generateMnemonic(256);
}

export function getPaymentKeyHash(
  accountIndex = 0,
  keyIndex = 0,
): string | undefined {
  const address = appWallet.getPaymentAddress(accountIndex, keyIndex);
  const { pubKeyHash } = deserializeAddress(address);
  console.debug('getPaymentKeyHash', { accountIndex, keyIndex, pubKeyHash })
  return pubKeyHash
}

export function signTx(
  unsignedTx: string,
  accountIndex = 0,
  keyIndex = 0,
): string {
  console.debug('signTx', { accountIndex, keyIndex })
  return appWallet.signTx(unsignedTx, true, accountIndex, keyIndex)
}

export function getSlot(minutes: number = 0): string {
  return resolveSlotNo(NETWORK, Date.now() + minutes * 60_000)
}

export function getTxBuilder(accountIndex = 0, keyIndex = 0) {
  console.debug('getTxBuilder', { accountIndex, keyIndex })
  return new Transaction({
    initiator: new MeshWallet({
      ...walletParams,
      accountIndex,
      keyIndex,
    })
  })
}
