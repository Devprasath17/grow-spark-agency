import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimatedBlobProps {
  delay?: number;
  duration?: number;
  children?: ReactNode;
  className?: string;
}

export function AnimatedBlob({
  delay = 0,
  duration = 6,
  className = "",
}: AnimatedBlobProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function FloatingGradientBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <AnimatedBlob
        duration={8}
        delay={0}
        className="-left-24 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/30 to-transparent blur-[100px]"
      />
      <AnimatedBlob
        duration={10}
        delay={2}
        className="right-0 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/30 to-transparent blur-[110px]"
      />
      <AnimatedBlob
        duration={9}
        delay={1}
        className="bottom-0 left-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/30 to-transparent blur-[90px]"
      />
    </div>
  );
}
