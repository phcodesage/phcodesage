'use client';
import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { experiences } from '@/components/sections/experience/config';
import ExperienceCard from './experience-card';
import SectionTitle from '@/components/section-title';

function Experience() {
  return (
    <MotionWrap className="flex h-full w-full items-center" id="experience">
      <div className="container h-full overflow-y-auto px-4 md:px-6">
        <div className="space-y-6">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey and contributions to various projects."
          />

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
