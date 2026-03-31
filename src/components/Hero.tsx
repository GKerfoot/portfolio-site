import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        
        <div className="flex-1">
          <h1 className="font-heading font-semibold text-6xl md:text-7xl lg:text-8xl mb-4 text-navy tracking-tight">
            Gretchen Kerfoot
          </h1>
          <p className="font-sans text-lg md:text-xl text-navy/50 max-w-2xl">
            This is my design portfolio. Enjoy!
          </p>
        </div>
        <motion.img
          src="/ABDB4D95-2C52-4C84-BC78-BB45FBDD88DA.png"
          alt="Gretchen Kerfoot"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: 'easeOut'
          }} />
        
      </motion.div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 0.6
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2">
        
        <div className="flex flex-col items-center gap-2 text-navy/30">
          <span className="text-xs font-sans uppercase tracking-wider">
            Scroll
          </span>
          <ArrowDownIcon className="w-4 h-4 animate-bounce" />
        </div>
      </motion.div>
    </section>);

}