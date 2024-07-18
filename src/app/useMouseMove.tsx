"use client";

import { useEffect } from 'react';

const useMouseMove = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const container = ref.current;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      container!.classList.add('active');
      startX = e.pageX - container!.offsetLeft;
      scrollLeft = container!.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      container!.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      container!.classList.remove('active');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container!.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      container!.scrollLeft = scrollLeft - walk;
    };

    container!.addEventListener('mousedown', handleMouseDown);
    container!.addEventListener('mouseleave', handleMouseLeave);
    container!.addEventListener('mouseup', handleMouseUp);
    container!.addEventListener('mousemove', handleMouseMove);

    return () => {
      container!.removeEventListener('mousedown', handleMouseDown);
      container!.removeEventListener('mouseleave', handleMouseLeave);
      container!.removeEventListener('mouseup', handleMouseUp);
      container!.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);
};

export default useMouseMove;
