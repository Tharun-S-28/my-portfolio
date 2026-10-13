import React, { useState, useEffect, useRef, useCallback } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#_0101λΞ◈";

export default function CyberText({
  text,
  className = "",
  as: Component = "span",
  scrambleOnMount = false,
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef(null);
  const isHoveredRef = useRef(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = text.length;
    clearInterval(frameRef.current);

    frameRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(frameRef.current);
        setDisplayText(text);
      }

      iteration += 1 / 2;
    }, 28);
  }, [text]);

  useEffect(() => {
    setDisplayText(text);
    if (scrambleOnMount) {
      scramble();
    }
    return () => clearInterval(frameRef.current);
  }, [text, scrambleOnMount, scramble]);

  const handleMouseEnter = () => {
    if (!isHoveredRef.current) {
      isHoveredRef.current = true;
      scramble();
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  return (
    <Component
      className={`cyber-scramble-text ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {displayText}
    </Component>
  );
}
