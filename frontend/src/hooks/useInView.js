import { useEffect, useRef, useState } from "react";

/**
 * useInView — tracks whether an element has entered the viewport.
 * Used to drive scroll-reveal animations without any animation library.
 */
export default function useInView(options = {}) {
  const { threshold = 0.18, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
