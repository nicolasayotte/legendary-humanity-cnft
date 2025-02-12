import { useEffect, useState } from 'react';
import { useLovelace, useWallet, useWalletList } from '@meshsdk/react';
import { Wallet } from '@meshsdk/common';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NormalText } from './text';
import { NETWORK } from '@/lib/consts';

export const WalletBalance = () => {
  const { connecting, connected, name } = useWallet();
  const wallets = useWalletList({ metamask: { network: NETWORK } });
  const wallet = wallets.find((wallet) => wallet.id === name);

  const lovelace = useLovelace();
  const lovelaceString =
    '₳ ' + parseInt((parseInt(lovelace ?? '0', 10) / 1_000_000).toString(), 10);

  return connected && lovelace && wallet?.icon ? (
    <>
      <img className="h-8 w-8" src={wallet.icon} />
      <span className="ml-2 leading-2 text-nowrap">{lovelaceString}</span>
    </>
  ) : connected && wallet?.icon ? (
    <img className="h-6" src={wallet.icon} />
  ) : connecting ? (
    <span className="leading-2 text-nowrap">Connecting...</span>
  ) : (
    <span className="leading-2 text-nowrap">Connect Wallet</span>
  );
};

function WalletButton({
  wallet,
  action,
  active,
}: {
  wallet: Wallet;
  action: any;
  active: boolean;
}) {
  return (
    <Button
      className="flex flex-row items-center justify-start w-full"
      variant={active ? 'default' : 'outline'}
      size="wallet"
      onClick={action}
    >
      {wallet.icon !== undefined ? (
        <img className="m-1 h-10 w-10 mr-4" src={wallet.icon} />
      ) : (
        <div className="w-1 m-1" />
      )}
      <NormalText className="p-0">{wallet.name}</NormalText>
    </Button>
  );
}

interface ButtonProps {
  label?: string;
  onConnected?: Function;
  extensions?: number[];
  children?: any;
}

export const WalletDisplay = ({
  onConnected = undefined,
  extensions = [],
  children,
}: ButtonProps) => {
  const { connect, connected, name } = useWallet();
  const wallets = useWalletList({ metamask: { network: NETWORK } });
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  useEffect(() => {
    if (connected && onConnected) {
      onConnected();
    }
  }, [connected]);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <div>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Connect WALLET</SheetTitle>
          <SheetDescription>
            By connecting your wallet, you agree to the Terms &amp; Conditions
            and Privacy Policy
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4">
          {wallets.map((wallet, i: number) => (
            <WalletButton
              key={wallet.name + i.toString()}
              wallet={wallet}
              action={(e: any) => {
                closeSheet();
                connect(wallet.id, extensions);
              }}
              active={name === wallet.id}
            />
          ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
