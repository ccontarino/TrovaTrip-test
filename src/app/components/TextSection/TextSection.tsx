"use client";

import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { memo, useEffect, useRef } from "react";

interface TextSectionProps {
  text: string;
  searchWords: string;
}

function TextSection({ text, searchWords = "" }: TextSectionProps) {
  const elementRef = useRef(null);
  const isOnScreen = useIntersectionObserver(elementRef, { threshold: 0.3 });
  const inputText = searchWords;
  const regex = new RegExp(`\\b(${inputText})\\b`, "gi");
  const parts = text.split(regex);

  return (
    <div className="min-h-[340px]" ref={elementRef}>
      {isOnScreen &&
        parts.map((part, index) => (
          <span
            key={index}
            className={
              part.toLowerCase() === inputText.toLowerCase()
                ? "text-yellow-500"
                : "text-white"
            }
          >
            {part}
          </span>
        ))}
    </div>
  );
}

export default memo(TextSection);
