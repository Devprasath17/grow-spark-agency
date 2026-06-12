import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export function CTASection({
  title = "Ready To Grow Your Business?",
  description = "Schedule a free consultation and discover how we can help your business succeed online.",
  buttonLabel = "Contact Us",
}: CTASectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-hero px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/30 blur-[80px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/contact">
                {buttonLabel} <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
