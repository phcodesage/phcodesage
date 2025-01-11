'use client';
import React from 'react';
import ProjectCard from './project-card';
import { projects } from '@/components/sections/projects/config';
import MotionWrap from '@/components/motion-wrap';
import SectionTitle from '@/components/section-title';

function Projects() {
  return (
    <MotionWrap className="flex h-full w-full items-center" id="projects">
      <div className="container h-full overflow-y-auto px-4 md:px-6">
        <div className="space-y-6">
          <SectionTitle
            title="Projects"
            subtitle="Here are some of the projects where I've turned code into impactful solutions."
          />

          <div className="grid gap-4 pb-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                slug={project.slug}
                name={project.name}
                description={project.description}
                thumbnail={project.thumbnail}
                className="h-full"
                metrics={project.metrics}
                timeline={project.timeline}
                role={project.role}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
