'use client';
import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { skills } from '@/components/sections/skills/config';
import SkillCard from './skill-card';
import SectionTitle from '@/components/section-title';

function Skills() {
  return (
    <MotionWrap className="flex h-full w-full items-center" id="skills">
      <div className="container h-full overflow-y-auto px-4 pt-32 md:px-6 md:pt-36">
        <div className="space-y-6">
          <SectionTitle
            title="My Skills"
            subtitle="Here are the technologies and tools I work with."
          />

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
