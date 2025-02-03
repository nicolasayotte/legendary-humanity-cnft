'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { WalletBalance, WalletDisplay } from './wallet';

const MenuLink = ({ name, href, hover, changeHover }: any) => {
  return (
    <MenuFade name={name} hover={hover} changeHover={changeHover}>
      <Link href={href}>{name}</Link>
    </MenuFade>
  );
};

const MenuFade = ({ name, href, hover, changeHover, children }: any) => {
  const pathname = usePathname();
  const isNotHover = hover !== '' && hover !== name;

  return (
    <div
      className={cn(
        'transition-colors border border-background p-2 rounded-3xl hover:border-foreground',
        {
          'text-muted': isNotHover,
          'text-primary': !isNotHover && pathname === href,
          'text-foreground': !isNotHover && pathname !== href,
        },
      )}
      onMouseEnter={() => changeHover(name)}
      onMouseLeave={() => changeHover('')}
    >
      {children}
    </div>
  );
};

export const NavBar: React.FC<any> = () => {
  const [hover, setHover] = useState<string>('');
  function changeHover(name: string) {
    setHover(name);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex z-30 p-2 min-h-16 items-center justify-center gap-4 xl:gap-6 bg-background">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.webp" className="h-8 w-8 mr-3" />
          LH MUSEO
        </Link>
        <div className="grow" />
        <MenuLink
          hover={hover}
          changeHover={changeHover}
          name="About"
          href="/"
        />
        <MenuLink
          hover={hover}
          changeHover={changeHover}
          name="Exhibition"
          href="/exhibition"
        />
        <MenuLink
          hover={hover}
          changeHover={changeHover}
          name="Mint"
          href="/mint"
        />
        <WalletDisplay>
          <MenuFade
            hover={hover}
            changeHover={changeHover}
            name="Wallet"
            href=""
          >
            <div className="flex flex-row items-center justify-center cursor-pointer">
              <WalletBalance />
            </div>
          </MenuFade>
        </WalletDisplay>
      </nav>
    </>
  );
};
