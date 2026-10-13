import { useEffect, useState } from "react";
import useInView from "./useInView";

/**
 * useCounter — animates a number from 0 up to `target` once its ref
 * scrolls into view. Returns [ref, currentValue].
 */
export default function useCounter(target, duration = 1400) {
  const [ref, isVisible] = useInView({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return undefined;

    let raf;
    const start = performance.now();
    const decimals = String(target).includes(".") ? String(target).split(".")[1].length : 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Number((target * eased).toFixed(decimals));
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, target, duration]);

  return [ref, value];
}
