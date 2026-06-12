import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Target, Eye, Sparkles, ShieldCheck, Award, Heart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { CTASection } from "@/components/CTASection";
import { CORE_VALUES, TEAM, TIMELINE, ACHIEVEMENTS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — GrowthSpark Digital Agency" },
      {
        name: "description",
        content:
          "Learn about GrowthSpark Digital Agency — our story, mission, vision, core values, and the team helping businesses grow online.",
      },
      { property: "og:title", content: "About GrowthSpark Digital Agency" },
      {
        property: "og:description",
        content: "Our story, mission, vision and the team behind GrowthSpark.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const valueIcons = [Sparkles, ShieldCheck, Award, Heart];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            About <span className="gradient-text">GrowthSpark</span> Digital Agency
          </>
        }
        description="Creativity, technology, and strategy — combined to deliver measurable growth for your business."
      />

      {/* Story */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              From a bold idea to a trusted partner
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              GrowthSpark Digital Agency was founded with a mission to help
              businesses establish a strong online presence. We combine
              creativity, technology, and strategy to deliver measurable results.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.label} className="rounded-2xl glass p-6 text-center">
                  <p className="text-3xl font-bold text-primary">
                    <Counter value={a.value} suffix={a.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <Stagger className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To empower businesses with innovative digital solutions that drive growth.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To become a trusted partner for businesses seeking digital transformation.",
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-8">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Core Values */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title="The principles that guide us"
        />
        <Stagger className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <StaggerItem key={value.title}>
                <div className="card-hover h-full rounded-2xl glass p-6 text-center">
                  <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Timeline */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Journey" title="Milestones along the way" />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2" />
          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12 sm:text-left"
                }`}
              >
                <span
                  className={`absolute top-1.5 grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground shadow-glow left-0 sm:left-auto ${
                    i % 2 === 0 ? "sm:-right-4" : "sm:-left-4"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="card-hover rounded-2xl glass p-5">
                  <p className="text-sm font-bold text-primary">{item.year}</p>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind your growth"
          description="A passionate team of designers, developers, and strategists."
        />
        <Stagger className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-6 text-center">
                <span className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-gradient-brand text-xl font-bold text-primary-foreground shadow-glow">
                  {member.initials}
                </span>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-primary">{member.role}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection />
    </>
  );
}
