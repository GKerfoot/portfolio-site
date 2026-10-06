import React, { useState } from 'react';
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
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative mx-auto [perspective:1200px]"
      style={{
        width: `calc(520px * ${cardScale})`,
        height: `calc(288px * ${cardScale})`
      }}>
      <div
        className="absolute left-0 top-0 h-[288px] w-[520px] origin-top-left [transform-style:preserve-3d]"
        style={{ transform: `scale(${cardScale})` }}>
        <div
          className={`relative h-full w-full transition-transform duration-700 ease-in-out motion-reduce:transition-none [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
          <CardFront onFlip={() => setFlipped(true)} active={!flipped} />
          <CardBack onFlip={() => setFlipped(false)} active={flipped} />
        </div>
      </div>
    </div>
  );
}

function CardFront({ onFlip, active }: { onFlip: () => void; active: boolean }) {
  return (
    <button
      type="button"
      onClick={onFlip}
      aria-label="Flip ID card"
      tabIndex={active ? 0 : -1}
      className="absolute inset-0 cursor-pointer overflow-hidden rounded-[30px] border-0 bg-white p-0 text-left shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)]"
      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', pointerEvents: active ? 'auto' : 'none' }}>
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
    </button>
  );
}

const contacts = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gretchen-kerfoot-a52653272/',
    hit: { left: 10, top: 36, width: 122, height: 240 },
    photo: { src: '/hero/card-back-linkedin.png', left: 0, top: 53, width: 122, height: 187 }
  },
  {
    label: 'GitHub',
    href: 'https://github.com/GKerfoot',
    hit: { left: 158, top: 27, width: 188, height: 237 },
    photo: { src: '/hero/card-back-github.png', left: 0, top: 37, width: 188, height: 200 }
  },
  {
    label: 'Email',
    href: 'mailto:gretchen.a.kerfoot.27@dartmouth.edu',
    hit: { left: 372, top: 42, width: 107, height: 216 },
    photo: { src: '/hero/card-back-email.png', left: 37, top: 9, width: 70, height: 207 }
  }
] as const;

function PersonCutout({
  src,
  left,
  top,
  width,
  height
}: {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
}) {
  return (
    <span className="group absolute block" style={{ left, top, width, height }}>
      <img src={src} alt="" className="absolute inset-0 h-full w-full max-w-none object-cover" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-accent opacity-0 group-hover:opacity-100"
        style={{
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskMode: 'alpha'
        }} />
      <img
        src={src}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full max-w-none origin-center object-cover opacity-0 [transform:scale(0.9)] group-hover:opacity-100" />
    </span>
  );
}

function CardBack({ onFlip, active }: { onFlip: () => void; active: boolean }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-[30px] bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)] [transform:rotateY(180deg)]"
      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', pointerEvents: active ? 'auto' : 'none' }}>
      <img
        src="/hero/card-texture.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full rounded-[30px] object-cover opacity-50" />
      <div className="pointer-events-none absolute left-[10px] top-[10px] h-[268px] w-[500px] rounded-[30px] bg-[#fcfbf4]" />

      <p className="pointer-events-none absolute left-[41px] top-[36px] whitespace-nowrap font-heading text-[15px] font-semibold leading-[normal] text-black">
        LinkedIn
      </p>
      <p className="pointer-events-none absolute left-[220px] top-[27px] whitespace-nowrap font-heading text-[15px] font-semibold leading-[normal] text-black">
        GitHub
      </p>
      <p className="pointer-events-none absolute left-[372px] top-[42px] whitespace-nowrap font-heading text-[15px] font-semibold leading-[normal] text-black">
        Email
      </p>

      <Arrow
        src="/hero/card-back-arrow-linkedin.svg"
        left={68.8587646484375}
        top={61.24658203125}
        width={11.97803020477295}
        height={28.917682647705078}
        inset="-3.46% -8.35%"
        svgWidth={13.978}
        svgHeight={30.9178} />
      <Arrow
        src="/hero/card-back-arrow-github.svg"
        left={252.1075439453125}
        top={48.3563232421875}
        width={21.5964412689209}
        height={31.058290481567383}
        inset="-3.22% -4.63%"
        svgWidth={23.5965}
        svgHeight={33.0583} />
      <Arrow
        src="/hero/card-back-arrow-email.svg"
        left={391.447265625}
        top={65.7288818359375}
        width={23.88161277770996}
        height={38.13726043701172}
        inset="-2.62% -4.19%"
        svgWidth={25.8816}
        svgHeight={40.1372} />

      <button
        type="button"
        onClick={onFlip}
        aria-label="Flip ID card to the front"
        tabIndex={active ? 0 : -1}
        className="absolute inset-0 cursor-pointer border-0 bg-transparent p-0" />

      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          aria-label={contact.label}
          target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          onClick={(event) => event.stopPropagation()}
          className="absolute z-10"
          style={contact.hit}>
          <PersonCutout
            src={contact.photo.src}
            left={contact.photo.left}
            top={contact.photo.top}
            width={contact.photo.width}
            height={contact.photo.height} />
        </a>
      ))}
    </div>
  );
}

function Arrow({
  src,
  left,
  top,
  width,
  height,
  inset,
  svgWidth,
  svgHeight
}: {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
  inset: string;
  svgWidth: number;
  svgHeight: number;
}) {
  return (
    <div className="pointer-events-none absolute" style={{ left, top, width, height }}>
      <div className="absolute" style={{ inset }}>
        <img alt="" src={src} width={svgWidth} height={svgHeight} className="block max-w-none" />
      </div>
    </div>
  );
}
