import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "@/components/FloatingShapes";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { AnimatedStatsGrid } from "@/components/sections/AnimatedStatsGrid";
import {
  STATS,
  WHY_CHOOSE,
  SERVICES,
  HOME_TESTIMONIALS,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowthSpark Digital Agency — Grow Your Business Online" },
      {
        name: "description",
        content:
          "Grow your business with modern digital solutions. Web development, SEO, social media marketing & branding by GrowthSpark Digital Agency.",
      },
      { property: "og:title", content: "GrowthSpark Digital Agency" },
      {
        property: "og:description",
        content:
          "Grow your business with modern digital solutions — web development, SEO, marketing & branding.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ClientLogosSection />
      <WhyChoose />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      <FloatingShapes />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Digital Solutions That Convert
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl"
          >
            Grow Your Business With{" "}
            <span className="gradient-text">Modern Digital Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            We help businesses increase their online presence through web
            development, digital marketing, branding, and SEO services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
              <Link to="/services">View Services</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-glow">
            <img
              src={heroImage}
              alt="Abstract gradient artwork representing modern digital solutions"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl glass-strong px-4 py-3 shadow-soft"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand">
              <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold">100+ Projects</p>
              <p className="text-xs text-muted-foreground">Delivered with care</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const statsWithIcons = [
    { value: 100, suffix: "+", label: "Projects Completed", icon: "🚀" },
    { value: 50, suffix: "+", label: "Happy Clients", icon: "😊" },
    { value: 5, suffix: "+", label: "Years Experience", icon: "⭐" },
    { value: 24, suffix: "/7", label: "Support", icon: "🎧" },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <AnimatedStatsGrid stats={statsWithIcons} />
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Built to help your business win"
        description="We combine creativity, technology, and strategy to deliver measurable results for your business."
      />
      <Stagger className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE.map((item) => (
          <StaggerItem key={item.title}>
            <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Services"
        title="Everything you need to grow online"
        description="From stunning websites to powerful marketing — we offer end-to-end digital services."
      />
      <Stagger className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <StaggerItem key={service.title}>
            <div className="card-hover group h-full rounded-2xl border border-border bg-card p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-10 text-center">
        <Button asChild variant="glass" size="lg">
          <Link to="/services">
            Explore All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by businesses like yours"
        description="Don't just take our word for it — here's what our clients have to say."
      />
      <Stagger className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
        {HOME_TESTIMONIALS.map((t) => (
          <StaggerItem key={t.name}>
            <figure className="card-hover flex h-full flex-col rounded-2xl glass p-7">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-sm font-semibold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-10 text-center">
        <Button asChild variant="glass" size="lg">
          <Link to="/testimonials">
            Read More Stories <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
