'use client';
import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { experiences } from '@/components/sections/experience/config';
import ExperienceCard from './experience-card';
import SectionTitle from '@/components/section-title';

function Experience() {
  return (
    <MotionWrap
      className="flex h-full w-full items-center pt-20"
      id="experience"
    >
      <div className="container h-full overflow-y-auto px-4 md:px-6">
        <div className="space-y-6">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey and contributions to various projects."
            icon={
              <svg
                viewBox="0 0 100 100"
                className="absolute -left-8 top-0 h-10 w-10"
                style={{ transform: 'rotate(-15deg)' }}
              >
                <path
                  d="M20 70 L80 70 L50 20 Z"
                  fill="#C41E3A"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <path
                  d="M15 70 L85 70 L85 80 L15 80 Z"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <circle
                  cx="50"
                  cy="20"
                  r="8"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </svg>
            }
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
