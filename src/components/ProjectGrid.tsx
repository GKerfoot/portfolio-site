import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
export function ProjectGrid() {
  return <section className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-heading font-semibold text-4xl md:text-5xl text-navy mb-4 tracking-tight">
          Selected Work
        </h2>
        <p className="font-sans text-navy/50 max-w-2xl">
          A collection of recent projects spanning product design, development,
          and more!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-auto">
        {projects.map((project, index) => <ProjectCard key={project.title} {...project} large={index === 0 || index === 3} index={index} />)}
      </div>
    </section>;
}