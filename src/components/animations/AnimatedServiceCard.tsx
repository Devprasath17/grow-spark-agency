import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  className?: string;
  delay?: number;
}

export function AnimatedServiceCard({
  title,
  description,
  icon,
  href = "#",
  className = "",
  delay = 0,
}: AnimatedServiceCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:shadow-xl ${className}`}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/5 to-transparent"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <motion.div
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground"
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <motion.div
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          Learn more →
        </motion.div>
      </div>

      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/50 via-transparent to-primary/50 opacity-0"
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}

interface AnimatedServiceCardGridProps {
  services: Array<{
    title: string;
    description: string;
    icon: ReactNode;
    href?: string;
  }>;
  columns?: 1 | 2 | 3 | 4;
}

export function AnimatedServiceCardGrid({
  services,
  columns = 3,
}: AnimatedServiceCardGridProps) {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 ${gridColsClass[columns]}`}>
      {services.map((service, index) => (
        <AnimatedServiceCard
          key={service.title}
          {...service}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
