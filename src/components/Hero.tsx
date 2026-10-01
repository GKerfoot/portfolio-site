import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 md:px-12 lg:px-24">
      <div className="flex-1 flex items-center w-full max-w-7xl mx-auto py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-12 lg:gap-16">
          <div className="min-w-0">
            <h1 className="font-heading font-bold text-[3rem]/[0.9] sm:text-6xl/[0.9] md:text-7xl/[0.9] lg:text-8xl/[0.9] xl:text-[6.25rem]/[0.9] tracking-[-0.035em] text-navy">
              Gretchen
              <br />
              Kerfoot
            </h1>
            <p className="mt-5 md:mt-6 font-sans text-base md:text-lg text-navy/45 max-w-md">
              This is my design portfolio. Enjoy!
            </p>
          </div>

          <motion.img
            src="/ABDB4D95-2C52-4C84-BC78-BB45FBDD88DA.png"
            alt="Gretchen Kerfoot"
            className="w-64 sm:w-72 md:w-[22rem] lg:w-[24rem] xl:w-[26rem] h-auto object-contain shrink-0 self-center md:self-auto select-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pb-10 md:pb-12 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-navy/25">
          <span className="text-[11px] font-sans font-medium uppercase tracking-[0.28em]">
            Scroll
          </span>
          <ArrowDownIcon className="w-4 h-4 animate-bounce" strokeWidth={1.5} />
        </div>
      </motion.div>
    </section>
  );
}
