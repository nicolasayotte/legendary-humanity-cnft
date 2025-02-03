import { Footer } from '@/components/footer';
import { MintCard } from '@/components/mintCard';
import { NavBar } from '@/components/navbar';
import { HalfSection } from '@/components/section';
import {
  LargeText,
  NormalText,
  SectionTitle,
  SmallerText,
} from '@/components/text';
import { Separator } from '@/components/ui/separator';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="w-screen max-w-none font-semibold text-lg leading-normal text-black container">
      <Head>
        <title>Legendary Humanity</title>
        <meta name="description" content="Legendary Humanity" />
        <link rel="icon" href="/images/logo.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Armata&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          }
          rel="stylesheet"
        />
      </Head>

      <nav>
        <NavBar />
      </nav>

      <main className="main">
        <div className="z-10 flex flex-col xl:flex-row xl:pt-16 items-center w-screen h-full xl:h-screen bg-secondary">
          <HalfSection className="flex-row p-0">
            <div className="hidden xl:flex xl:block h-full min-h-full flex-col justify-end p-4 xl:p-12 bg-primary">
              <img
                className="min-w-[2.5rem] w-[2.5rem] xl:min-w-[4.2rem] xl:w-[4.2rem]"
                src="/images/MAGO-LH-MUSEO.svg"
              />
            </div>
            <div className="flex flex-col justify-end min-h-full h-full p-4 xl:p-12 bg-secondary">
              <img
                className="min-w-[2.5rem] w-[2.5rem] xl:min-w-[3.5rem] xl:w-[3.5rem]"
                src="/images/MAGO-LIVE-TICKET.svg"
              />
            </div>
            <div className="flex flex-col text-white p-4 xl:p-8">
              <SectionTitle className="pt-4 xl:pt-8 font-light">
                AVAILABLE DECEMBER 2024
              </SectionTitle>

              <Separator className="py-px bg-white/20" />

              <LargeText className="pt-6 xl:pt-12">
                {'MAGO MUSEUM Early Bird Pass'}
              </LargeText>

              <Separator className="py-px bg-white/20 my-8" />

              <SmallerText>
                With the EARLY BIRD PASS, you’ll unlock more than just an
                exclusive digital pass at a discounted price—here’s what’s
                included:
              </SmallerText>

              <ul className="list-disc text-base xl:text-xl font-light pl-4 pb-4">
                <li>
                  <SmallerText>
                    <b>Token Airdrop:</b> Receive 100% of the mint price back in
                    $VIVI, the token used within the Legendary Humanity
                    ecosystem. (Claimable after $VIVI is listed in Q1 2025.
                    Unlocks 1/12 of the amount monthly over a year at the
                    listing price. For more details, visit our official X page.)
                  </SmallerText>
                </li>

                <li>
                  <SmallerText>
                    <b>Beta Access to MAGO Museum:</b>Be among the first to
                    explore the beta version of MAGO Museum, offering a sneak
                    peek at its earliest models. Witness the evolution of this
                    online art space and have the unique opportunity to share
                    your feedback to help shape its future.
                  </SmallerText>
                </li>

                <li>
                  <SmallerText>
                    <b>Access to Still a Black Star:</b>Enjoy token-gated access
                    to Mago’s powerful documentary, made available online for
                    the first time.
                  </SmallerText>
                </li>

                <li>
                  <SmallerText>
                    <b>Special Discord Role:</b>Join the inner circle of Mago’s
                    dedicated community with a unique role and connect with
                    fellow supporters.
                  </SmallerText>
                </li>
              </ul>
            </div>
          </HalfSection>

          <HalfSection className="p-0 xl:p-24">
            <MintCard series={'MAGO MUSEUM Early Bird Pass'} />
          </HalfSection>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
