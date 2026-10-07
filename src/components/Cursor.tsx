import React, { useEffect, useRef } from 'react';

export function Cursor() {
  const label = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return;
    const node = label.current;
    if (!node) return;

    const move = (event: MouseEvent) => {
      const hit = document.elementFromPoint(event.clientX, event.clientY);
      const onNed = Boolean(hit?.closest('[data-cursor="ned"]'));
      node.style.opacity = onNed ? '1' : '0';
      node.style.transform = `translate3d(${event.clientX + 16}px, ${event.clientY - 12}px, 0)`;
    };
    const hide = () => {
      node.style.opacity = '0';
    };

    window.addEventListener('mousemove', move);
    document.documentElement.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', hide);
    };
  }, []);

  return (
    <div ref={label} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[200] opacity-0">
      <div className="flex h-5 w-[77px] items-center justify-center rounded-[2px] bg-accent font-heading text-[8px] font-normal leading-normal text-white">
        Not ready yet!
      </div>
    </div>
  );
}
