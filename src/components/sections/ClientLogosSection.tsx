import { motion } from "motion/react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ClientLogoCarousel } from "@/components/animations/ClientLogoCarousel";

const SAMPLE_CLIENTS = [
  { name: "Google", icon: "🔵 Google" },
  { name: "Microsoft", icon: "📘 Microsoft" },
  { name: "Amazon", icon: "🟠 Amazon" },
  { name: "Shopify", icon: "🛍️ Shopify" },
  { name: "Adobe", icon: "🎨 Adobe" },
  { name: "Meta", icon: "📱 Meta" },
];

export function ClientLogosSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      <ScrollReveal className="mx-auto max-w-6xl text-center mb-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Trusted by Industry Leaders
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Partnering with top brands
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We've had the privilege of working with innovative companies that are
            transforming their industries through digital excellence.
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <ClientLogoCarousel logos={SAMPLE_CLIENTS} speed={18} />
      </motion.div>
    </section>
  );
}
