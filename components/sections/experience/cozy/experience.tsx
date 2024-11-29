'use client';
import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { experiences } from '@/components/sections/experience/config';
import ExperienceCard from './experience-card';
import Reveal from '@/components/reveal';

function Experience() {
  return (
    <MotionWrap className="flex h-full w-full items-center" id="experience">
      <div className="container h-full overflow-y-auto px-4 md:px-6">
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experience
              </h2>
            </Reveal>
            <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
              My professional journey and contributions to various projects.
            </p>
          </div>

          <div className="grid gap-4 pb-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                company={experience.company}
                name={experience.name}
                duration={experience.duration}
                description={experience.description}
                links={experience.links}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Experience;
