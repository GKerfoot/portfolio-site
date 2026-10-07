import React, { useState } from 'react';

const frameLeft = 76;
const frameTop = 2408;
const stageWidth = 996;
const stageHeight = 1255;
const stageScale = `min(1, 100cqw / ${stageWidth}px)`;

type PolaroidCard = {
  src: string;
  caption: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  shadow?: boolean;
  z: number;
  photo: { x: number; y: number; w: number; h: number };
  label: { x: number; y: number; w: number; h: number; size: number };
};

const carousel: { dx: number; dy: number; cards: PolaroidCard[] }[] = [
  {
    dx: 0,
    dy: 0,
    cards: [
      { src: '/about/london.jpg', caption: 'My summer in London!', x: 623.36, y: 2544, w: 380.24, h: 305, rotate: 2.51, z: 1, photo: { x: 639.39, y: 2562.08, w: 347.2, h: 231.5 }, label: { x: 675.43, y: 2809.87, w: 252.33, h: 24.89, size: 14 } },
      { src: '/about/whitney.jpg', caption: 'Mt. Whitney!', x: 585, y: 2526.53, w: 263.82, h: 380.5, rotate: -5.34, shadow: true, z: 2, photo: { x: 603.04, y: 2540.43, w: 230.6, h: 307.5 }, label: { x: 622.72, y: 2862.45, w: 250.6, h: 24.72, size: 20 } },
      { src: '/about/tuckerman.jpg', caption: 'Tuckerman’s Ravine!', x: 660, y: 2502, w: 263.82, h: 380.5, rotate: 0, z: 3, photo: { x: 676.67, y: 2517.52, w: 230.63, h: 307.5 }, label: { x: 666.32, y: 2839.97, w: 250.6, h: 24.72, size: 14 } }
    ]
  },
  {
    dx: -609,
    dy: 16,
    cards: [
      { src: '/about/tuckerman.jpg', caption: 'Tuckerman’s Ravine!', x: 1358.66, y: 2486, w: 263.82, h: 380.5, rotate: 2.51, shadow: true, z: 1, photo: { x: 1374.64, y: 2502.23, w: 230.63, h: 307.5 }, label: { x: 1350.18, y: 2823.92, w: 250.6, h: 24.72, size: 14 } },
      { src: '/about/sudoku.jpg', caption: 'My strange addiction to sudoku!', x: 1194, y: 2561.39, w: 380.24, h: 305, rotate: -5.34, shadow: true, z: 2, photo: { x: 1212.33, y: 2577.11, w: 346.67, h: 231.5 }, label: { x: 1281.89, y: 2817.65, w: 252.34, h: 24.89, size: 14 } },
      { src: '/about/whitney.jpg', caption: 'Mt. Whitney!', x: 1282, y: 2498, w: 263.82, h: 380.5, rotate: 0, shadow: true, z: 3, photo: { x: 1298.67, y: 2513.52, w: 230.6, h: 307.5 }, label: { x: 1288.32, y: 2835.96, w: 250.6, h: 24.72, size: 20 } }
    ]
  },
  {
    dx: -1417,
    dy: 37,
    cards: [
      { src: '/about/whitney.jpg', caption: 'Mt. Whitney!', x: 2197.66, y: 2465, w: 263.82, h: 380.5, rotate: 2.51, shadow: true, z: 1, photo: { x: 2213.64, y: 2481.23, w: 230.6, h: 307.5 }, label: { x: 2189.18, y: 2802.92, w: 250.6, h: 24.72, size: 20 } },
      { src: '/about/camino.jpg', caption: 'Completing the Camino de Santiago!', x: 2002, y: 2478.55, w: 263.82, h: 380.5, rotate: -5.34, shadow: true, z: 2, photo: { x: 2020.04, y: 2492.45, w: 230.48, h: 307.5 }, label: { x: 2039.75, y: 2814.46, w: 250.6, h: 24.72, size: 14 } },
      { src: '/about/sudoku.jpg', caption: 'My strange addiction to sudoku!', x: 2020, y: 2528, w: 380.24, h: 305, rotate: 0, shadow: true, z: 3, photo: { x: 2036.78, y: 2545.36, w: 346.67, h: 231.5 }, label: { x: 2083.66, y: 2791.33, w: 252.34, h: 24.89, size: 14 } }
    ]
  },
  {
    dx: -2146,
    dy: 21,
    cards: [
      { src: '/about/sudoku.jpg', caption: 'My strange addiction to sudoku!', x: 2762.36, y: 2526, w: 380.24, h: 305, rotate: 2.51, shadow: true, z: 1, photo: { x: 2778.36, y: 2544.08, w: 346.67, h: 231.5 }, label: { x: 2814.43, y: 2791.87, w: 252.34, h: 24.89, size: 14 } },
      { src: '/about/hiking.jpg', caption: 'Hiking for 55 miles straight!', x: 2731, y: 2494.55, w: 263.82, h: 380.5, rotate: -5.34, shadow: true, z: 2, photo: { x: 2749.04, y: 2508.45, w: 230.56, h: 307.41 }, label: { x: 2768.75, y: 2830.46, w: 250.6, h: 24.72, size: 14 } },
      { src: '/about/camino.jpg', caption: 'Completing the Camino de Santiago!', x: 2795, y: 2481, w: 263.82, h: 380.5, rotate: 0, shadow: true, z: 3, photo: { x: 2811.67, y: 2496.52, w: 230.48, h: 307.5 }, label: { x: 2801.32, y: 2818.96, w: 250.6, h: 24.72, size: 14 } }
    ]
  },
  {
    dx: -2813.13,
    dy: 22,
    cards: [
      { src: '/about/camino.jpg', caption: 'Completing the Camino de Santiago!', x: 3520.66, y: 2484, w: 263.82, h: 380.5, rotate: 2.51, shadow: true, z: 1, photo: { x: 3536.64, y: 2500.23, w: 230.48, h: 307.5 }, label: { x: 3512.18, y: 2821.92, w: 250.6, h: 24.72, size: 14 } },
      { src: '/about/london.jpg', caption: 'My summer in London!', x: 3398.13, y: 2566.54, w: 380.24, h: 305, rotate: -5.34, z: 2, photo: { x: 3416.47, y: 2582.26, w: 347.2, h: 231.5 }, label: { x: 3486.02, y: 2822.8, w: 252.33, h: 24.89, size: 14 } },
      { src: '/about/hiking.jpg', caption: 'Hiking for 55 miles straight!', x: 3479, y: 2480, w: 263.82, h: 380.5, rotate: 0, shadow: true, z: 3, photo: { x: 3495.67, y: 2495.52, w: 230.56, h: 307.41 }, label: { x: 3485.32, y: 2817.96, w: 250.6, h: 24.72, size: 14 } }
    ]
  },
  {
    dx: -3603,
    dy: 10,
    cards: [
      { src: '/about/tuckerman.jpg', caption: 'Tuckerman’s Ravine!', x: 4188, y: 2511.55, w: 263.82, h: 380.5, rotate: -5.34, z: 1, photo: { x: 4206.04, y: 2525.45, w: 230.63, h: 307.5 }, label: { x: 4225.75, y: 2847.46, w: 250.6, h: 24.72, size: 14 } },
      { src: '/about/hiking.jpg', caption: 'Hiking for 55 miles straight!', x: 4375.66, y: 2492, w: 263.82, h: 380.5, rotate: 2.51, shadow: true, z: 2, photo: { x: 4391.64, y: 2508.23, w: 230.56, h: 307.41 }, label: { x: 4367.18, y: 2829.92, w: 250.6, h: 24.72, size: 14 } },
      { src: '/about/london.jpg', caption: 'My summer in London!', x: 4212.5, y: 2555.18, w: 380.24, h: 305, rotate: 0, z: 3, photo: { x: 4229.3, y: 2572.54, w: 347.2, h: 231.5 }, label: { x: 4276.16, y: 2818.51, w: 252.33, h: 24.89, size: 14 } }
    ]
  }
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
  const [frameIndex, setFrameIndex] = useState(0);
  const stack = carousel[frameIndex];

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

          {stack.cards.map((card) => (
            <Polaroid key={`${frameIndex}-${card.caption}-${card.z}`} card={card} dx={stack.dx} dy={stack.dy} />
          ))}

          <button
            type="button"
            aria-label="Show the previous photo"
            onClick={() => setFrameIndex((index) => (index - 1 + carousel.length) % carousel.length)}
            className="absolute z-20 cursor-pointer"
            style={{ ...at(498, 2665.34), width: 40, height: 46 }}>
            <img alt="" src="/about/arrow-left.svg" width={13.6248} height={28.0044} className="absolute left-[14px] top-[10px] max-w-none" />
          </button>
          <button
            type="button"
            aria-label="Show the next photo"
            onClick={() => setFrameIndex((index) => (index + 1) % carousel.length)}
            className="absolute z-20 cursor-pointer"
            style={{ ...at(1064, 2648.06), width: 40, height: 48 }}>
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

function Polaroid({ card, dx, dy }: { card: PolaroidCard; dx: number; dy: number }) {
  const front = card.z === 3;
  return (
    <div className="pointer-events-none absolute inset-0" style={{ zIndex: card.z }}>
      <Rotated x={card.x + dx} y={card.y + dy} w={card.w} h={card.h} rotate={card.rotate}>
        <div className="shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)]" style={{ width: card.w, height: card.h }}>
          <div className="relative overflow-hidden bg-[#eee]" style={{ width: card.w, height: card.h }}>
            <img
              alt=""
              src={card.src}
              className="absolute max-w-none object-cover"
              style={{
                left: card.photo.x - card.x,
                top: card.photo.y - card.y,
                width: card.photo.w,
                height: card.photo.h
              }}
            />
            {front ? (
              card.src.endsWith('camino.jpg') ? (
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: card.label.x - card.x,
                    top: card.photo.y + card.photo.h - card.y,
                    width: card.label.w,
                    height: card.h - (card.photo.y + card.photo.h - card.y)
                  }}>
                  <p className="w-full text-center font-heading text-[14px] font-normal leading-[18px] text-black">
                    {card.caption}
                  </p>
                </div>
              ) : (
                <p
                  className="absolute text-center font-heading text-[14px] font-normal leading-[18px] text-black"
                  style={{
                    left: card.label.x - card.x,
                    top: card.label.y - card.y,
                    width: card.label.w
                  }}>
                  {card.caption}
                </p>
              )
            ) : null}
          </div>
        </div>
      </Rotated>
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
