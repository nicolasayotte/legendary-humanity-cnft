import { createTransaction, IMintTxRequest } from '@/backend';
import { GetPolicyInfo } from '@/lib/series';
import { Series } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useWallet } from '@meshsdk/react';
import { Minus, Plus } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Heading, LargeText, MutedText, SmallerText } from './text';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { WalletBalance, WalletDisplay } from './wallet';

export const MintCard = (props: { series: Series }) => {
  const searchParams = useSearchParams();

  // Access specific search params
  const { wallet, connected } = useWallet();
  const debug = searchParams.get('debug');
  if (debug !== null) {
    console.warn('debug', debug);
  }
  const isDebug = debug === '5b0fbcca';
  const [quantity, setQuantity] = useState<number>(1);

  const [txHash, setTxHash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { price, maxPerTx } = GetPolicyInfo(props.series);

  const openingDate = new Date('2024-12-25T07:00:00.000Z').valueOf();
  const closingDate = new Date('2026-06-01T15:00:00.000Z').valueOf();
  //const closingDate = new Date('2025-01-10T15:00:00.000Z').valueOf();
  const isNotOpen = Date.now() < openingDate;
  const isClosed = Date.now() > closingDate;
  console.debug('Sale date status', {
    openingDate,
    closingDate,
    now: Date.now(),
  });

  const increment = () => setQuantity((q) => Math.min(maxPerTx, q + 1));
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  async function mint() {
    setLoading(true);
    try {
      const recipientAddress = await wallet.getChangeAddress();
      const utxos = await wallet.getUtxos();

      const req: IMintTxRequest = {
        recipientAddress,
        utxos,
        series: props.series,
        quantity,
      };
      const { tx } = await createTransaction(req); // presigned to prevent tampering
      const signedTxCbor = await wallet.signTx(tx, true);
      const txHash = await wallet.submitTx(signedTxCbor);
      setTxHash(txHash);
    } catch (error) {
      // TODO display error messages in a toast
      console.error(error);
    }
    setLoading(false);
  }

  const MintPrice = () => (
    <div className="flex flex-col p-4">
      <MutedText className="p-0 leading-none"> Mint price</MutedText>
      <LargeText className="p-0 leading-none">
        {' '}
        {(quantity * Number(price) * 1e-6).toString()} ADA{' '}
      </LargeText>
    </div>
  );

  const Quantity = () => (
    <div className="flex flex-row items-center">
      <Button variant="secondary" onClick={decrement}>
        <Minus />
      </Button>
      <LargeText className="font-normal leading-none p-4">{quantity}</LargeText>
      <Button variant="secondary" onClick={increment}>
        <Plus />
      </Button>
    </div>
  );

  const BottomSection = () => {
    if (txHash !== null) {
      return (
        <>
          <LargeText> Mago Museum Early Bird Pass minted</LargeText>
          <Heading>Your transaction is being processed.</Heading>
          <SmallerText>
            Please note: It may take a moment for your blockchain confirmation
            to appear during times of heavy blockchain load.
          </SmallerText>
        </>
      );
    }

    const disabled = loading || (!isDebug && (isNotOpen || isClosed));
    if (connected === true) {
      return (
        <div className="flex flex-col items-center bg-zinc-50/10">
          <div className="flex flex-row w-full justify-between px-4 py-4">
            <MintPrice />
            <Quantity />
          </div>
          <Button
            disabled={disabled}
            className="mb-8"
            variant="outline"
            size="lg"
            onClick={mint}
          >
            {isNotOpen
              ? 'Sale opens soon'
              : isClosed
                ? 'Sale is closed'
                : loading
                  ? 'Please wait...'
                  : 'Confirm purchase'}
          </Button>
        </div>
      );
    }

    return (
      <>
        <Separator className="mx-4 p-px bg-foreground" />
        <div className="flex flex-row items-center justify-between px-4 py-4">
          <MintPrice />
          <WalletDisplay>
            <div className="flex flex-row items-center justify-center cursor-pointer">
              <Button size="lg" variant="outline" disabled={disabled}>
                <WalletBalance />
              </Button>
            </div>
          </WalletDisplay>
        </div>
        <Heading>
          {isNotOpen
            ? 'Sale opens soon'
            : isClosed
              ? 'Sale is closed'
              : 'Wallet connection required'}
        </Heading>
        <SmallerText>
          {
            'To mint this ticket, please connect your wallet. Once your wallet is connected, you can proceed with your purchase.'
          }
        </SmallerText>
        <SmallerText>
          {
            'Before continuing, review the Terms & Conditions to ensure you understand it. By clicking "Connect wallet," you agree to these terms.'
          }
        </SmallerText>
      </>
    );
  };

  return (
    <div
      className={cn(
        'flex flex-col h-full p-12 xl:mr-24 bg-gradient-to-b',
        txHash === null
          ? 'from-mint-from to-mint-to'
          : 'from-minted-from to-minted-to',
      )}
    >
      {/*
      <div className="flex flex-row justify-between">
        <div className="flex flex-row align-center">
          {' '}
          <Disc />
          <SectionTitle className="p-0 pl-2">LIVE</SectionTitle>
        </div>
        <SectionTitle className="p-0"> TOTAL MINTED 300</SectionTitle>
      </div>
      */}

      <div className="flex flex-col py-4 h-80 items-center justify-center">
        <img
          className={txHash === null ? 'h-52' : 'h-full'}
          src={
            txHash === null
              ? '/images/MagoMuseum-EarlyBirdPass-Cut.webp'
              : '/images/mint-ticket-done.png'
          }
        />
      </div>

      <BottomSection />
    </div>
  );
};
