import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import SectionTitle from '@/components/section-title';

function About() {
  return (
    <MotionWrap
      className="flex h-[calc(100vh-5rem)] w-full items-center justify-center"
      id="about"
    >
      <div className="container max-h-full px-4 md:px-6">
        <div className="grid h-full items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
            <div>
              <SectionTitle
                title="About Me"
                subtitle="From Computer Tech to Software Developer"
              />
              <div className="mt-4">
                <p className="text-gray-500 dark:text-gray-400 md:text-lg lg:text-base xl:text-lg">
                  A Computer Technician who evolved into a Software Developer
                  through KodeGo Bootcamp, now pursuing Computer Science. My
                  journey combines hands-on hardware experience with modern
                  software development practices. Beyond coding, I&apos;m an
                  avid chess player and RPG gaming enthusiast, bringing the same
                  strategic thinking and problem-solving approach to software
                  development. This diverse background enables me to create
                  practical, user-focused solutions while maintaining a deep
                  understanding of both hardware and software aspects.
                </p>
              </div>
            </div>
            <Button asChild className="w-fit">
              <Link href="resume.pdf" target="_blank">
                View Resume <ArrowUpRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          {/* Profile Image */}
          <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl lg:col-span-7">
            <Image
              src="/images/profile.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
