import React, { useState } from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { metadata as meta } from '@/app/config';
import { hero } from '@/components/sections/hero/config';
import 'animate.css';
import { FullscreenImage } from '@/components/ui/fullscreen-image';
import { Maximize2 } from 'lucide-react';

function Hero() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <MotionWrap className="flex min-h-[100dvh] w-full items-start justify-center pt-24 md:items-center md:pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid items-center justify-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-3 text-left">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-foreground/10">
              {hero.label}
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I&apos;m{' '}
              <span className="animate__animated animate__bounce">
                {hero.name}
              </span>
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {hero.description}
            </p>
          </div>

          <div className="group relative aspect-video">
            <Image
              alt="Image"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center transition-all duration-300 group-hover:brightness-75"
              height="450"
              sizes="100vw"
              src={'/images/hero.jpg'}
              width="800"
              priority
            />
            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <Maximize2 className="h-10 w-10 text-white drop-shadow-lg" />
            </button>
          </div>
        </div>
      </div>

      <FullscreenImage
        src="/images/hero.jpg"
        alt="Hero image"
        isOpen={isFullscreen}
        onClose={() => setIsFullscreen(false)}
      />
    </MotionWrap>
  );
}

export default Hero;
