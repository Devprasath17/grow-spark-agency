import { motion } from "motion/react";
import { Counter } from "@/components/Counter";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/animations/ScrollReveal";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

interface AnimatedStatsGridProps {
  stats: AnimatedStatProps[];
}

export function AnimatedStatsGrid({ stats }: AnimatedStatsGridProps) {
  return (
    <ScrollRevealContainer className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <ScrollRevealItem key={stat.label}>
          <motion.div
            className="group relative overflow-hidden rounded-2xl glass p-8 text-center"
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background gradient on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/10 to-transparent"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              <motion.div
                className="mb-4 flex justify-center text-4xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {stat.icon}
              </motion.div>

              <motion.div className="text-4xl font-bold text-primary sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </motion.div>

              <p className="mt-3 text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>

            {/* Animated border on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/50 via-transparent to-primary/50 opacity-0 pointer-events-none"
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </ScrollRevealItem>
      ))}
    </ScrollRevealContainer>
  );
}
