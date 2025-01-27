import { CircleButton } from '@/components/button';
import Wrapper from '@/components/wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CreatorInfo: React.FC = () => {
  return (
    <div className="relative flex justify-center bg-background pt-32" id="creator">
      <Image
        src="/details/detail3.png"
        alt="Detail 3"
        width={150}
        height={150}
        className="absolute -bottom-20 right-8 z-10 opacity-25 lg:right-64 size-auto"
      />
      <Wrapper className="z-20 flex flex-col-reverse gap-8 lg:flex-row">
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          <p className="text-center font-extrabold uppercase text-primary lg:text-left">
          Our Navigator
          </p>
          <h1 className="text-center text-5xl sm:text-5xl lg:text-left lg:text-6xl xl:text-6xl">
            Caroline Boule
          </h1>
          <p className="text-center tracking-wide opacity-75 lg:text-justify">
          Caroline Boule is a Franco-Polish sailor and scientific researcher. Passionate about sailing since her childhood in Poland, she also excelled in studying materials science and nuclear engineering at Imperial College London. After graduating in 2020, she started a PhD at École Polytechnique while pursuing sailing projects.
          In 2023, Caroline made history by becoming the first woman to sail solo across the Atlantic on a foiling boat during the challenging Mini Transat race. She also set records, notably in the Mini 6.50 category.
          Alongside her maritime achievements, she continues her scientific research, combining her passions for science and sailing, while sharing her adventures on social media.
          </p>
          <div className="flex justify-center gap-2 lg:justify-start">
            <Link href="https://www.youtube.com/channel/UC9TJuuWbOYSYfJIKa2fRZsA" target="_blank">
              <CircleButton className="items-center justify-center">
                <Image src={'/socials/youtube.svg'} alt="Youtube" width={24} height={24} />
              </CircleButton>
            </Link>
            <Link href="https://www.instagram.com/caroboule/?hl=fr" target="_blank">
              <CircleButton className="flex items-center justify-center">
                <Image src={'/socials/instagram.svg'} alt="Instagram" width={24} height={24} />
              </CircleButton>
            </Link>
            <Link href="https://www.linkedin.com/in/caroline-boule-a83ab2109/" target="_blank">
              <CircleButton className="items-center justify-center">
                <Image src={'/socials/linkedin.svg'} alt="Linkedin" width={24} height={24} />
              </CircleButton>
            </Link>
            <Link href="https://www.facebook.com/caroboule.sailing" target="_blank">
              <CircleButton className="items-center justify-center">
                <Image src={'/socials/facebook.svg'} alt="Facebook" width={24} height={24} />
              </CircleButton>
            </Link>
            <Link href="https://www.tiktok.com/@carolineboule7" target="_blank">
              <CircleButton className="items-center justify-center">
                <Image src={'/socials/tiktok.svg'} alt="Tiktok" width={24} height={24} />
              </CircleButton>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center lg:w-1/2">
          <Image
            src="/backgrounds/CB_boat.jpeg"
            alt="CB boat"
            width={500}
            height={500}
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default CreatorInfo;
