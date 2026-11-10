"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import front from "@/assets/sobrevivir-no-es-reconstruirse.jpg";
import back from "@/assets/sobrevivir-no-es-reconstruirse-contraportada.jpg";
import styles from "./BookGallery.module.css";

type Labels = {
  // Names the whole gallery for screen readers.
  label: string;
  front: { name: string; alt: string };
  back: { name: string; alt: string };
};

// Front and back cover side by side in a strip that snaps to one at a time:
// swipe on a phone, or use the dots below.
export function BookGallery({ labels }: { labels: Labels }) {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const slides = [
    { image: front, ...labels.front },
    { image: back, ...labels.back },
  ];

  function show(index: number) {
    const el = track.current;
    if (el) el.scrollTo({ left: index * el.clientWidth });
  }

  function onScroll() {
    const el = track.current;
    if (el) setCurrent(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <div className={styles.gallery} role="group" aria-label={labels.label}>
      <div ref={track} className={styles.track} onScroll={onScroll}>
        {slides.map((slide) => (
          <Image
            key={slide.name}
            className={styles.slide}
            src={slide.image}
            alt={slide.alt}
            sizes="(min-width: 52rem) 20rem, 16rem"
            placeholder="blur"
          />
        ))}
      </div>
      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            className={styles.dot}
            aria-label={slide.name}
            aria-current={index === current ? "true" : undefined}
            onClick={() => show(index)}
          />
        ))}
      </div>
    </div>
  );
}
