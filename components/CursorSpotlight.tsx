'use client';

import { useEffect, useState, useRef } from 'react';

export default function CursorSpotlight() {
  const [visible, setVisible] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const animFrame = useRef<number | null>(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const handlePointerMove = (e: PointerEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.15);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.15);

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      animFrame.current = requestAnimationFrame(render);
    };

    animFrame.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [visible]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        ref={spotlightRef}
        className="absolute -top-[350px] -left-[350px] w-[700px] h-[700px] rounded-full blur-3xl will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 26, 0.11) 0%, rgba(212, 255, 0, 0.05) 35%, transparent 70%)',
        }}
      />
    </div>
  );
}
