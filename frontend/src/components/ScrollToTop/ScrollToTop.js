import { useEffect, useState } from "react";
import RippleButton from "../RippleButton";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <RippleButton
      onClick={scrollTop}
      className={`scroll-top ${show ? "scroll-top-visible" : ""}`}
      aria-label="Scroll to top"
    >
      ↑
    </RippleButton>
  );
}
