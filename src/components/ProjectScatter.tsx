import React from 'react';
import { Link } from 'react-router-dom';

const stageWidth = 961;
const stageHeight = 1244;
const stageScale = `min(1, 100cqw / ${stageWidth}px)`;

export function ProjectScatter() {
  return (
    <div
      className="relative w-full [container-type:inline-size]"
      style={{ height: `calc(${stageHeight}px * ${stageScale})` }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: stageWidth,
          height: stageHeight,
          transform: `scale(${stageScale})`
        }}>
        <div className="absolute left-[-50px] top-[-911px]">
          <HousingCard />
          <LitboxdCard />
          <AdaptCard />
          <NedCard />
          <SentryCard />
        </div>
      </div>
    </div>
  );
}

function CardFrame({
  left,
  top,
  width,
  height,
  href,
  label,
  tilt,
  children
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  href?: string;
  label?: string;
  tilt: number;
  children: React.ReactNode;
}) {
  const className = `group absolute block ${href ? 'cursor-pointer' : ''}`;
  const style = { left, top, width, height };
  const inner = (
    <div className={`pointer-events-none absolute inset-0 origin-center transition-transform duration-300 ease-out ${tilt < 0 ? 'group-hover:[transform:rotate(-3deg)]' : 'group-hover:[transform:rotate(3deg)]'}`}>
      <div className="absolute" style={{ left: -left, top: -top }}>
        {children}
      </div>
    </div>
  );
  if (href) {
    return (
      <Link to={href} aria-label={label} className={className} style={style}>
        {inner}
      </Link>
    );
  }
  return (
    <div className={className} style={style}>
      {inner}
    </div>
  );
}

function LitboxdCard() {
  return (
    <CardFrame left={50} top={911} width={535.259} height={316.564} href="/project/litboxd" label="Litboxd" tilt={-3}>
    <div className="absolute contents h-[316.564px] left-[50px] top-[911px] w-[535.259px]">
      <div className="absolute contents h-[316.564px] left-[50px] top-[911px] w-[535.259px]">
        <div className="absolute flex h-[316.564px] items-center justify-center left-[50px] top-[911px] w-[535.259px]">
          <div className="flex-none rotate-[-3.2deg]">
            <div className="bg-[#0f151b] h-[288px] relative rounded-[30px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)] w-[520px]" />
          </div>
        </div>
        <div className="absolute flex h-[200.745px] items-center justify-center left-[56.47px] top-[1026.82px] w-[528.787px]">
          <div className="flex-none rotate-[-3.2deg]">
            <div className="h-[172px] relative rounded-[30px] w-[520px]">
              <img alt="" src="/cards/litboxd-books.png" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[57.651px] items-center justify-center left-[314.25px] top-[1008.88px] w-[230.156px]">
        <div className="flex-none rotate-[-3.2deg]">
          <div className="flex flex-col font-['Playfair_Display'] font-semibold h-[45px] justify-center leading-[0] relative text-[#d7c1a0] text-[40px] text-center tracking-[2px] w-[228px]">
            <p className="leading-[normal]">Litboxd</p>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[37.042px] items-center justify-center left-[76.02px] top-[959.04px] w-[306.639px]">
        <div className="flex-none rotate-[-3.2deg]">
          <div className="flex flex-col font-['Source_Serif_4'] font-normal h-[20px] justify-center leading-[0] not-italic relative text-[#d7c1a0] text-[14px] w-[306px]">
            <p className="leading-[normal]">Full Stack Web Development</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-full -translate-y-1/2 absolute flex h-[37.042px] items-center justify-center left-[548.4px] top-[949.77px] w-[306.639px]">
        <div className="flex-none rotate-[-3.2deg]">
          <div className="flex flex-col font-['Source_Serif_4'] font-normal h-[20px] justify-center leading-[0] not-italic relative text-[14px] text-right text-white w-[306px]">
            <p className="leading-[normal]">Winter 2026</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[52.018px] items-center justify-center left-[316.65px] top-[1051.81px] w-[307.476px]">
        <div className="flex-none rotate-[-3.2deg]">
          <div className="flex flex-col font-['Source_Serif_4'] font-normal h-[35px] justify-center leading-[0] not-italic relative text-[12px] text-center text-white w-[306px]">
            <p className="leading-[normal]">A better social media platform for readers. Think Goodreads meets Letterboxd.</p>
          </div>
        </div>
      </div>
    </div>
    </CardFrame>
  );
}

function FilmGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-80"
      style={{ backgroundImage: 'url(/cards/film-grain.png)', backgroundSize: '160px 160px' }}
    />
  );
}

function HousingCard() {
  return (
    <CardFrame left={88} top={1270} width={525.717} height={298.455} href="/project/dartmouth-housing" label="Dartmouth Housing Project" tilt={3}>
    <div className="absolute contents h-[298.455px] left-[88px] top-[1270px] w-[525.717px]">
      <div className="absolute flex h-[298.455px] items-center justify-center left-[88px] top-[1270px] w-[525.717px]">
        <div className="flex-none rotate-[1.16deg]">
          <div className="relative h-[288px] w-[520px] rounded-[30px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)]">
            <div className="absolute inset-0 overflow-hidden rounded-[30px]" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(102, 102, 102, 0.2) 100%), linear-gradient(90deg, rgb(1, 50, 35) 0%, rgb(1, 50, 35) 100%)' }}>
              <FilmGrain />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[33.716px] items-center justify-center left-[122.75px] top-[1295.6px] w-[283.508px]">
        <div className="flex-none rotate-[1.16deg]">
          <p className="font-heading font-semibold h-[28px] leading-[normal] relative text-[20px] text-white w-[283px]">Dartmouth Housing Project</p>
        </div>
      </div>
      <div className="absolute flex h-[22.566px] items-center justify-center left-[119.23px] top-[1479.56px] w-[226.318px]">
        <div className="flex-none rotate-[1.16deg]">
          <p className="font-heading font-semibold h-[18px] leading-[normal] relative text-[15px] text-white w-[226px]">Design Research</p>
        </div>
      </div>
      <div className="absolute flex h-[27.439px] items-center justify-center left-[118.72px] top-[1504.56px] w-[467.268px]">
        <div className="flex-none rotate-[1.16deg]">
          <p className="font-heading font-normal h-[18px] leading-[normal] relative text-[12px] text-white w-[467px]">How might we make Dartmouth students identify further with their residential house?</p>
        </div>
      </div>
      <div className="-translate-x-full absolute flex h-[30.663px] items-center justify-center left-[581.22px] top-[1302.19px] w-[132.539px]">
        <div className="flex-none rotate-[1.16deg]">
          <p className="font-heading font-semibold h-[28px] leading-[normal] relative text-[16px] text-right text-white w-[132px]">Winter 2026</p>
        </div>
      </div>
      <div className="absolute flex h-[25.72px] items-center justify-center left-[120.08px] top-[1437.57px] w-[382.286px]">
        <div className="flex-none rotate-[1.16deg]">
          <p className="font-heading font-normal h-[18px] leading-[normal] relative text-[24px] text-white tracking-[2.4px] w-[382px] whitespace-pre-wrap">{`7744  3321  4423  1284`}</p>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[120.72px] size-[77.521px] top-[1347.59px]">
        <div className="flex-none rotate-[1.16deg]">
          <div className="relative size-[76px]">
            <img alt="" src="/cards/housing-chip.png" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" />
          </div>
        </div>
      </div>
    </div>
    </CardFrame>
  );
}

function AdaptCard() {
  return (
    <CardFrame left={663} top={957} width={307.994} height={530.801} href="/project/adapt-a-mask" label="Adapt-a-Mask" tilt={3}>
    <div className="absolute contents h-[530.801px] left-[663px] top-[957px] w-[307.994px]">
      <div className="absolute flex h-[530.801px] items-center justify-center left-[663px] top-[957px] w-[307.994px]">
        <div className="flex-none rotate-[2.23deg]">
          <div className="h-[520px] relative rounded-[30px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)] w-[288px]" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(102, 102, 102, 0.2) 100%), linear-gradient(90deg, rgb(134, 194, 255) 0%, rgb(134, 194, 255) 100%)' }} />
        </div>
      </div>
      <div className="absolute flex h-[87.137px] items-center justify-center left-[680.26px] top-[957px] w-[290.736px]">
        <div className="flex-none rotate-[2.23deg]">
          <div className="bg-[#142794] h-[76px] relative rounded-tl-[30px] rounded-tr-[30px] w-[288px]" />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[52.884px] items-center justify-center left-[696.95px] top-[996.05px] w-[179.653px]">
        <div className="flex-none rotate-[2.23deg]">
          <div className="flex flex-col font-['Montserrat'] font-semibold h-[46px] justify-center leading-[0] relative text-[24px] text-white w-[178px]">
            <p className="leading-[normal]">Adapt-a-Mask</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[35.764px] items-center justify-center left-[813.21px] top-[1301.94px] w-[226.879px]">
        <div className="flex-none rotate-[2.23deg]">
          <p className="font-['Montserrat'] font-semibold h-[27px] leading-[normal] relative text-[16px] text-black text-center w-[226px]">Engineering Design</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[59.069px] items-center justify-center left-[811.73px] top-[1328.26px] w-[261.708px]">
        <div className="flex-none rotate-[2.23deg]">
          <p className="h-[49px] leading-[0] relative text-[12px] text-black text-center w-[260px]">
            <span className="font-['Montserrat'] font-normal leading-[normal]">How might we </span>
            <span className="font-['Montserrat'] font-semibold leading-[normal]">improve airway seal consistency</span>
            <span className="font-['Montserrat'] font-normal leading-[normal]"> for </span>
            <span className="font-['Montserrat'] font-semibold leading-[normal]">novice</span>
            <span className="font-['Montserrat'] font-normal leading-[normal]"> </span>
            <span className="font-['Montserrat'] font-semibold leading-[normal]">emergency medical responders</span>
            <span className="font-['Montserrat'] font-normal leading-[normal]"> operating in </span>
            <span className="font-['Montserrat'] font-semibold leading-[normal]">cold, prehospital environments?</span>
          </p>
        </div>
      </div>
      <div className="absolute flex h-[248.475px] items-center justify-center left-[716.31px] top-[1048.72px] w-[206.219px]">
        <div className="flex-none rotate-[2.23deg]">
          <div className="border border-black border-solid h-[241px] relative w-[197px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" src="/cards/adapt-mask.png" className="absolute h-full left-[-82.55%] max-w-none top-0 w-[182.96%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents h-[64.259px] left-[675.69px] top-[1405.13px] w-[266.899px]">
        <div className="absolute flex h-[64.259px] items-center justify-center left-[675.69px] top-[1405.13px] w-[266.899px]">
          <div className="flex-none rotate-[2.23deg]">
            <div className="bg-white h-[54px] relative w-[265px]" />
          </div>
        </div>
        <div className="absolute flex h-[53.878px] items-center justify-center left-[680.88px] top-[1410.32px] w-[256.518px]">
          <div className="flex-none rotate-[2.23deg]">
            <div className="bg-black h-[44px] relative w-[255px]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[57.109px] items-center justify-center left-[682.84px] top-[1408.4px] w-[262.63px]">
        <div className="flex-none rotate-[2.23deg]">
          <p className="font-['Libre_Barcode_128'] h-[47px] leading-[normal] not-italic relative text-[78px] text-white w-[261px]">testhelfea</p>
        </div>
      </div>
      <div className="absolute flex h-[44.25px] items-center justify-center left-[916.58px] top-[986.16px] w-[34.646px]">
        <div className="flex-none rotate-[2.23deg]">
          <div className="h-[43px] relative w-[33px]">
            <img alt="" src="/cards/adapt-shield.png" width={434} height={564} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[23.478px] items-center justify-center left-[696.63px] top-[1018.32px] w-[167.535px]">
        <div className="flex-none rotate-[2.23deg]">
          <div className="flex flex-col font-['Montserrat'] font-semibold h-[17px] justify-center leading-[0] relative text-[12px] text-white w-[167px]">
            <p className="leading-[normal]">Winter 2025 - Present</p>
          </div>
        </div>
      </div>
    </div>
    </CardFrame>
  );
}

function NedCard() {
  return (
    <CardFrame left={470} top={1580} width={541.276} height={328.481} tilt={-3}>
    <div className="absolute contents h-[328.481px] left-[470px] top-[1580px] w-[541.276px]">
      <div className="absolute flex h-[328.481px] items-center justify-center left-[470px] top-[1580px] w-[541.276px]">
        <div className="flex-none rotate-[-4.57deg]">
          <div className="h-[288px] relative rounded-[30px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)] w-[520px]" style={{ backgroundImage: 'linear-gradient(157.91877900454205deg, rgba(164, 183, 245, 0.6) 4.3984%, rgba(239, 157, 210, 0.48) 42.355%, rgba(244, 231, 174, 0.6) 74.303%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)' }} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[63.007px] items-center justify-center left-[499.82px] top-[1656.44px] w-[230.859px]">
        <div className="flex-none rotate-[-4.57deg]">
          <div className="flex flex-col font-['Faculty_Glyphic'] h-[45px] justify-center leading-[0] not-italic relative text-[40px] text-black tracking-[2px] w-[228px]">
            <p className="leading-[normal]">Ned.ai</p>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[27.818px] items-center justify-center left-[503.64px] top-[1696.97px] w-[100.278px]">
        <div className="flex-none rotate-[-4.57deg]">
          <div className="flex flex-col font-['Faculty_Glyphic'] h-[20px] justify-center leading-[0] not-italic relative text-[14px] text-black w-[99px]">
            <p className="leading-[normal]">Summer 2026</p>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[328.481px] items-center justify-center left-[470px] top-[1580px] w-[541.276px]">
        <div className="flex-none rotate-[-4.57deg]">
          <div className="h-[288px] relative rounded-bl-[30px] rounded-br-[30px] w-[520px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[30px] rounded-br-[30px]">
              <img alt="" src="/cards/ned-map.png" className="absolute h-[113.19%] left-[-0.02%] max-w-none top-0 w-[100.04%]" />
            </div>
          </div>
        </div>
      </div>
      <NedMark src="/cards/ned-mark-1.svg" svgWidth={2.48907} svgHeight={10.0289} className="absolute flex h-[8.042px] items-center justify-center left-[887.04px] top-[1637.51px] w-[1.127px]" innerClassName="h-[8.029px] relative w-[0.489px]" inset="-12.46% -204.5% -12.46% -204.51%" />
      <NedMark src="/cards/ned-mark-2.svg" svgWidth={5.35177} svgHeight={8.77373} className="absolute flex h-[7.019px] items-center justify-center left-[884.34px] top-[1645.53px] w-[3.88px]" innerClassName="h-[6.774px] relative w-[3.352px]" inset="-14.76% -29.84%" />
      <NedMark src="/cards/ned-mark-3.svg" svgWidth={5.8804} svgHeight={6.17354} className="absolute flex h-[4.469px] items-center justify-center left-[887.74px] top-[1645.87px] w-[4.2px]" innerClassName="h-[4.173px] relative w-[3.88px]" inset="-23.96% -25.77%" />
      <NedMark src="/cards/ned-mark-4.svg" svgWidth={6.96473} svgHeight={9.33222} className="absolute flex h-[7.704px] items-center justify-center left-[883.59px] top-[1629.64px] w-[5.533px]" innerClassName="h-[7.332px] relative w-[4.965px]" inset="-13.64% -20.14%" />
      <NedMark src="/cards/ned-mark-5.svg" svgWidth={8.41603} svgHeight={9.46045} className="absolute flex h-[7.947px] items-center justify-center left-[883.58px] top-[1629.51px] w-[6.99px]" innerClassName="h-[7.46px] relative w-[6.416px]" inset="-13.41% -15.59% -13.4% -15.59%" />
      <NedMark src="/cards/ned-mark-6.svg" svgWidth={7.65384} svgHeight={3.00115} className="absolute flex h-[1.448px] items-center justify-center left-[888.32px] top-[1638.86px] w-[5.715px]" innerClassName="h-[1.001px] relative w-[5.654px]" inset="-99.94% -17.69% -99.91% -17.69%" />
      <NedMark src="/cards/ned-mark-7.svg" svgWidth={7.29742} svgHeight={3.22844} className="absolute flex h-[1.646px] items-center justify-center left-[882.38px] top-[1638.76px] w-[5.378px]" innerClassName="h-[1.228px] relative w-[5.297px]" inset="-81.41% -18.88%" />
      <NedMark src="/cards/ned-mark-8.svg" svgWidth={26.6878} svgHeight={10.6193} className="absolute flex h-[10.557px] items-center justify-center left-[847.91px] top-[1628.37px] w-[25.296px]" innerClassName="h-[8.619px] relative w-[24.688px]" inset="-11.6% -4.05%" />
      <div className="-translate-y-1/2 absolute flex h-[45.958px] items-center justify-center left-[749.79px] top-[1634.02px] w-[116.584px]">
        <div className="flex-none rotate-[-4.57deg]">
          <div className="flex flex-col font-['Faculty_Glyphic'] h-[37px] justify-center leading-[0] not-italic relative text-[14px] text-black w-[114px]">
            <p className="leading-[normal]">Product-Led Growth Intern</p>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[86.367px] items-center justify-center left-[506.19px] top-[1744.45px] w-[275.314px]">
        <div className="flex-none rotate-[-4.57deg]">
          <div className="flex flex-col font-['Faculty_Glyphic'] h-[65px] justify-center leading-[0] not-italic relative text-[14px] text-black w-[271px]">
            <p className="leading-[normal]">How might we design the narrative and product for an AI meeting tool to showcase diverse thinking and celebrate cognitive differences?</p>
          </div>
        </div>
      </div>
    </div>
    </CardFrame>
  );
}

function NedMark({
  src,
  svgWidth,
  svgHeight,
  className,
  innerClassName,
  inset
}: {
  src: string;
  svgWidth: number;
  svgHeight: number;
  className: string;
  innerClassName: string;
  inset: string;
}) {
  return (
    <div className={className}>
      <div className="flex-none rotate-[-4.57deg]">
        <div className={innerClassName}>
          <div className="absolute" style={{ inset }}>
            <img alt="" src={src} width={svgWidth} height={svgHeight} className="block max-w-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SentryCard() {
  return (
    <CardFrame left={93} top={1599} width={359.82} height={556.026} href="/project/sentry" label="Sentry" tilt={-3}>
    <div className="absolute contents h-[556.026px] left-[93px] top-[1599px] w-[359.82px]">
      <div className="absolute flex h-[556.026px] items-center justify-center left-[93px] top-[1599px] w-[359.82px]">
        <div className="flex-none rotate-[-8.27deg]">
          <div className="relative h-[520px] w-[288px]">
            <img alt="" src="/cards/sentry-red.svg" width={296} height={528} className="absolute left-[-4px] top-[-4px] block max-w-none drop-shadow-[0px_8px_16px_rgba(0,0,0,0.15)]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[533.357px] items-center justify-center left-[104.33px] top-[1610.33px] w-[337.15px]">
        <div className="flex-none rotate-[-8.27deg]">
          <div className="relative h-[500px] w-[268px]">
            <img alt="" src="/cards/sentry-navy.svg" width={276} height={508} className="absolute left-[-4px] top-[-4px] block max-w-none" />
          </div>
        </div>
      </div>
      <div className="absolute contents h-[118.508px] left-[116.25px] top-[1625.65px] w-[257.31px]">
        <SentryLetter className="absolute flex h-[66.087px] items-center justify-center left-[120.7px] top-[1674.61px] w-[58.322px]" rotate="-32.81deg">S</SentryLetter>
        <SentryLetter className="absolute flex h-[65.156px] items-center justify-center left-[157.87px] top-[1657.21px] w-[50.682px]" rotate="-23.56deg">E</SentryLetter>
        <SentryLetter className="absolute flex h-[64.912px] items-center justify-center left-[196.64px] top-[1644.54px] w-[48.793px]" rotate="-13.8deg">N</SentryLetter>
        <SentryLetter className="absolute flex h-[59.982px] items-center justify-center left-[243.74px] top-[1640.71px] w-[36.623px]" rotate="-3.65deg">T</SentryLetter>
        <SentryLetter className="absolute flex h-[61.022px] items-center justify-center left-[282.51px] top-[1641px] w-[37.875px]" rotate="5.99deg">R</SentryLetter>
        <SentryLetter className="absolute flex h-[65.363px] items-center justify-center left-[316.4px] top-[1646.5px] w-[49.534px]" rotate="15.88deg">Y</SentryLetter>
      </div>
      <div className="absolute flex h-[203.05px] items-center justify-center left-[163.8px] top-[1925.77px] w-[263.941px]">
        <div className="flex-none rotate-[-8.27deg]">
          <div className="relative h-[170px] w-[242px]">
            <img alt="" src="/cards/sentry-white.svg" width={250} height={178} className="absolute left-[-4px] top-[-4px] block max-w-none" />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[40.851px] items-center justify-center left-[189.87px] top-[1976.43px] w-[167.708px]">
        <div className="flex-none rotate-[-8.27deg]">
          <div className="flex flex-col font-['Inter'] font-bold h-[17px] justify-center leading-[0] not-italic relative text-[#040b2e] text-[12px] tracking-[0.6px] w-[167px]">
            <p className="leading-[normal]">WINTER 2026 - PRESENT</p>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[40.851px] items-center justify-center left-[194.76px] top-[2010.08px] w-[167.708px]">
        <div className="flex-none rotate-[-8.27deg]">
          <div className="flex flex-col font-['Inter'] font-bold h-[17px] justify-center leading-[0] not-italic relative text-[#040b2e] text-[15px] tracking-[0.75px] w-[167px]">
            <p className="leading-[normal]">UI/UX Design</p>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[78.255px] items-center justify-center left-[197.67px] top-[2057.97px] w-[205.113px]">
        <div className="flex-none rotate-[-8.27deg]">
          <div className="flex flex-col font-['Inter'] font-normal h-[50px] justify-center leading-[0] not-italic relative text-[#040b2e] text-[12px] tracking-[0.6px] w-[200px]">
            <p className="leading-[normal]">A community network designed to keep immigrants informed and prepared.</p>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[110.4px] size-[306.038px] top-[1658.68px]">
        <div className="flex-none rotate-[-8.27deg]">
          <div className="relative size-[270px]">
            <div className="absolute inset-[-0.37%_2.08%_9.18%_2.08%]">
              <img alt="" src="/cards/sentry-star.svg" width={258.785} height={246.217} className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents h-[211.211px] left-[139.36px] top-[1711.34px] w-[249.559px]">
        <div className="absolute flex h-[169.249px] items-center justify-center left-[270.85px] top-[1724.48px] w-[94.449px]">
          <div className="flex-none rotate-[-0.15deg]">
            <div className="h-[169px] relative w-[94px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" src="/cards/sentry-phones.png" className="absolute h-full left-[-212.87%] max-w-none top-0 w-[312.97%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[187.809px] items-center justify-center left-[141.21px] top-[1730.88px] w-[134.987px]">
          <div className="flex-none rotate-[-16.39deg]">
            <div className="h-[169px] relative w-[91px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" src="/cards/sentry-phones.png" className="absolute h-full left-[-0.11%] max-w-none top-0 w-[323.29%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[180.478px] items-center justify-center left-[205.66px] top-[1720.97px] w-[115.358px]">
          <div className="flex-none rotate-[-8.27deg]">
            <div className="h-[169px] relative w-[92px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" src="/cards/sentry-phones.png" className="absolute h-full left-[-108.8%] max-w-none top-0 w-[319.78%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </CardFrame>
  );
}

function SentryLetter({
  children,
  className,
  rotate
}: {
  children: string;
  className: string;
  rotate: string;
}) {
  return (
    <div className={className}>
      <div className="flex-none" style={{ transform: `rotate(${rotate})` }}>
        <p className="font-['Inter'] font-bold leading-[normal] not-italic relative text-[48px] text-white whitespace-nowrap">{children}</p>
      </div>
    </div>
  );
}
