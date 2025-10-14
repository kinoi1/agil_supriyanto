"use client";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const HorizontalSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context | null>(null);
  const hasAnimated = useRef(false);

  const items = [
    { id: 1, src: "icon/tailwind.svg" },
    { id: 2, src: "icon/nextjs.svg" },
    { id: 3, src: "icon/laravel.svg" },
    { id: 4, src: "icon/codeigniter.svg" },
    { id: 5, src: "icon/vue.svg" },
    { id: 6, src: "icon/node.svg" },
  ];

  const initialIndex = Math.floor(items.length / 2);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // 🧩 Fungsi helper agar tidak duplikat
  const calculateXOffset = (index: number) => {
    const container = containerRef.current;
    if (!container || !container.children.length) return 0;

    const slideWidth = container.children[0].clientWidth + 32;
    const containerWidth = container.clientWidth;
    const clampedIndex = Math.max(0, Math.min(index, items.length - 1));

    return containerWidth / 2 - slideWidth / 2 - clampedIndex * slideWidth;
  };

  // 🎬 Fungsi utama untuk geser slide
  const slideToIndex = (index: number, duration = 0.8) => {
    const container = containerRef.current;
    if (!container) return;

    const xOffset = calculateXOffset(index);
    ctx.current?.add(() => {
      gsap.to(container, {
        x: xOffset,
        duration,
        ease: "power2.inOut",
      });
    });

    setCurrentIndex(index);
  };

  const nextSlide = () => slideToIndex(currentIndex + 1);
  const prevSlide = () => slideToIndex(currentIndex - 1);

  // 🧱 Animasi awal (gunakan useLayoutEffect agar tidak flicker)
  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      const xOffset = calculateXOffset(initialIndex);
      gsap.fromTo(
        containerRef.current,
        { x: 0 },
        {
          x: xOffset,
          duration: 1,
          ease: "power3.out",
          onComplete: () => (hasAnimated.current = true),
        }
      );
    });

    // 🧹 cleanup saat unmount
    return () => ctx.current?.revert();
  }, []);

  // 🔁 Re-animasi setiap kali index berubah (smooth)
  useEffect(() => {
    if (!hasAnimated.current) return;
    slideToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="w-full overflow-hidden relative flex items-center justify-center py-5 flex flex-col">
      <div ref={containerRef} className="flex items-center">
        {items.map((item) => (
          <img
            key={item.id}
            className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 h-64 mx-4 rounded-xl object-contain p-4"
            src={item.src}
            alt="Framework"
          />
        ))}
      </div>

      <div className="flex gap-6 mt-6">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black/60 rounded-xl font-semibold"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black/60 rounded-xl font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HorizontalSlider;
