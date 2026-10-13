import useInView from "../hooks/useInView";

/**
 * <Reveal> wraps any content and fades/slides/zooms it in once it
 * scrolls into view. variant: "up" | "left" | "right" | "zoom"
 */
export default function Reveal({ children, variant = "up", delay = 0, as: Tag = "div", className = "", ...rest }) {
  const [ref, isVisible] = useInView();
  const variantClass = variant === "up" ? "" : variant;

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
