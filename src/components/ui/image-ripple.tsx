import React, { useRef } from "react";

export const ImageRipple: React.FC = () => {
  const rippleRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const ripple = rippleRef.current;
    if (!ripple) return;
    const rect = ripple.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ripple.style.setProperty("--ripple-x", `${x}px`);
    ripple.style.setProperty("--ripple-y", `${y}px`);
  };

  return (
    <div
      ref={rippleRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-md h-80 overflow-hidden rounded-xl shadow-lg group"
      style={{ cursor: "pointer" }}
    >
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
        alt="Tech Ripple"
        className="w-full h-full object-cover rounded-xl"
        loading="lazy"
      />
      <span
        className="pointer-events-none absolute left-0 top-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at var(--ripple-x, 50%) var(--ripple-y, 50%), rgba(44,166,164,0.25) 0%, transparent 60%)`,
          transition: "background 0.2s",
        }}
      />
    </div>
  );
};
