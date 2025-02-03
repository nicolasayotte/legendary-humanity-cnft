import Link from 'next/link';
import { MutedText, NormalText, SectionTitle } from './text';
import { Separator } from './ui/separator';

export const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full p-10">
      <Separator className="my-4" />
      <div className="flex w-full flex-row place-content-between">
        <div>
          <SectionTitle className="leading-3">
            LH MUSEO: A project by Legendary Humanity
          </SectionTitle>
          <MutedText className="leading-3">Be part of the movement.</MutedText>
          <MutedText className="leading-3">
            Legendary Humanity © All Rights Reserved
          </MutedText>
        </div>
        <NormalText>
          <Link href="/terms">Terms and conditions</Link>
        </NormalText>
      </div>
      <img className="w-[166px] h-[199px]" src="/images/logo-footer.png" />
    </div>
  );
};
