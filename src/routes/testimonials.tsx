import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { CTASection } from "@/components/CTASection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SUCCESS_STORIES,
  HOME_TESTIMONIALS,
  ACHIEVEMENTS,
  CLIENT_LOGOS,
} from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials & Client Success Stories — GrowthSpark" },
      {
        name: "description",
        content:
          "Read client success stories and testimonials. See how GrowthSpark Digital Agency helped businesses grow traffic, leads, and revenue.",
      },
      { property: "og:title", content: "Client Success Stories — GrowthSpark" },
      {
        property: "og:description",
        content: "Real results and testimonials from businesses we've helped grow online.",
      },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const allReviews = [...HOME_TESTIMONIALS, ...SUCCESS_STORIES.map((s) => ({
  name: s.name,
  role: "Client",
  rating: s.rating,
  quote: s.quote,
}))];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Client <span className="gradient-text">Success Stories</span>
          </>
        }
        description="Real businesses, real results. Here's how we've helped our clients grow."
      />

      {/* Success stories with metrics */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <Stagger className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {SUCCESS_STORIES.map((story) => (
            <StaggerItem key={story.name}>
              <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <p className="text-4xl font-bold text-primary">{story.metric}</p>
                <p className="text-sm text-muted-foreground">{story.metricLabel}</p>
                <div className="mt-4 flex gap-1 text-amber-400">
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{story.quote}”
                </blockquote>
                <p className="mt-5 border-t border-border pt-4 text-sm font-semibold">
                  {story.name}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Carousel */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What Clients Say" title="Words from our clients" />
        <Reveal className="mx-auto mt-12 max-w-5xl">
          <Carousel opts={{ loop: true, align: "start" }} className="px-2">
            <CarouselContent>
              {allReviews.map((review, i) => (
                <CarouselItem key={i} className="md:basis-1/2">
                  <figure className="h-full rounded-2xl glass p-7">
                    <Quote className="h-8 w-8 text-primary/40" />
                    <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                      “{review.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-sm font-semibold text-primary-foreground">
                          {review.name.charAt(0)}
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{review.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 text-amber-400">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5" fill="currentColor" />
                        ))}
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </Reveal>
      </section>

      {/* Client logos marquee */}
      <section className="py-12">
        <Reveal className="mx-auto mb-8 max-w-2xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by growing businesses
          </p>
        </Reveal>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee-track flex w-max gap-4">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <span
                key={i}
                className="flex h-16 min-w-[180px] items-center justify-center rounded-xl glass px-8 font-display text-lg font-semibold text-muted-foreground"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <Stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {ACHIEVEMENTS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="card-hover rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-primary sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection />
    </>
  );
}
