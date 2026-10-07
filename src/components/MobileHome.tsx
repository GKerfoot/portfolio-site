import React, { useState } from 'react';
import { PolaroidStack, polaroidCount } from './PolaroidCarousel';

const polaroidWindow = { x: 472, y: 68, w: 526, h: 472 };
const polaroidScale = 322 / polaroidWindow.w;
const polaroidWidth = polaroidWindow.w * polaroidScale;
const polaroidHeight = polaroidWindow.h * polaroidScale;
const polaroidLeft = (402 - polaroidWidth) / 2;
const polaroidTop = 2726 + (324 - polaroidHeight) / 2;

export function MobileHome() {
  const [frame, setFrame] = useState(0);
  return (
    <div className="bg-white md:hidden [container-type:inline-size]">
      <div className="relative mx-auto w-full max-w-[402px]" style={{ height: 'calc(4000px * min(1, 100cqw / 402px))' }}>
        <div className="absolute left-0 top-0 origin-top-left" style={{ width: 402, height: 4000, transform: 'scale(min(1, 100cqw / 402px))' }}>

    <div className="relative bg-white" data-name="Mobile Version" style={{ width: 402, height: 4000 }}>
      <div className="absolute contents left-[21px] top-[192px]" data-node-id="70:414">
        <div className="absolute h-[199px] left-[21px] rounded-[20.729px] shadow-[0px_5.528px_11.056px_0px_rgba(0,0,0,0.15)] top-[192px] w-[359.306px]" data-node-id="70:415">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20.729px]">
            <div className="absolute bg-white inset-0 rounded-[20.729px]" />
            <img alt="" className="absolute max-w-none object-cover opacity-50 rounded-[20.729px] size-full" src="/mobile/id-texture.png" />
          </div>
        </div>
        <div className="absolute h-[113.319px] left-[41.73px] top-[232.77px] w-[104.337px]" data-node-id="70:416">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-white inset-0" />
            <img alt="" className="absolute max-w-none object-cover opacity-80 size-full" src="/mobile/id-photo.png" />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-heading font-semibold h-[19.347px] leading-[normal] left-[41.73px] text-[13.819px] text-black top-[208.58px] w-[156.16px]" data-node-id="70:417">
          Gretchen Kerfoot
        </p>
        <p className="[word-break:break-word] absolute font-heading font-semibold h-[14.51px] leading-[normal] left-[288.41px] text-[11.056px] text-black top-[364.74px] w-[83.608px]" data-node-id="70:418">
          Class of 2027
        </p>
        <p className="[word-break:break-word] absolute font-heading font-semibold h-[12.438px] leading-[normal] left-[158.5px] text-[10.365px] text-black top-[232.77px] w-[216.965px]" data-node-id="70:419">
          Student at Dartmouth College
        </p>
        <p className="[word-break:break-word] absolute font-heading font-semibold h-[12.438px] leading-[normal] left-[158.5px] text-[10.365px] text-black top-[264.55px] w-[216.965px]" data-node-id="70:420">
          Incoming Business Analyst
        </p>
        <p className="[word-break:break-word] absolute font-heading font-semibold h-[12.438px] leading-[normal] left-[158.5px] text-[10.365px] text-black top-[296.34px] w-[216.965px]" data-node-id="70:421">
          Interests
        </p>
        <p className="[word-break:break-word] absolute font-heading font-normal h-[12.438px] leading-[normal] left-[158.5px] text-[8.292px] text-black top-[247.28px] w-[216.965px]" data-node-id="70:422">
          Computer Science and Human-Centered Design
        </p>
        <p className="[word-break:break-word] absolute font-heading font-normal h-[12.438px] leading-[normal] left-[158.5px] text-[8.292px] text-black top-[279.06px] w-[216.965px]" data-node-id="70:423">
          @ McKinsey Denver
        </p>
        <div className="[word-break:break-word] absolute font-heading font-normal h-[31.094px] leading-[0] left-[158.5px] text-[8.292px] text-black top-[310.85px] w-[216.965px]" data-node-id="70:424">
          <p className="leading-[normal] mb-0">Design Thinking</p>
          <p className="leading-[normal] mb-0">Creative Problem-Solving</p>
          <p className="leading-[normal]">{`Skiing & The Outdoors`}</p>
        </div>
        <div className="absolute h-[27.639px] left-[47.95px] top-[353px] w-[84.99px]" data-node-id="70:425">
          <div className="absolute inset-[-2.5%_-0.81%]">
            <img alt="" className="block max-w-none size-full" src="/mobile/signature.svg" />
          </div>
        </div>
        <div className="absolute left-[336.77px] size-[29.712px] top-[329.5px]" data-node-id="70:426" data-name="image 12">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/mobile/dartmouth.png" />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-heading font-semibold h-[36px] leading-[37.674px] left-[21px] text-[40.186px] text-black top-[95px] w-[360.837px]" data-node-id="70:413">
        Gretchen Kerfoot
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-heading font-normal h-[18.917px] leading-[normal] left-1/2 text-[10.914px] text-black text-center top-[145px] w-[422px]" data-node-id="70:427">
        I’m a creative designer and a big thinker. Welcome to my portfolio!
      </p>
      <div className="[word-break:break-word] absolute contents leading-[0] left-[21px] text-black top-[529px]" data-node-id="70:510">
        <div className="-translate-y-1/2 absolute flex flex-col font-heading font-semibold h-[65.676px] justify-center left-[21px] text-[38.919px] top-[561.84px] w-[299.189px]" data-node-id="70:511">
          <p className="leading-[normal]">Selected Work</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-heading font-normal h-[31px] justify-center left-[21px] text-[12.162px] top-[603.5px] w-[351px]" data-node-id="70:512">
          <p className="leading-[normal]">A collection of recent projects spanning product design, research, and more!</p>
        </div>
      </div>
      <div className="absolute contents h-[217.322px] left-[13px] top-[636px] w-[367.457px]" data-node-id="70:437">
        <div className="absolute contents h-[217.322px] left-[13px] top-[636px] w-[367.457px]" data-node-id="70:438">
          <div className="absolute flex h-[217.322px] items-center justify-center left-[13px] top-[636px] w-[367.457px]" data-node-id="70:439">
            <div className="flex-none rotate-[-3.2deg]">
              <div className="bg-[#0f151b] h-[197.713px] relative rounded-[20.595px] shadow-[0px_5.492px_10.984px_0px_rgba(0,0,0,0.15)] w-[356.982px]" />
            </div>
          </div>
          <div className="absolute flex h-[137.855px] items-center justify-center left-[17.44px] top-[715.47px] w-[362.861px]" data-node-id="70:440">
            <div className="flex-none rotate-[-3.2deg]">
              <div className="h-[118.13px] relative rounded-[20.595px] w-[356.826px]" data-name="Screenshot 2026-10-06 at 3.11.07 PM 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20.595px] size-full" src="/mobile/litboxd.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[39.578px] items-center justify-center left-[194.41px] top-[703.19px] w-[158.002px]" data-node-id="70:441">
          <div className="flex-none rotate-[-3.2deg]">
            <div className="[word-break:break-word] flex flex-col font-['Playfair_Display'] font-semibold h-[30.893px] justify-center leading-[0] relative text-[#d7c1a0] text-[27.46px] text-center tracking-[1.373px] w-[156.523px]">
              <p className="leading-[normal]">Litboxd</p>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex h-[25.429px] items-center justify-center left-[30.86px] top-[668.98px] w-[210.509px]" data-node-id="70:442">
          <div className="flex-none rotate-[-3.2deg]">
            <div className="[word-break:break-word] flex flex-col font-['Source_Serif_4'] font-normal h-[13.73px] justify-center leading-[0] not-italic relative text-[#d7c1a0] text-[9.611px] w-[210.07px]">
              <p className="leading-[normal]">Full Stack Web Development</p>
            </div>
          </div>
        </div>
        <div className="-translate-x-full -translate-y-1/2 absolute flex h-[25.429px] items-center justify-center left-[355.15px] top-[662.62px] w-[210.509px]" data-node-id="70:443">
          <div className="flex-none rotate-[-3.2deg]">
            <div className="[word-break:break-word] flex flex-col font-['Source_Serif_4'] font-normal h-[13.73px] justify-center leading-[0] not-italic relative text-[9.611px] text-right text-white w-[210.07px]">
              <p className="leading-[normal]">Winter 2026</p>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[35.711px] items-center justify-center left-[196.06px] top-[732.67px] w-[211.083px]" data-node-id="70:444">
          <div className="flex-none rotate-[-3.2deg]">
            <div className="[word-break:break-word] flex flex-col font-['Source_Serif_4'] font-normal h-[24.028px] justify-center leading-[0] not-italic relative text-[8.238px] text-center text-white w-[210.07px]">
              <p className="leading-[normal]">A better social media platform for readers. Think Goodreads meets Letterboxd.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents h-[361.923px] left-[96px] top-[882px] w-[210.004px]" data-node-id="70:445">
        <div className="absolute flex h-[361.923px] items-center justify-center left-[96px] top-[882px] w-[210.004px]" data-node-id="70:446">
          <div className="flex-none rotate-[2.23deg]">
            <div className="h-[354.558px] relative rounded-[20.455px] shadow-[0px_5.455px_10.909px_0px_rgba(0,0,0,0.15)] w-[196.371px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(102, 102, 102, 0.2) 100%), linear-gradient(90deg, rgb(134, 194, 255) 0%, rgb(134, 194, 255) 100%)" }} />
          </div>
        </div>
        <div className="absolute flex h-[59.414px] items-center justify-center left-[107.77px] top-[882px] w-[198.237px]" data-node-id="70:447">
          <div className="flex-none rotate-[2.23deg]">
            <div className="bg-[#142794] h-[51.82px] relative rounded-tl-[20.455px] rounded-tr-[20.455px] w-[196.371px]" />
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex h-[36.059px] items-center justify-center left-[119.15px] top-[908.63px] w-[122.495px]" data-node-id="70:448">
          <div className="flex-none rotate-[2.23deg]">
            <div className="[word-break:break-word] flex flex-col font-['Montserrat'] font-semibold h-[31.365px] justify-center leading-[0] relative text-[16.364px] text-white w-[121.368px]">
              <p className="leading-[normal]">Adapt-a-Mask</p>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute flex h-[24.385px] items-center justify-center left-[198.42px] top-[1117.2px] w-[154.696px]" data-node-id="70:449">
          <div className="flex-none rotate-[2.23deg]">
            <p className="[word-break:break-word] font-['Montserrat'] font-semibold h-[18.41px] leading-[normal] relative text-[10.909px] text-black text-center w-[154.096px]">Engineering Design</p>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute flex h-[40.276px] items-center justify-center left-[197.41px] top-[1135.14px] w-[178.444px]" data-node-id="70:450">
          <div className="flex-none rotate-[2.23deg]">
            <p className="[word-break:break-word] font-['Montserrat'] font-normal h-[33.41px] leading-[0] not-italic relative text-[8.182px] text-black text-center w-[177.279px]">
              <span className="font-['Montserrat'] font-normal leading-[normal]">{`How might we `}</span>
              <span className="font-['Montserrat'] font-semibold leading-[normal]">improve airway seal consistency</span>
              <span className="font-['Montserrat'] font-normal leading-[normal]">{` for `}</span>
              <span className="font-['Montserrat'] font-semibold leading-[normal]">novice</span>
              <span className="font-['Montserrat'] font-normal leading-[normal]">{` `}</span>
              <span className="font-['Montserrat'] font-semibold leading-[normal]">emergency medical responders</span>
              <span className="font-['Montserrat'] font-normal leading-[normal]">{` operating in `}</span>
              <span className="font-['Montserrat'] font-semibold leading-[normal]">cold, prehospital environments?</span>
            </p>
          </div>
        </div>
        <div className="absolute flex h-[169.412px] items-center justify-center left-[132.35px] top-[944.54px] w-[140.616px]" data-node-id="70:451">
          <div className="flex-none rotate-[2.23deg]">
            <div className="border-[0.682px] border-black border-solid h-[164.315px] relative w-[134.331px]" data-name="Screenshot 2026-10-06 at 3.26.26 PM 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[-82.55%] max-w-none top-0 w-[182.96%]" src="/mobile/adapt.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents h-[43.815px] left-[104.65px] top-[1187.55px] w-[181.983px]" data-node-id="70:452">
          <div className="absolute flex h-[43.815px] items-center justify-center left-[104.65px] top-[1187.55px] w-[181.983px]" data-node-id="70:453">
            <div className="flex-none rotate-[2.23deg]">
              <div className="bg-white h-[36.82px] relative w-[180.688px]" />
            </div>
          </div>
          <div className="absolute flex h-[36.737px] items-center justify-center left-[108.19px] top-[1191.09px] w-[174.905px]" data-node-id="70:454">
            <div className="flex-none rotate-[2.23deg]">
              <div className="bg-black h-[30.001px] relative w-[173.87px]" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[38.94px] items-center justify-center left-[109.53px] top-[1189.78px] w-[179.072px]" data-node-id="70:455">
          <div className="flex-none rotate-[2.23deg]">
            <p className="[word-break:break-word] font-['Libre_Barcode_128'] h-[32.047px] leading-[normal] not-italic relative text-[53.184px] text-white w-[177.961px]">testhelfea</p>
          </div>
        </div>
        <div className="absolute flex h-[30.134px] items-center justify-center left-[268.91px] top-[901.88px] w-[23.652px]" data-node-id="70:456">
          <div className="flex-none rotate-[2.23deg]">
            <div className="h-[29.28px] relative w-[22.531px]" data-name="image 17">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/mobile/adapt-mark.png" />
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex h-[16.009px] items-center justify-center left-[118.93px] top-[923.81px] w-[114.232px]" data-node-id="70:457">
          <div className="flex-none rotate-[2.23deg]">
            <div className="[word-break:break-word] flex flex-col font-['Montserrat'] font-semibold h-[11.591px] justify-center leading-[0] relative text-[8.182px] text-white w-[113.868px]">
              <p className="leading-[normal]">Winter 2025 - Present</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents h-[205.085px] left-[18.94px] top-[1273px] w-[361.249px]" data-node-id="70:428">
        <div className="absolute contents h-[205.085px] left-[18.94px] top-[1273px] w-[361.249px]" data-node-id="70:429">
          <div className="absolute flex h-[205.085px] items-center justify-center left-[18.94px] top-[1273px] w-[361.249px]" data-node-id="70:430">
            <div className="flex-none rotate-[1.16deg]">
              <div className="h-[197.9px] relative rounded-[20.615px] shadow-[0px_5.497px_10.994px_0px_rgba(0,0,0,0.15)] w-[357.32px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(102, 102, 102, 0.2) 100%), linear-gradient(90deg, rgb(1, 50, 35) 0%, rgb(1, 50, 35) 100%)" }} />
            </div>
          </div>
          <div className="absolute flex h-[23.168px] items-center justify-center left-[42.82px] top-[1290.59px] w-[194.814px]" data-node-id="70:431">
            <div className="flex-none rotate-[1.16deg]">
              <p className="[word-break:break-word] font-heading font-semibold h-[19.24px] leading-[normal] relative text-[13.743px] text-white w-[194.465px]">Dartmouth Housing Project</p>
            </div>
          </div>
          <div className="absolute flex h-[15.506px] items-center justify-center left-[40.4px] top-[1417px] w-[155.515px]" data-node-id="70:432">
            <div className="flex-none rotate-[1.16deg]">
              <p className="[word-break:break-word] font-heading font-semibold h-[12.369px] leading-[normal] relative text-[10.307px] text-white w-[155.297px]">Design Research</p>
            </div>
          </div>
          <div className="absolute flex h-[18.855px] items-center justify-center left-[40.05px] top-[1434.18px] w-[321.086px]" data-node-id="70:433">
            <div className="flex-none rotate-[1.16deg]">
              <p className="[word-break:break-word] font-heading font-normal h-[12.369px] leading-[normal] relative text-[8.246px] text-white w-[320.901px]">How might we make Dartmouth students identify further with their residential house?</p>
            </div>
          </div>
          <div className="-translate-x-full absolute flex h-[21.07px] items-center justify-center left-[357.86px] top-[1295.12px] w-[91.075px]" data-node-id="70:434">
            <div className="flex-none rotate-[1.16deg]">
              <p className="[word-break:break-word] font-heading font-semibold h-[19.24px] leading-[normal] relative text-[10.994px] text-right text-white w-[90.704px]">Winter 2026</p>
            </div>
          </div>
          <div className="absolute flex h-[17.674px] items-center justify-center left-[40.98px] top-[1388.15px] w-[262.689px]" data-node-id="70:435">
            <div className="flex-none rotate-[1.16deg]">
              <p className="[word-break:break-word] font-heading font-normal h-[12.369px] leading-[normal] not-italic relative text-[16.492px] text-white tracking-[1.6492px] w-[262.493px] whitespace-pre-wrap">{`7744  3321  4423  1284`}</p>
            </div>
          </div>
          <div className="absolute flex items-center justify-center left-[41.43px] size-[53.269px] top-[1326.32px]" data-node-id="70:436">
            <div className="flex-none rotate-[1.16deg]">
              <div className="relative size-[52.224px]" data-name="image 14">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/mobile/housing-chip.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents h-[230.428px] left-[15px] top-[1497px] w-[379.704px]" data-node-id="70:458">
        <div className="absolute contents h-[230.428px] left-[15px] top-[1497px] w-[379.704px]" data-node-id="70:459">
          <div className="absolute flex h-[230.428px] items-center justify-center left-[15px] top-[1497px] w-[379.704px]" data-node-id="70:460">
            <div className="flex-none rotate-[-4.57deg]">
              <div className="h-[202.031px] relative rounded-[21.045px] shadow-[0px_5.612px_11.224px_0px_rgba(0,0,0,0.15)] w-[364.778px]" style={{ backgroundImage: "linear-gradient(157.91877928283688deg, rgba(164, 183, 245, 0.6) 4.3984%, rgba(239, 157, 210, 0.48) 42.355%, rgba(244, 231, 174, 0.6) 74.303%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex h-[44.199px] items-center justify-center left-[35.92px] top-[1550.63px] w-[161.947px]" data-node-id="70:461">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="[word-break:break-word] flex flex-col font-['Faculty_Glyphic'] h-[31.567px] justify-center leading-[0] not-italic relative text-[28.06px] text-black tracking-[1.403px] w-[159.941px]">
              <p className="leading-[normal]">Ned.ai</p>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex h-[19.514px] items-center justify-center left-[38.6px] top-[1579.05px] w-[70.345px]" data-node-id="70:462">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="[word-break:break-word] flex flex-col font-['Faculty_Glyphic'] h-[14.03px] justify-center leading-[0] not-italic relative text-[9.821px] text-black w-[69.448px]">
              <p className="leading-[normal]">Summer 2026</p>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[230.428px] items-center justify-center left-[15px] top-[1497px] w-[379.704px]" data-node-id="70:463">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="h-[202.031px] relative rounded-bl-[21.045px] rounded-br-[21.045px] w-[364.778px]" data-name="image 20">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[21.045px] rounded-br-[21.045px]">
                <img alt="" className="absolute h-[113.19%] left-[-0.02%] max-w-none top-0 w-[100.04%]" src="/mobile/ned-map.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[5.642px] items-center justify-center left-[307.55px] top-[1537.34px] w-[0.79px]" data-node-id="70:464">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="h-[5.632px] relative w-[0.343px]">
              <div className="absolute inset-[-12.46%_-204.5%_-12.46%_-204.51%]">
                <img alt="" className="block max-w-none size-full" src="/mobile/ned-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[4.924px] items-center justify-center left-[305.66px] top-[1542.97px] w-[2.722px]" data-node-id="70:465">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="h-[4.752px] relative w-[2.351px]">
              <div className="absolute inset-[-14.76%_-29.84%]">
                <img alt="" className="block max-w-none size-full" src="/mobile/ned-2.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[3.135px] items-center justify-center left-[308.04px] top-[1543.21px] w-[2.946px]" data-node-id="70:466">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="h-[2.928px] relative w-[2.722px]">
              <div className="absolute inset-[-23.96%_-25.77%]">
                <img alt="" className="block max-w-none size-full" src="/mobile/ned-3.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[5.405px] items-center justify-center left-[305.14px] top-[1531.82px] w-[3.881px]" data-node-id="70:467">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="h-[5.144px] relative w-[3.483px]">
              <div className="absolute inset-[-13.64%_-20.14%]">
                <img alt="" className="block max-w-none size-full" src="/mobile/ned-4.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[5.575px] items-center justify-center left-[305.12px] top-[1531.73px] w-[4.903px]" data-node-id="70:468">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="h-[5.233px] relative w-[4.501px]">
              <div className="absolute inset-[-13.41%_-15.59%_-13.4%_-15.59%]">
                <img alt="" className="block max-w-none size-full" src="/mobile/ned-5.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[1.016px] items-center justify-center left-[308.45px] top-[1538.29px] w-[4.009px]" data-node-id="70:469">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="h-[0.702px] relative w-[3.966px]">
              <div className="absolute inset-[-99.94%_-17.69%_-99.91%_-17.69%]">
                <img alt="" className="block max-w-none size-full" src="/mobile/ned-6.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[1.155px] items-center justify-center left-[304.28px] top-[1538.22px] w-[3.773px]" data-node-id="70:470">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="h-[0.862px] relative w-[3.716px]">
              <div className="absolute inset-[-81.41%_-18.88%]">
                <img alt="" className="block max-w-none size-full" src="/mobile/ned-7.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[7.406px] items-center justify-center left-[280.1px] top-[1530.93px] w-[17.745px]" data-node-id="70:471">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="h-[6.046px] relative w-[17.318px]">
              <div className="absolute inset-[-11.6%_-4.05%]">
                <img alt="" className="block max-w-none size-full" src="/mobile/ned-8.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex h-[32.239px] items-center justify-center left-[211.27px] top-[1534.9px] w-[81.783px]" data-node-id="70:472">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="[word-break:break-word] flex flex-col font-['Faculty_Glyphic'] h-[25.955px] justify-center leading-[0] not-italic relative text-[9.821px] text-black w-[79.971px]">
              <p className="leading-[normal]">Product-Led Growth Intern</p>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex h-[60.586px] items-center justify-center left-[40.39px] top-[1612.36px] w-[193.132px]" data-node-id="70:473">
          <div className="flex-none rotate-[-4.57deg]">
            <div className="[word-break:break-word] flex flex-col font-['Faculty_Glyphic'] h-[45.597px] justify-center leading-[0] not-italic relative text-[9.821px] text-black w-[190.106px]">
              <p className="leading-[normal]">How might we design the narrative and product for an AI meeting tool to showcase diverse thinking and celebrate cognitive differences?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents h-[410.353px] left-[62px] top-[1746px] w-[265.551px]" data-node-id="70:474">
        <div className="absolute contents h-[410.353px] left-[62px] top-[1746px] w-[265.551px]" data-node-id="70:475">
          <div className="absolute flex h-[410.353px] items-center justify-center left-[62px] top-[1746px] w-[265.551px]" data-node-id="70:476">
            <div className="flex-none rotate-[-8.27deg]">
              <div className="h-[383.765px] relative rounded-[22.14px] w-[212.547px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(102, 102, 102, 0.2) 100%), linear-gradient(90deg, rgb(160, 12, 15) 0%, rgb(160, 12, 15) 100%)" }} />
            </div>
          </div>
          <div className="absolute flex h-[393.623px] items-center justify-center left-[70.36px] top-[1754.37px] w-[248.82px]" data-node-id="70:477">
            <div className="flex-none rotate-[-8.27deg]">
              <div className="bg-[#040b2e] h-[369.005px] relative rounded-[22.14px] w-[197.787px]" />
            </div>
          </div>
          <div className="absolute contents h-[87.727px] left-[79.15px] top-[1765.61px] w-[190.087px]" data-node-id="70:478" data-name="Group">
            <div className="absolute flex h-[49.145px] items-center justify-center left-[82.44px] top-[1801.59px] w-[43.471px]" data-node-id="70:479">
              <div className="flex-none rotate-[-32.81deg]">
                <p className="[word-break:break-word] font-['Inter'] font-bold leading-[normal] not-italic relative text-[35.424px] text-white whitespace-nowrap">S</p>
              </div>
            </div>
            <div className="absolute flex h-[48.209px] items-center justify-center left-[109.87px] top-[1789.01px] w-[37.353px]" data-node-id="70:480">
              <div className="flex-none rotate-[-23.56deg]">
                <p className="[word-break:break-word] font-['Inter'] font-bold leading-[normal] not-italic relative text-[35.424px] text-white whitespace-nowrap">E</p>
              </div>
            </div>
            <div className="absolute flex h-[48.198px] items-center justify-center left-[138.48px] top-[1779.51px] w-[36.475px]" data-node-id="70:481">
              <div className="flex-none rotate-[-13.8deg]">
                <p className="[word-break:break-word] font-['Inter'] font-bold leading-[normal] not-italic relative text-[35.424px] text-white whitespace-nowrap">N</p>
              </div>
            </div>
            <div className="absolute flex h-[44.44px] items-center justify-center left-[173.25px] top-[1776.81px] w-[26.687px]" data-node-id="70:482">
              <div className="flex-none rotate-[-3.65deg]">
                <p className="[word-break:break-word] font-['Inter'] font-bold leading-[normal] not-italic relative text-[35.424px] text-white whitespace-nowrap">T</p>
              </div>
            </div>
            <div className="absolute flex h-[45.269px] items-center justify-center left-[201.84px] top-[1777px] w-[28.354px]" data-node-id="70:483">
              <div className="flex-none rotate-[5.99deg]">
                <p className="[word-break:break-word] font-['Inter'] font-bold leading-[normal] not-italic relative text-[35.424px] text-white whitespace-nowrap">R</p>
              </div>
            </div>
            <div className="absolute flex h-[48.473px] items-center justify-center left-[226.82px] top-[1781.05px] w-[36.773px]" data-node-id="70:484">
              <div className="flex-none rotate-[15.88deg]">
                <p className="[word-break:break-word] font-['Inter'] font-bold leading-[normal] not-italic relative text-[35.424px] text-white whitespace-nowrap">Y</p>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[149.853px] items-center justify-center left-[114.25px] top-[1987.16px] w-[194.791px]" data-node-id="70:485">
            <div className="flex-none rotate-[-8.27deg]">
              <div className="bg-white h-[125.462px] relative rounded-[22.14px] w-[178.598px]" />
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex h-[30.148px] items-center justify-center left-[133.49px] top-[2024.55px] w-[123.77px]" data-node-id="70:486">
            <div className="flex-none rotate-[-8.27deg]">
              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-bold h-[12.546px] justify-center leading-[0] not-italic relative text-[#040b2e] text-[8.856px] tracking-[0.4428px] w-[123.248px]">
                <p className="leading-[normal]">WINTER 2026 - PRESENT</p>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex h-[30.148px] items-center justify-center left-[137.1px] top-[2049.38px] w-[123.77px]" data-node-id="70:487">
            <div className="flex-none rotate-[-8.27deg]">
              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-bold h-[12.546px] justify-center leading-[0] not-italic relative text-[#040b2e] text-[11.07px] tracking-[0.5535px] w-[123.248px]">
                <p className="leading-[normal]">UI/UX Design</p>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex h-[57.753px] items-center justify-center left-[139.25px] top-[2084.72px] w-[151.375px]" data-node-id="70:488">
            <div className="flex-none rotate-[-8.27deg]">
              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal h-[36.901px] justify-center leading-[0] not-italic relative text-[#040b2e] text-[8.856px] tracking-[0.4428px] w-[147.602px]">
                <p className="leading-[normal]">A community network designed to keep immigrants informed and prepared.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[74.84px] size-[225.859px] top-[1790.05px]" data-node-id="70:489">
          <div className="flex-none rotate-[-8.27deg]">
            <div className="relative size-[199.263px]">
              <div className="absolute inset-[-0.37%_2.08%_9.18%_2.08%]">
                <img alt="" className="block max-w-none size-full" src="/mobile/star.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents h-[155.875px] left-[96.21px] top-[1828.91px] w-[184.178px]" data-node-id="70:490">
          <div className="absolute flex h-[124.908px] items-center justify-center left-[193.25px] top-[1838.6px] w-[69.704px]" data-node-id="70:491">
            <div className="flex-none rotate-[-0.15deg]">
              <div className="h-[124.724px] relative w-[69.373px]" data-name="image 28">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-212.87%] max-w-none top-0 w-[312.97%]" src="/mobile/sentry-phones.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[138.605px] items-center justify-center left-[97.58px] top-[1843.33px] w-[99.621px]" data-node-id="70:492">
            <div className="flex-none rotate-[-16.39deg]">
              <div className="h-[124.724px] relative w-[67.159px]" data-name="image 29">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-0.11%] max-w-none top-0 w-[323.29%]" src="/mobile/sentry-phones.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[133.195px] items-center justify-center left-[145.15px] top-[1836.02px] w-[85.135px]" data-node-id="70:493">
            <div className="flex-none rotate-[-8.27deg]">
              <div className="h-[124.724px] relative w-[67.897px]" data-name="image 30">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-108.8%] max-w-none top-0 w-[319.78%]" src="/mobile/sentry-phones.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-heading font-semibold h-[75px] justify-center leading-[0] left-[33px] text-[48px] text-black top-[2280.5px] w-[322px]" data-node-id="70:509">
        <p className="leading-[normal]">About Me</p>
      </div>
      <div className="[word-break:break-word] absolute font-heading font-normal h-[311px] leading-[0] left-[33px] text-[15px] text-black top-[2318px] w-[337px] whitespace-pre-wrap" data-node-id="70:513">
        <p className="leading-[25px] mb-0">Hello! My name is Gretchen, and I am a current senior at Dartmouth College. I study computer science and human-centered design, focusing on the intersection of design thinking with computer programming and product development.</p>
        <p className="leading-[25px] mb-0">​</p>
        <p className="leading-[25px]">Outside of my studies, I am a member of the Dartmouth Ski Patrol, sister of Sigma Delta sorority, and the vice president of the Casual Thursday Improv Troupe. I love skiing, hiking, SCUBA diving, geocaching, and pretty much everything else outdoors.</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-heading font-semibold h-[34.256px] justify-center leading-[0] left-[117.84px] text-[16.443px] text-black text-center top-[2703.13px] w-[158.264px]" data-node-id="70:498">
        <p className="leading-[normal]">Ask me about...</p>
      </div>
      <div className="pointer-events-none absolute" style={{ left: polaroidLeft, top: polaroidTop, width: polaroidWidth, height: polaroidHeight }}>
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: 996, height: 1255, transform: `scale(${polaroidScale}) translate(${-polaroidWindow.x}px, ${-polaroidWindow.y}px)` }}>
          <PolaroidStack index={frame} />
        </div>
      </div>
      <div className="absolute z-10 h-[17.816px] left-[18px] top-[2856px] w-[7.964px]" data-node-id="70:507">
        <div className="absolute inset-[-3.85%_-8.6%]">
          <img alt="" className="block max-w-none size-full" src="/mobile/arrow-left.svg" />
        </div>
      </div>
      <div className="absolute z-10 h-[19.191px] left-[379px] top-[2843px] w-[6.51px]" data-node-id="70:508">
        <div className="absolute inset-[-3.57%_-10.52%_-3.57%_-10.53%]">
          <img alt="" className="block max-w-none size-full" src="/mobile/arrow-right.svg" />
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-heading font-semibold h-[45px] justify-center leading-[0] left-[34px] text-[32px] text-black top-[3079.5px] w-[271px]" data-node-id="70:514">
        <p className="leading-[25px]">{`Skills & Tools`}</p>
      </div>
      <div className="absolute contents h-[226.773px] left-[18px] top-[3109px] w-[358.853px]" data-node-id="70:515">
        <div className="absolute flex h-[226.668px] items-center justify-center left-[18px] top-[3109.1px] w-[355.619px]" data-node-id="70:516">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="bg-[#ebe8dd] h-[215.519px] relative w-[348.843px]" />
          </div>
        </div>
        <div className="absolute flex h-[202.671px] items-center justify-center left-[29.41px] top-[3122.4px] w-[332.873px]" data-node-id="70:517">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="border-[#142794] border-[1.942px] border-solid h-[192.22px] relative w-[326.838px]" />
          </div>
        </div>
        <div className="absolute flex h-[26.775px] items-center justify-center left-[50.12px] top-[3190.31px] w-[68.715px]" data-node-id="70:518">
          <div className="flex-none rotate-[-1.85deg]">
            <p className="[word-break:break-word] font-['Special_Elite'] h-[24.594px] leading-[normal] not-italic relative text-[#142794] text-[10.355px] w-[67.956px]">{`React & TypeScript`}</p>
          </div>
        </div>
        <div className="absolute flex h-[12.189px] items-center justify-center left-[218.39px] top-[3187.17px] w-[77.291px]" data-node-id="70:519">
          <div className="flex-none rotate-[-1.85deg]">
            <p className="[word-break:break-word] font-['Special_Elite'] h-[9.708px] leading-[normal] not-italic relative text-[#142794] text-[10.355px] w-[77.017px]">PostHog</p>
          </div>
        </div>
        <div className="absolute flex h-[11.563px] items-center justify-center left-[221.08px] top-[3271.24px] w-[57.885px]" data-node-id="70:520">
          <div className="flex-none rotate-[-1.85deg]">
            <p className="[word-break:break-word] font-['Special_Elite'] h-[9.708px] leading-[normal] not-italic relative text-[#142794] text-[10.355px] w-[57.601px]">Microsoft Office</p>
          </div>
        </div>
        <div className="absolute flex h-[12.189px] items-center justify-center left-[298.06px] top-[3268.13px] w-[77.291px]" data-node-id="70:521">
          <div className="flex-none rotate-[-1.85deg]">
            <p className="[word-break:break-word] font-['Special_Elite'] h-[9.708px] leading-[normal] not-italic relative text-[#142794] text-[10.355px] w-[77.017px]">Figma</p>
          </div>
        </div>
        <div className="absolute flex h-[11.354px] items-center justify-center left-[140.87px] top-[3274.04px] w-[51.416px]" data-node-id="70:522">
          <div className="flex-none rotate-[-1.85deg]">
            <p className="[word-break:break-word] font-['Special_Elite'] h-[9.708px] leading-[normal] not-italic relative text-[#142794] text-[10.355px] w-[51.129px]">Claude Code</p>
          </div>
        </div>
        <div className="absolute flex h-[11.688px] items-center justify-center left-[142.62px] top-[3187.53px] w-[61.766px]" data-node-id="70:523">
          <div className="flex-none rotate-[-1.85deg]">
            <p className="[word-break:break-word] font-['Special_Elite'] h-[9.708px] leading-[normal] not-italic relative text-[#142794] text-[10.355px] w-[61.484px]">UI/UX Research</p>
          </div>
        </div>
        <div className="absolute flex h-[15.422px] items-center justify-center left-[295.28px] top-[3183.39px] w-[37.331px]" data-node-id="70:524">
          <div className="flex-none rotate-[-1.85deg]">
            <p className="[word-break:break-word] font-['Special_Elite'] h-[14.238px] leading-[normal] not-italic relative text-[#142794] text-[10.355px] w-[36.891px]">{`Java & C++`}</p>
          </div>
        </div>
        <div className="absolute flex h-[11.27px] items-center justify-center left-[52.9px] top-[3276.97px] w-[48.828px]" data-node-id="70:525">
          <div className="flex-none rotate-[-1.85deg]">
            <p className="[word-break:break-word] font-['Special_Elite'] h-[9.708px] leading-[normal] not-italic relative text-[#142794] text-[10.355px] w-[48.54px]">{`Node.js & Python`}</p>
          </div>
        </div>
        <div className="absolute flex h-[34.744px] items-center justify-center left-[52.03px] top-[3150.54px] w-[35.37px]" data-node-id="70:526">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="h-[33.655px] relative w-[34.302px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/mobile/punch.svg" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[34.744px] items-center justify-center left-[51.66px] top-[3239.26px] w-[35.37px]" data-node-id="70:527">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="h-[33.655px] relative w-[34.302px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/mobile/punch.svg" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[34.744px] items-center justify-center left-[157.75px] top-[3235.84px] w-[35.37px]" data-node-id="70:528">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="h-[33.655px] relative w-[34.302px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/mobile/punch.svg" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[34.744px] items-center justify-center left-[227.76px] top-[3238.11px] w-[35.37px]" data-node-id="70:529">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="h-[33.655px] relative w-[34.302px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/mobile/punch.svg" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[34.744px] items-center justify-center left-[299.41px] top-[3231.26px] w-[35.37px]" data-node-id="70:530">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="h-[33.655px] relative w-[34.302px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/mobile/punch.svg" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[34.744px] items-center justify-center left-[149.29px] top-[3154.52px] w-[35.37px]" data-node-id="70:531">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="h-[33.655px] relative w-[34.302px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/mobile/punch.svg" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[34.744px] items-center justify-center left-[216.99px] top-[3145.21px] w-[35.37px]" data-node-id="70:532">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="h-[33.655px] relative w-[34.302px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/mobile/punch.svg" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[34.744px] items-center justify-center left-[301.73px] top-[3142.47px] w-[35.37px]" data-node-id="70:533">
          <div className="flex-none rotate-[-1.85deg]">
            <div className="h-[33.655px] relative w-[34.302px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/mobile/punch.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[150px] left-[71px] top-[3439px] w-[92px]" data-node-id="70:534" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/mobile/resume.png" />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-heading font-semibold h-[24px] justify-center leading-[0] left-[75px] text-[20px] text-black top-[3615px] w-[106px]" data-node-id="70:535">
        <p className="leading-[25px]">Resume</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-heading font-semibold h-[24px] justify-center leading-[0] left-[75px] text-[20px] text-black top-[3777px] w-[106px]" data-node-id="70:536">
        <p className="leading-[25px]">Email</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-heading font-semibold h-[24px] justify-center leading-[0] left-[250px] text-[20px] text-black top-[3582px] w-[106px]" data-node-id="70:537">
        <p className="leading-[25px]">LinkedIn</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-heading font-semibold h-[24px] justify-center leading-[0] left-[219px] text-[20px] text-black top-[3765px] w-[106px]" data-node-id="70:538">
        <p className="leading-[25px]">GitHub</p>
      </div>
      <div className="absolute h-[121px] left-[218px] top-[3432px] w-[129px]" data-node-id="70:539" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/mobile/linkedin.png" />
      </div>
      <div className="absolute h-[114px] left-[209px] top-[3622px] w-[116px]" data-node-id="70:540" data-name="image 33">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/mobile/github.png" />
      </div>
      <div className="absolute h-[94px] left-[57px] top-[3659px] w-[95px]" data-node-id="70:541" data-name="image 34">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/mobile/email.png" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-heading font-normal h-[37px] justify-center leading-[0] left-[calc(50%-0.5px)] text-[12px] text-black text-center top-[3945.5px] w-[325px]" data-node-id="70:542">
        <p className="leading-[normal]">© 2026 Gretchen Kerfoot. All rights reserved. No AI was used in the design of this portfolio.</p>
      </div>

      <a href="/project/litboxd" aria-label="Litboxd" className="absolute left-[13px] top-[636px] z-10 block h-[217px] w-[367px]" />
      <a href="/project/adapt-a-mask" aria-label="Adapt-a-Mask" className="absolute left-[96px] top-[882px] z-10 block h-[362px] w-[210px]" />
      <a href="/project/dartmouth-housing" aria-label="Dartmouth Housing Project" className="absolute left-[19px] top-[1273px] z-10 block h-[205px] w-[361px]" />
      <div data-cursor="ned" aria-label="Ned.ai" className="absolute left-[15px] top-[1497px] z-10 h-[230px] w-[380px]" />
      <a href="/project/sentry" aria-label="Sentry" className="absolute left-[62px] top-[1746px] z-10 block h-[410px] w-[266px]" />
      <button type="button" aria-label="Show the previous photo" onClick={() => setFrame((frame) => (frame + polaroidCount - 1) % polaroidCount)} className="absolute left-[8px] top-[2846px] z-10 h-[40px] w-[28px] bg-transparent" />
      <button type="button" aria-label="Show the next photo" onClick={() => setFrame((frame) => (frame + 1) % polaroidCount)} className="absolute left-[368px] top-[2833px] z-10 h-[40px] w-[28px] bg-transparent" />
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="absolute left-[57px] top-[3432px] z-10 block h-[180px] w-[120px]" />
      <a href="https://www.linkedin.com/in/gretchen-kerfoot-a52653272/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="absolute left-[218px] top-[3432px] z-10 block h-[140px] w-[140px]" />
      <a href="mailto:gretchen.a.kerfoot.27@dartmouth.edu" aria-label="Email" className="absolute left-[50px] top-[3650px] z-10 block h-[140px] w-[120px]" />
      <a href="https://github.com/GKerfoot" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="absolute left-[200px] top-[3610px] z-10 block h-[160px] w-[140px]" />
    </div>
  
        </div>
      </div>
    </div>
  );
}
