import React, { useState } from 'react';

const frameLeft = 76;
const frameTop = 2408;
const stageWidth = 996;
const stageHeight = 1255;
const stageScale = `min(1, 100cqw / ${stageWidth}px)`;

const stories = [
  { src: '/about/tuckerman.jpg', caption: 'Tuckerman’s Ravine!' },
  { src: '/about/whitney.jpg', caption: 'Mt. Whitney!' },
  { src: '/about/london.jpg', caption: 'My summer in London!' }
];

const holes = [
  { x: 128.59, y: 3104.18 },
  { x: 278.86, y: 3110.33 },
  { x: 383.45, y: 3095.95 },
  { x: 514.39, y: 3091.72 },
  { x: 128.01, y: 3241.27 },
  { x: 291.93, y: 3235.97 },
  { x: 400.1, y: 3239.48 },
  { x: 510.81, y: 3228.9 }
];

const skills = [
  { x: 125.62, y: 3165.63, w: 106.172, h: 41.37, textW: 105, textH: 38, label: 'React & TypeScript' },
  { x: 268.55, y: 3161.34, w: 95.435, h: 18.059, textW: 95, textH: 15, label: 'UI/UX Research' },
  { x: 385.62, y: 3160.78, w: 119.422, h: 18.834, textW: 119, textH: 15, label: 'PostHog' },
  { x: 504.43, y: 3154.94, w: 57.681, h: 23.829, textW: 57, textH: 22, label: 'Java & C++' },
  { x: 129.92, y: 3299.53, w: 75.445, h: 17.413, textW: 75, textH: 15, label: 'Node.js & Python' },
  { x: 265.85, y: 3295.01, w: 79.443, h: 17.543, textW: 79, textH: 15, label: 'Claude Code' },
  { x: 389.78, y: 3290.68, w: 89.438, h: 17.865, textW: 89, textH: 15, label: 'Microsoft Office' },
  { x: 508.72, y: 3285.87, w: 119.422, h: 18.834, textW: 119, textH: 15, label: 'Figma' }
];

function at(x: number, y: number) {
  return { left: x - frameLeft, top: y - frameTop };
}

export function About() {
  const [front, setFront] = useState(0);
  const show = (slot: number) => stories[(front + slot) % stories.length];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-16 [container-type:inline-size] md:px-12 lg:px-24">
      <div className="relative w-full" style={{ height: `calc(${stageHeight}px * ${stageScale})` }}>
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: stageWidth, height: stageHeight, transform: `scale(${stageScale})` }}>
          <div className="absolute flex h-[75px] w-[322px] items-center" style={at(76, 2408)}>
            <h2 className="font-heading text-[48px] font-semibold leading-normal text-black">About Me</h2>
          </div>
          <div className="absolute w-[388px] font-heading text-[15px] font-normal leading-[25px] text-black" style={at(76, 2499)}>
            <p>
              Hello! My name is Gretchen, and I am a current senior at Dartmouth College. I study computer science and human-centered design, focusing on the intersection of design thinking with computer programming and product development.
            </p>
            <p className="mt-[25px]">
              Outside of my studies, I am a member of the Dartmouth Ski Patrol, sister of Sigma Delta sorority, and the vice president of the Casual Thursday Improv Troupe. I love skiing, hiking, SCUBA diving, geocaching, and pretty much everything else outdoors.
            </p>
          </div>

          <div className="absolute flex h-[50px] w-[231px] items-center justify-center" style={at(561, 2429)}>
            <h3 className="font-heading text-[24px] font-semibold leading-normal text-black">Ask me about...</h3>
          </div>

          <Polaroid
            story={show(2)}
            layer={1}
            frame={{ x: 610, y: 2544, w: 393.235, h: 321.366 }}
            card={{ w: 380.237, h: 305 }}
            photo={{ x: 629.23, y: 2562.08, w: 357.021, h: 246.465, innerW: 347.195, innerH: 231.5 }}
            caption={{ x: 800.93, y: 2827.83, w: 253.182, h: 35.918, size: 14 }}
            rotate={2.51}
          />
          <Polaroid
            story={show(1)}
            layer={2}
            frame={{ x: 585, y: 2502, w: 298.057, h: 403.381 }}
            card={{ w: 263.82, h: 380.499, shadow: true }}
            photo={{ x: 603.04, y: 2518.99, w: 258.195, h: 327.614, innerW: 230.601, innerH: 307.504 }}
            caption={{ x: 748.63, y: 2863.1, w: 251.813, h: 47.91, size: 20 }}
            rotate={-5.34}
          />
          <Polaroid
            story={show(0)}
            layer={3}
            frame={{ x: 660, y: 2502, w: 263.82, h: 380.499 }}
            card={{ w: 263.82, h: 380.499 }}
            photo={{ x: 676.67, y: 2517.52, w: 230.627, h: 307.503, innerW: 230.627, innerH: 307.503 }}
            caption={{ x: 791.62, y: 2852.32, w: 250.6, h: 24.715, size: 14 }}
            rotate={0}
            front
          />

          <button
            type="button"
            aria-label="Show the previous photo"
            onClick={() => setFront((index) => (index + 1) % stories.length)}
            className="absolute z-20 cursor-pointer"
            style={{ ...at(538.66, 2665.34), width: 40, height: 46 }}>
            <img alt="" src="/about/arrow-left.svg" width={13.6248} height={28.0044} className="absolute left-[14px] top-[10px] max-w-none" />
          </button>
          <button
            type="button"
            aria-label="Show the next photo"
            onClick={() => setFront((index) => (index + stories.length - 1) % stories.length)}
            className="absolute z-20 cursor-pointer"
            style={{ ...at(1017.29, 2648.06), width: 40, height: 48 }}>
            <img alt="" src="/about/arrow-right.svg" width={11.5028} height={30.0109} className="absolute left-[15px] top-[10px] max-w-none" />
          </button>

          <div className="absolute flex h-[45px] w-[271px] items-center" style={at(77, 2970)}>
            <h3 className="font-heading text-[32px] font-semibold leading-[25px] text-black">Skills & Tools</h3>
          </div>

          <img
            alt=""
            src="/cards/punch-paper.png"
            width={582}
            height={383}
            className="pointer-events-none absolute max-w-none"
            style={{ ...at(60, 3032.162), width: 581.469, height: 382.227 }}
          />
          <img
            alt=""
            src="/cards/punch-border.png"
            width={519}
            height={318}
            className="pointer-events-none absolute max-w-none"
            style={{ ...at(91.573, 3058.637), width: 518.452, height: 317.277 }}
          />
          {holes.map((hole) => (
            <Rotated key={`${hole.x}-${hole.y}`} x={hole.x} y={hole.y} w={54.651} h={53.684} rotate={-1.85}>
              <img alt="" src="/about/punch-hole.svg" width={53} height={52} className="block max-w-none" />
            </Rotated>
          ))}
          {skills.map((skill) => (
            <Rotated key={skill.label} x={skill.x} y={skill.y} w={skill.w} h={skill.h} rotate={-1.85}>
              <p
                className="font-['Special_Elite'] text-[16px] leading-normal text-[#142794]"
                style={{ width: skill.textW, height: skill.textH }}>
                {skill.label}
              </p>
            </Rotated>
          ))}

          <PhotoLink
            href="/resume.pdf"
            label="Resume"
            image="/about/resume.png"
            x={728}
            y={3032}
            w={92}
            h={150}
            labelX={732}
            labelY={3196}
          />
          <PhotoLink
            href="mailto:gretchen.a.kerfoot.27@dartmouth.edu"
            label="Email"
            image="/about/email.png"
            x={714}
            y={3252}
            w={95}
            h={94}
            labelX={732}
            labelY={3358}
          />
          <PhotoLink
            href="https://www.linkedin.com/in/gretchen-kerfoot-a52653272/"
            label="LinkedIn"
            image="/about/linkedin.png"
            x={875}
            y={3025}
            w={129}
            h={121}
            labelX={907}
            labelY={3163}
          />
          <PhotoLink
            href="https://github.com/GKerfoot"
            label="GitHub"
            image="/about/github.png"
            x={866}
            y={3215}
            w={116}
            h={114}
            labelX={876}
            labelY={3346}
          />

          <p className="absolute left-1/2 top-[1193px] -translate-x-1/2 whitespace-nowrap text-center font-heading text-[12px] font-normal leading-normal text-black">
            © 2026 Gretchen Kerfoot. All rights reserved. No AI was used in the design of this portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}

function Rotated({
  x,
  y,
  w,
  h,
  rotate,
  children
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  children: React.ReactNode;
}) {
  return (
    <div className="absolute flex items-center justify-center" style={{ ...at(x, y), width: w, height: h }}>
      <div className="flex-none" style={{ transform: `rotate(${rotate}deg)` }}>
        {children}
      </div>
    </div>
  );
}

function Polaroid({
  story,
  layer,
  frame,
  card,
  photo,
  caption,
  rotate,
  front = false
}: {
  story: { src: string; caption: string };
  layer: number;
  frame: { x: number; y: number; w: number; h: number };
  card: { w: number; h: number; shadow?: boolean };
  photo: { x: number; y: number; w: number; h: number; innerW: number; innerH: number };
  caption: { x: number; y: number; w: number; h: number; size: number };
  rotate: number;
  front?: boolean;
}) {
  const cardFace = (
    <div
      className={`bg-[#eee] ${card.shadow ? 'shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)]' : ''}`}
      style={{ width: card.w, height: card.h }}
    />
  );
  return (
    <div className="pointer-events-none absolute inset-0" style={{ zIndex: layer }}>
      {front ? (
        <div className="absolute" style={{ ...at(frame.x, frame.y), width: frame.w, height: frame.h }}>
          {cardFace}
        </div>
      ) : (
        <div className="absolute flex items-center justify-center" style={{ ...at(frame.x, frame.y), width: frame.w, height: frame.h }}>
          <div className="flex-none" style={{ transform: `rotate(${rotate}deg)` }}>
            {cardFace}
          </div>
        </div>
      )}
      <Rotated x={photo.x} y={photo.y} w={photo.w} h={photo.h} rotate={front ? 0 : rotate}>
        <div className="relative overflow-hidden" style={{ width: photo.innerW, height: photo.innerH }}>
          <img alt="" src={story.src} className="absolute inset-0 size-full max-w-none object-cover" />
        </div>
      </Rotated>
      <div
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        style={{ ...at(caption.x, caption.y), width: caption.w, height: caption.h }}>
        <p
          className="text-center font-heading font-normal leading-normal text-black"
          style={{ transform: front ? undefined : `rotate(${rotate}deg)`, fontSize: caption.size, width: caption.w }}>
          {story.caption}
        </p>
      </div>
    </div>
  );
}

function PhotoLink({
  href,
  label,
  image,
  x,
  y,
  w,
  h,
  labelX,
  labelY
}: {
  href: string;
  label: string;
  image: string;
  x: number;
  y: number;
  w: number;
  h: number;
  labelX: number;
  labelY: number;
}) {
  const left = Math.min(x, labelX);
  const top = Math.min(y, labelY);
  const right = Math.max(x + w, labelX + 106);
  const bottom = Math.max(y + h, labelY + 24);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group absolute z-10 block"
      style={{ ...at(left, top), width: right - left, height: bottom - top }}>
      <span className="absolute block" style={{ left: x - left, top: y - top, width: w, height: h }}>
        <img alt="" src={image} className="absolute inset-0 size-full max-w-none object-cover" />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-accent opacity-0 group-hover:opacity-100"
          style={{
            maskImage: `url(${image})`,
            WebkitMaskImage: `url(${image})`,
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            maskMode: 'alpha'
          }}
        />
        <img
          alt=""
          aria-hidden
          src={image}
          className="pointer-events-none absolute inset-0 size-full max-w-none origin-center object-cover opacity-0 [transform:scale(0.9)] group-hover:opacity-100"
        />
      </span>
      <span className="absolute font-heading text-[20px] font-semibold leading-[25px] text-black" style={{ left: labelX - left, top: labelY - top, width: 106 }}>
        {label}
      </span>
    </a>
  );
}
