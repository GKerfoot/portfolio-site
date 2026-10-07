import React from 'react';
import { ProjectScatter } from './ProjectScatter';

export function ProjectGrid() {
  return <section className="px-6 md:px-12 lg:px-24 pb-24 pt-0 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-heading font-semibold text-4xl md:text-5xl text-black mb-4 tracking-tight">
          Selected Work
        </h2>
        <p className="font-sans text-black max-w-2xl">
          A collection of recent projects spanning product design, development,
          and more!
        </p>
      </div>

      <ProjectScatter />
    </section>;
}
