import { motion } from "motion/react";
import { useState } from "react";

interface ClientLogoCarouselProps {
  logos: { name: string; icon: string }[];
  speed?: number;
}

export function ClientLogoCarousel({
  logos,
  speed = 18,
}: ClientLogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="w-full overflow-hidden bg-gradient-to-r from-background via-background/50 to-background py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex justify-center">
        <motion.div
          className="flex gap-12"
          animate={{ x: isPaused ? "0%" : ["0%", "-50%"] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center h-16 w-32 rounded-xl glass px-4 py-2 hover:shadow-lg transition-shadow"
            >
              <span className="text-sm font-semibold text-muted-foreground text-center">
                {logo.icon}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
