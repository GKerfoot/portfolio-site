import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-5 sm:px-8 py-16 md:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="font-hero font-black text-black text-center leading-[0.86] tracking-[-0.05em] text-[clamp(3.5rem,10.5vw,11.25rem)]">
        Gretchen Kerfoot
      </motion.h1>

      <motion.article
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
        className="mt-10 md:mt-14 w-full max-w-[880px] rounded-[28px] overflow-hidden shadow-[0_24px_55px_-18px_rgba(30,24,18,0.22)]"
        style={{ backgroundImage: 'url(/topo.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="px-6 py-7 sm:px-8 sm:py-8 md:px-10 md:pt-9 md:pb-8">
          <h2 className="font-hero font-bold text-[1.35rem] md:text-[1.6rem] tracking-[-0.02em] text-black">
            Gretchen Kerfoot
          </h2>

          <div className="mt-4 md:mt-5 flex flex-col sm:flex-row sm:items-stretch gap-5 sm:gap-7">
            <div className="shrink-0 sm:w-[42%] md:w-[240px]">
              <img
                src="/hero-portrait.png"
                alt="Portrait of Gretchen Kerfoot"
                className="w-full max-w-[240px] h-auto" />
              <img
                src="/hero-signature.png"
                alt=""
                className="mt-5 w-[9.5rem] md:w-[11rem] h-auto" />
            </div>

            <div className="flex-1 flex flex-col font-hero text-black text-[0.98rem] md:text-[1.05rem] leading-snug">
              <div>
                <p className="font-bold">Student at Dartmouth College</p>
                <p>Computer Science and Human-Centered Design</p>
              </div>
              <div className="mt-3.5">
                <p className="font-bold">Incoming Business Analyst</p>
                <p>@ McKinsey Denver</p>
              </div>
              <div className="mt-3.5">
                <p className="font-bold">Interests</p>
                <p>Design Thinking</p>
                <p>Creative Problem-Solving</p>
                <p>Skiing & The Outdoors</p>
              </div>
              <p className="font-bold text-right mt-6 sm:mt-auto sm:pt-6">
                Class of 2027
              </p>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
