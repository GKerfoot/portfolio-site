import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
export function ProjectGrid() {
  return <section className="px-6 md:px-12 lg:px-24 pb-24 pt-0 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-heading font-semibold text-4xl md:text-5xl text-navy mb-4 tracking-tight">
          Selected Work
        </h2>
        <p className="font-sans text-navy/50 max-w-2xl">
          A collection of recent projects spanning product design, development,
          and more!
        </p>
      </div>

      <div className="flex flex-col gap-6 md:hidden">
        {projects.map((project, index) => <ProjectCard key={project.title} {...project} large={index === 0 || index === 3} index={index} />)}
      </div>
      <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
        {[0, 1].map((column) => <div key={column} className="flex flex-col gap-8">
            {projects.filter((_, index) => index % 2 === column).map((project) => {
              const index = projects.indexOf(project);
              return <ProjectCard key={project.title} {...project} large={index === 0 || index === 3} index={index} />;
            })}
          </div>)}
      </div>
    </section>;
}