'use client';
import React from 'react';
import ProjectCard from './project-card';
import Reveal from '@/components/reveal';
import { projects } from '@/components/sections/projects/config';
import MotionWrap from '@/components/motion-wrap';

function Projects() {
  return (
    <MotionWrap className="flex h-full w-full items-center" id="projects">
      <div className="container h-full overflow-y-auto px-4 md:px-6">
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Projects
              </h2>
            </Reveal>
            <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
              Here are some of the projects where I&apos;ve turned code into
              cool, functional stuff.
            </p>
          </div>

          <div className="grid gap-4 pb-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                slug={project.slug}
                name={project.name}
                description={project.description}
                thumbnail={project.thumbnail}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
