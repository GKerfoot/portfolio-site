import React from 'react';

const frameLeft = 76;
const frameTop = 2408;

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

function at(x: number, y: number) {
  return { left: x - frameLeft, top: y - frameTop };
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

export const polaroidCount = carousel.length;

export function PolaroidStack({ index }: { index: number }) {
  const stack = carousel[index];
  return (
    <>
      {stack.cards.map((card) => (
        <Polaroid key={`${index}-${card.src}-${card.z}`} card={card} dx={stack.dx} dy={stack.dy} />
      ))}
    </>
  );
}
