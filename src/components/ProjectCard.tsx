import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  description: string;
  color: string;
  image?: string;
  imagePosition?: string;
  large?: boolean;
  index: number;
}
export function ProjectCard({
  slug,
  title,
  category,
  description,
  color,
  image,
  imagePosition,
  large = false,
  index
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return <Link to={`/project/${slug}`} className={large ? 'row-span-2 block' : 'block'}>
      <motion.article initial={{
      opacity: 0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: '-100px'
    }} transition={{
      duration: 0.6,
      delay: index * 0.1,
      ease: 'easeOut'
    }} whileHover={{
      y: -8
    }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} className="relative overflow-hidden cursor-pointer group rounded-2xl h-full">
        <div className="relative h-full bg-navy/[0.03] border border-navy/10 hover:border-accent/40 transition-colors duration-300 rounded-2xl overflow-hidden">
          {/* Image or colored placeholder area */}
          <div className={`relative overflow-hidden ${large ? 'h-80 md:h-96' : 'h-64'}`} style={{
          backgroundColor: color
        }}>
            {image ? <img src={image} alt={`${title} preview`} className={`absolute inset-0 w-full h-full object-cover ${imagePosition || 'object-top'}`} /> : <div className="absolute inset-0 opacity-[0.08]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                </svg>
              </div>}

            {/* Hover overlay */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: isHovered ? 1 : 0
          }} transition={{
            duration: 0.3
          }} className="absolute inset-0 bg-navy/50 flex items-center justify-center">
              <div className="flex items-center gap-2 text-white font-sans font-medium">
                <span>View Project</span>
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-sans font-medium uppercase tracking-wider text-accent">
                {category}
              </span>
              <div className="h-px flex-1 bg-navy/10" />
            </div>

            <h3 className="font-heading font-semibold text-2xl md:text-3xl mb-3 text-navy tracking-tight">
              {title}
            </h3>

            <p className="font-sans text-sm md:text-base text-navy/50 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </motion.article>
    </Link>;
}