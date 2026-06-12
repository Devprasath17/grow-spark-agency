import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  rating: number;
}

interface AnimatedTestimonialsSliderProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export function AnimatedTestimonialsSlider({
  testimonials,
  autoplay = true,
  autoplayDelay = 5000,
}: AnimatedTestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full">
      <div className="relative h-80 overflow-hidden rounded-2xl glass p-8 md:p-12">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 flex flex-col justify-center p-8 md:p-12"
          >
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: testimonials[currentIndex].rating }).map(
                (_, i) => (
                  <Star key={i} className="h-5 w-5" fill="currentColor" />
                )
              )}
            </div>
            <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              {testimonials[currentIndex].role && (
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              )}
            </figcaption>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-border w-2 hover:bg-primary/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <motion.button
            onClick={() => paginate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg glass hover:bg-primary/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            onClick={() => paginate(1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg glass hover:bg-primary/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
