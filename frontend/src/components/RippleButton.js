/**
 * RippleButton — renders a <button> or <a> (when `href` is passed) with a
 * manual, CSS-driven ripple effect on click. No animation library used.
 */
export default function RippleButton({
  as,
  href,
  onClick,
  className = "",
  children,
  target,
  rel,
  type = "button",
  ...rest
}) {
  const handleClick = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    if (onClick) onClick(e);
  };

  const Tag = as || (href ? "a" : "button");

  return (
    <Tag
      href={href}
      target={target}
      rel={rel}
      type={!href ? type : undefined}
      className={className}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Tag>
  );
}
