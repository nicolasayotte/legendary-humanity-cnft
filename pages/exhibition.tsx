import Head from 'next/head';
import { useRouter } from 'next/router';

import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';
import { Section } from '@/components/section';
import { Heading, HugeText, MutedText, NormalText } from '@/components/text';
import { Button } from '@/components/ui/button';

export default function Home() {
  const router = useRouter();
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
        <div className="z-10 flex flex-col items-center">
          <div className="fixed left-4 top-[50vh]">
            <MutedText className="text-gray-400">CURRENT MUSEUM</MutedText>
          </div>

          <div className="fixed right-4 top-[50vh]">
            <MutedText className="text-right text-gray-400">
              ON LH MUSEO
              <br />
              DECEMBER 2024
            </MutedText>
          </div>

          <Section className="p-0 xl:h-screen">
            <video className="w-full h-full object-cover" autoPlay>
              <source src="/videos/Still-A-Black-Star.mp4" type="video/mp4" />
            </video>
          </Section>

          <div className="flex flex-col w-4/5 lg:w-2/3 xl:w-1/2 items-start p-4">
            <HugeText className="text-center self-center">
              Transforming the Ghana slum areas and improve the lives of those
              who call them home.
            </HugeText>

            <img
              className="w-[203px] h-[210px] self-center my-10"
              src="/images/exhibition-main.png"
            />

            <div className="flex flex-col w-full items-start p-20">
              <Heading>{'“MAGO MUSEUM” – A World First'}</Heading>

              <NormalText>
                {
                  'We are honored to present Mago Nagasaka’s very first online museum, MAGO MUSEUM, offering an immersive view of his work. This exhibition represents a special moment, allowing audiences worldwide to explore Mago’s world through a lens that captures details of his powerful creations and learn about his mission to eradicate slums in Ghana.'
                }
              </NormalText>

              <Heading>{'Mago Nagasaka: A Visionary with Purpose'}</Heading>

              <NormalText>
                {
                  'Mago is not just an artist—he is a force for change. His devotion to the plight of Ghana’s Agbogbloshie, the world’s largest e-waste slum, forms the foundation of his work. Mago highlights urgent environmental and humanitarian crises by repurposing discarded e-waste into thought-provoking art.'
                }
              </NormalText>

              <NormalText>
                {
                  'His efforts extend beyond the canvas. Mago has made numerous trips to Ghana, personally distributing gas masks to protect local communities who rely on burning e-waste to salvage metals to sell. Mago is also actively building a sustainable town, aiming for completion by 2030, introducing farming and recycling factories to create lasting change. At the core of his mission is his philosophy of "sustainable capitalism," using the power of art and ethical business practices to drive both social impact and economic growth — believing that donations alone are not enough to solve these problems.'
                }
              </NormalText>

              <Heading>
                {'Witness the Art of Change and Support his Mission'}
              </Heading>

              <NormalText>
                {
                  'Every element of MAGO MUSEUM is infused with deliberate meaning, reflecting Mago’s mission. At the heart of the exhibition stands the Moon Tower, a piece that was originally built in Ghana, made from collected plastic bottles. The Moon Tower serves as a symbol of peace and resilience for the community.'
                }
              </NormalText>

              <NormalText>
                {
                  'In addition to exploring his art, the exhibition will soon offer e-commerce capabilities, allowing visitors to purchase Mago’s works directly. This will give art enthusiasts an unique opportunity to own his piece while supporting his mission to build a better future. By contributing, you are not just acquiring art—you are becoming part of a movement for change.'
                }
              </NormalText>

              <div className="flex flex-row w-full justify-center gap-2 py-4">
                <Button
                  className="w-1/2"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push('/mint')}
                >
                  {'Mint'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
