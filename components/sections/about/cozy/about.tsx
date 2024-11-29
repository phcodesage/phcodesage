import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                About
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Me
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here&apos;s where I share my journey through tech.
          </p>
        </div>
        <div className="space-y-4">
          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A Computer Science student and KodeGo graduate with a background as
            a former computer technician. My journey in tech has equipped me
            with both practical hardware experience and modern software
            development skills.
          </p>

          <Button asChild>
            <Link href="resume.pdf" target="_blank">
              View Resume <ArrowUpRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
