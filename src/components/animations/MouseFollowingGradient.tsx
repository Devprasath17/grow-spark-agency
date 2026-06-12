import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export function MouseFollowingGradient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const gradient = gradientRef.current;
      if (!gradient) return;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      gradient.style.transform = `translate(${x}px, ${y}px)`;
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div
        ref={gradientRef}
        className="h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-blue-500/30 to-transparent blur-3xl transition-transform duration-75"
      />
    </div>
  );
}
