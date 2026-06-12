import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICES, PROCESS, PRICING, FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Development, SEO, Marketing & Branding" },
      {
        name: "description",
        content:
          "Explore GrowthSpark's services: website development, SEO optimization, social media marketing, and branding & design — with transparent pricing.",
      },
      { property: "og:title", content: "Our Services — GrowthSpark Digital Agency" },
      {
        property: "og:description",
        content: "Web development, SEO, social media marketing, and branding services.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Digital services that <span className="gradient-text">drive results</span>
          </>
        }
        description="End-to-end solutions to build, grow, and scale your business online."
      />

      {/* Service cards */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <Stagger className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Process */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="How we bring your project to life"
          description="A proven, transparent process from first conversation to launch and beyond."
        />
        <Stagger className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <StaggerItem key={step.step}>
              <div className="card-hover relative h-full overflow-hidden rounded-2xl glass p-6">
                <span className="absolute -right-2 -top-4 font-display text-6xl font-bold text-primary/15">
                  {step.step}
                </span>
                <h3 className="relative text-lg font-semibold">{step.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Pricing */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Choose a plan that fits your goals — or get a custom quote tailored to you."
        />
        <Stagger className="mx-auto mt-12 grid max-w-6xl items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  plan.popular
                    ? "border-primary/50 bg-gradient-hero shadow-glow"
                    : "card-hover border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
                <p className="mt-4 text-4xl font-bold">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-base font-normal text-muted-foreground"> / project</span>
                  )}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.popular ? "hero" : "glass"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl glass px-5"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      <CTASection
        title="Not sure which service you need?"
        description="Book a free consultation and we'll recommend the perfect solution for your business."
        buttonLabel="Get Free Consultation"
      />
    </>
  );
}
