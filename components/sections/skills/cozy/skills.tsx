'use client';
import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { skills } from '@/components/sections/skills/config';
import SkillCard from './skill-card';
import Reveal from '@/components/reveal';

function Skills() {
  return (
    <MotionWrap className="flex h-full w-full items-center" id="skills">
      <div className="container h-full overflow-y-auto px-4 md:px-6">
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
              </h2>
            </Reveal>
            <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
              Here are the technologies and tools I work with.
            </p>
          </div>

          <div className="grid gap-4 pb-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                description={skill.description}
                Icon={skill.Icon}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
