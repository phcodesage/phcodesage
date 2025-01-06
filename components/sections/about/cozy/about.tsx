'use client';
import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRightIcon } from 'lucide-react';
import SectionTitle from '@/components/section-title';

function About() {
  return (
    <MotionWrap
      className="flex h-[calc(100vh-5rem)] w-full items-center justify-center"
      id="about"
    >
      <div className="container max-h-full px-4 md:px-6">
        <div className="flex h-full flex-col justify-center space-y-6">
          <SectionTitle
            title="About Me"
            subtitle="From Computer Tech to Software Developer"
          />

          <div className="grid items-stretch gap-6 lg:grid-cols-12">
            {/* About Text - Takes up less space */}
            <div className="order-2 flex flex-col justify-between space-y-4 lg:order-1 lg:col-span-5">
              <p className="text-gray-500 dark:text-gray-400 md:text-lg lg:text-base xl:text-lg">
                Former Computer Technician turned Software Developer, currently
                pursuing Computer Science. I blend hardware expertise with
                modern development practices. Outside coding, I enjoy chess and
                RPG games, applying the same strategic thinking to solve complex
                technical challenges.
              </p>

              <Button asChild className="w-fit">
                <Link href="resume.pdf" target="_blank">
                  View Resume <ArrowUpRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
            </div>

            {/* Profile Image - Takes up more space */}
            <div className="relative order-1 h-full min-h-[400px] overflow-hidden rounded-2xl lg:order-2 lg:col-span-7">
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
      </div>
    </MotionWrap>
  );
}

export default About;
