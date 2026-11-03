"use client";

import type { CSSProperties, ElementType } from "react";
import { useInView } from "./useInView";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
};

export default function WordReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
}: Props) {
  const { ref, inView } = useInView<HTMLElement>(0.3);
  const words = text.split(" ");
  return (
    <Tag ref={ref} data-in={inView} aria-label={text} className={className}>
      {words.map((word, i) => (
        <span key={i} aria-hidden className="word-mask">
          <span
            className="word"
            style={{ "--delay": `${delay + i * 55}ms` } as CSSProperties}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
