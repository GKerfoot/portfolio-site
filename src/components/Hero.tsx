import React from 'react';
import { motion } from 'framer-motion';

const cardScale = 'min(1, (100vw - 32px) / 520px)';

export function Hero() {
  return (
    <section className="grid h-dvh grid-rows-[minmax(min-content,1fr)_auto_minmax(0,1fr)] bg-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex items-end justify-center pb-8 pt-8">
        <div className="flex w-full max-w-[1072px] flex-col items-center">
          <h1 className="text-center font-heading text-[clamp(36px,min(8vw,10vh),96px)] font-semibold leading-[0.94] text-black">
            Gretchen Kerfoot
          </h1>
          <p className="mt-[13px] max-w-[580px] text-center font-heading text-[15px] font-normal leading-normal text-black">
            I’m a creative designer and a big thinker. Welcome to my portfolio!
          </p>
        </div>
      </motion.div>
      <ProfileCard />
      <div />
    </section>
  );
}

function ProfileCard() {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: `calc(520px * ${cardScale})`,
        height: `calc(288px * ${cardScale})`
      }}>
      <article
        className="absolute left-0 top-0 h-[288px] w-[520px] origin-top-left overflow-hidden rounded-[30px] bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)]"
        style={{ transform: `scale(${cardScale})` }}>
        <img
          src="/hero/card-texture.png"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full rounded-[30px] object-cover opacity-50" />

        <p className="absolute left-[30px] top-[24px] font-heading text-[20px] font-semibold leading-normal text-black">
          Gretchen Kerfoot
        </p>

        <div className="absolute left-[30px] top-[59px] h-[164px] w-[151px] bg-white">
          <img
            src="/hero/portrait.jpg"
            alt="Gretchen Kerfoot"
            width={151}
            height={164}
            className="h-[164px] w-[151px] object-cover opacity-80" />
        </div>

        <p className="absolute left-[199px] top-[59px] w-[314px] font-heading text-[15px] font-semibold leading-normal text-black">
          Student at Dartmouth College
        </p>
        <p className="absolute left-[199px] top-[80px] w-[314px] font-heading text-[12px] font-normal leading-normal text-black">
          Computer Science and Human-Centered Design
        </p>
        <p className="absolute left-[199px] top-[105px] w-[314px] font-heading text-[15px] font-semibold leading-normal text-black">
          Incoming Business Analyst
        </p>
        <p className="absolute left-[199px] top-[126px] w-[314px] font-heading text-[12px] font-normal leading-normal text-black">
          @ McKinsey Denver
        </p>
        <p className="absolute left-[199px] top-[151px] w-[314px] font-heading text-[15px] font-semibold leading-normal text-black">
          Interests
        </p>
        <div className="absolute left-[199px] top-[172px] w-[250px] font-heading text-[12px] font-normal leading-[15px] text-black">
          <p>Design Thinking</p>
          <p>Creative Problem-Solving</p>
          <p>Skiing & The Outdoors</p>
        </div>

        <img
          src="/hero/signature.svg"
          alt="Gretchen Kerfoot signature"
          width={125}
          height={42}
          className="absolute left-[38px] top-[232px] h-[42px] w-[125px] max-w-none" />
        <img
          src="/hero/pine.png"
          alt=""
          width={43}
          height={43}
          className="absolute left-[457px] top-[199px] h-[43px] w-[43px] object-cover" />
        <p className="absolute left-[387px] top-[250px] w-[121px] font-heading text-[16px] font-semibold leading-normal text-black">
          Class of 2027
        </p>
      </article>
    </div>
  );
}
