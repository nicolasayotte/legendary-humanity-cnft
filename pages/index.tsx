import Head from 'next/head';
import { useEffect, useState } from 'react';

import { NavBar } from '@/components/navbar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { Section, HalfSection } from '@/components/section';
import {
  HugeText,
  NormalText,
  LargeText,
  SectionTitle,
  Heading,
  MutedText,
} from '@/components/text';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const [isAnimating, setIsAnimating] = useState(true);

  const partners = [
    ['mago', 'https://magogallery.online/en'],
    ['artifact-labs', 'https://www.artifactlabs.com/'],
    ['the-frozen-fountain', 'https://frozenfountain.co.jp/'],
    ['snpit', 'https://lp.snpit.xyz/'],
    ['byte-plus', 'https://www.byteplus.com/en'],
    ['inovai', 'https://www.inovai.tech/'],
    ['cardano', 'https://cardano.org/'],
    ['golfin', 'https://golfin.io/'],
    ['bonsai-nft-club', 'https://www.bonsainft.club/ja'],
    ['arcana', 'https://arcana-mfg.com/'],
    ['la-comiccon', 'https://www.comicconla.com/'],
    ['smell-token', 'https://www.smelltoken.com/'],
    ['apas-port', 'https://apasport.xyz/'],
    ['nft-tokyo-art', 'https://nat4.nftarttokyo.xyz/'],
  ];

  // Start the animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false); // End the animation after a short delay
    }, 2_000); // Adjust the timeout to match your animation duration

    return () => clearTimeout(timer); // Clean up
  }, []);

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
        {false && (
          <div className="z-0 absolute">
            <span className="text-9xl text-black/20">
              By Legendary Humanity
            </span>
          </div>
        )}

        <div className="z-10 flex flex-col min-w-full w-full">
          <Section className="relative">
            <div className="flex flex-1 min-h-[70vh] flex-col justify-center items-center">
              <h1 className="text-[60px] xl:text-[120px] font-[275] p-0">
                "LH MUSEO"
              </h1>
              <h3 className="text-lg xl:text-2xl font-light text-foreground/50 leading-none p-0">
                An online museum experience.
              </h3>
            </div>
            <div className="flex w-full items-end flex-none place-content-between">
              <div>
                <MutedText className="pb-0">CURRENT MUSEUM</MutedText>
                <Heading className="py-0">Mago Nagasaka</Heading>
                <NormalText className="py-0">December</NormalText>
              </div>
              <div>
                <Heading className="py-0">FREE ENTRY</Heading>
                <NormalText className="py-0">
                  Powered by Legendary Humanity
                </NormalText>
              </div>
            </div>
          </Section>

          <Section className="p-0">
            <video className={`w-full h-full object-cover`} autoPlay>
              <source src="/videos/landing.mp4" type="video/mp4" />
            </video>
          </Section>

          <Section>
            <Separator className="mt-16" />
            <HalfSection className="flex-auto self-start">
              <SectionTitle>
                WELCOME TO LH MUSEO.
                <br />
                AN ONLINE MUSEUM EXPERIENCE LIKE NO OTHER.
              </SectionTitle>
              <div className="flex-1" />
              <LargeText>
                LH MUSEO brings to life legendary masterpieces through
                cutting-edge technology to deliver 3D scans in an online museum.
              </LargeText>
              <NormalText>
                We're on a mission to preserve and celebrate the most remarkable
                works of art from around the globe, ensuring that their legacy
                lives on for generations to come.
              </NormalText>
            </HalfSection>

            <Separator />

            <div className="flex flex-col xl:flex-row flex-auto w-full items-start">
              <HalfSection>
                <SectionTitle>01. PATENTED TECHNOLOGY</SectionTitle>
              </HalfSection>
              <HalfSection className="pb-8">
                <NormalText>
                  Our 3D scanning technology allows us to capture every
                  intricate detail of the masterpieces in our collection,
                  ensuring that the digital renditions are as close to the
                  original works as possible.
                </NormalText>
              </HalfSection>
            </div>

            <Separator />

            <div className="flex flex-col xl:flex-row flex-auto w-full items-start">
              <HalfSection>
                <SectionTitle>02. COLLABORATIONS</SectionTitle>
              </HalfSection>
              <HalfSection className="pb-8">
                <NormalText>
                  LH MUSEO is committed to presenting a diverse and
                  thought-provoking range of exhibitions, showcasing
                  masterpieces from various cultures, eras, and disciplines.
                </NormalText>
              </HalfSection>
            </div>
          </Section>

          <Section className="p-0">
            <video className="w-full h-full object-cover" autoPlay loop>
              <source src="/videos/LA-museum.mp4" type="video/mp4" />
            </video>
          </Section>

          <Section className="bg-gray-200">
            <div className="flex flex-col xl:flex-row xl:flex-wrap xl:place-content-between h-full w-full">
              <HalfSection className="h-1/2">
                <SectionTitle> CURRENT MUSEUM</SectionTitle>
              </HalfSection>

              <HalfSection className="h-1/2 items-end">
                <HugeText className="text-right">
                  {' '}
                  December
                  <br /> 2024
                </HugeText>
              </HalfSection>

              <HalfSection className="h-1/2 justify-end">
                <h1 className="text-[100px] leading-none font-normal">
                  {' '}
                  Mago <br />
                  Nagasaka
                </h1>
                <Button
                  className="w-fit mt-10"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push('/exhibition')}
                >
                  Learn more
                </Button>
              </HalfSection>

              <HalfSection className="h-1/2 items-end">
                <img
                  src="/images/home-mago-exhibition.png"
                  className="h-full object-contain"
                />
              </HalfSection>
            </div>
          </Section>

          <Section>
            <div className="flex flex-row flex-wrap gap-0 place-content-center place-items-center">
              {partners.map(([p, link]) => (
                <div
                  key={p}
                  className="cursor-pointer border min-w-80 min-h-40 px-4"
                  onClick={() => router.push(link)}
                >
                  <img
                    src={`/partners/${p}.png`}
                    className="w-80 h-40 object-contain"
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <img
              src="/images/home-render.png"
              className="w-full h-full object-cover"
            />
          </Section>

          <Section className="items-start xl:h-full">
            <HalfSection>
              <LargeText className="font-medium text-[#687977]">
                LH MUSEO showcases the beauty of things as they were created, as
                they were intended.
              </LargeText>
              <NormalText>
                Legendary Humanity believes in the responsibility to safeguard
                our collective heritage, a testament to human achievement, is
                clear, though the challenges are daunting.
              </NormalText>
              <div className="flex gap-4">
                <Button
                  className="w-fit mt-10"
                  variant="outline"
                  onClick={() => router.push('/')}
                >
                  Learn more
                </Button>
                <Button
                  className="w-fit mt-10"
                  variant="outline"
                  onClick={() => router.push('/exhibition')}
                >
                  View exhibition
                </Button>
              </div>
            </HalfSection>
          </Section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
