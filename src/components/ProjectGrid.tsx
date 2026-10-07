import React from 'react';
import { ProjectScatter } from './ProjectScatter';

export function ProjectGrid() {
  return <section className="px-6 pb-24 pt-0 [container-type:inline-size]">
      <div className="mx-auto w-full max-w-[961px]">
      <div className="mb-16">
        <h2 className="font-heading text-[48px] font-semibold leading-normal text-black">
          Selected Work
        </h2>
        <p className="mt-4 max-w-[892px] font-heading text-[15px] font-normal leading-normal text-black">
          A collection of recent projects spanning product design, research, and more!
        </p>
      </div>

      <ProjectScatter />
      </div>
    </section>;
}
