import React from 'react';
import { motion } from 'framer-motion';
import { FileTextIcon } from 'lucide-react';
const skills = ['React & TypeScript', 'Figma', 'Node.js & Python', 'UI/UX Research', 'Microsoft Office', 'Java & C++'];
export function About() {
  return <section className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-navy mb-6 tracking-tight">
            About Me
          </h2>
          <div className="space-y-4 font-sans text-navy/60 leading-relaxed">
            <p>
              Hello! My name is Gretchen, and I am a current junior at Dartmouth
              College. I study computer science and human-centered design,
              focusing on the intersection of design thinking with computer
              programming and product development.
            </p>
            <p>
              Outside of my studies, I am a member of the Dartmouth Ski Patrol,
              Sigma Delta sorority, and the Casual Thursday improv troupe. I
              love skiing, hiking, SCUBA diving, and all things outdoors.
            </p>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 font-sans text-sm text-navy/50 hover:text-accent transition-colors duration-300">
            <FileTextIcon className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <h3 className="font-heading font-semibold text-2xl text-navy mb-6 tracking-tight">
            Skills & Tools
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => <div key={skill} className="font-sans text-sm text-navy/60 border border-navy/10 rounded-xl px-4 py-3 hover:border-accent/40 hover:text-navy transition-colors duration-300">
                {skill}
              </div>)}
          </div>
        </motion.div>
      </div>
    </section>;
}