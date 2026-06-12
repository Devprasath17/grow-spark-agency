import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SITE, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — GrowthSpark Digital Agency" },
      {
        name: "description",
        content:
          "Get in touch with GrowthSpark Digital Agency in Chennai. Call, email, or send us a message to start growing your business online.",
      },
      { property: "og:title", content: "Contact GrowthSpark Digital Agency" },
      {
        property: "og:description",
        content: "Reach out for a free consultation — phone, email, or contact form.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(100, { message: "Name is too long" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number is too long" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Phone number contains invalid characters" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message is too long" }),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Address", value: SITE.address },
];

const businessHours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const serviceValue = watch("service");

  const onSubmit = async (data: ContactForm) => {
    // Simulate sending; replace with a real API/email integration when ready.
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form submitted");
    toast.success("Message sent!", {
      description: `Thanks ${data.name.split(" ")[0]}, we'll get back to you shortly.`,
    });
    reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build something <span className="gradient-text">great together</span>
          </>
        }
        description="Have a project in mind? Reach out and we'll get back to you within one business day."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <Reveal className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const content = (
                  <div className="card-hover flex items-center gap-4 rounded-2xl glass p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="truncate font-medium">{info.value}</p>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            {/* Business hours */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <ul className="space-y-3">
                {businessHours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-border pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="GrowthSpark location — Chennai"
                src="https://www.google.com/maps?q=Chennai,Tamil+Nadu,India&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[0.2]"
              />
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl glass-strong p-6 shadow-soft sm:p-8"
            >
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form and we'll be in touch soon.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" error={errors.name?.message}>
                  <Input placeholder="John Doe" {...register("name")} />
                </Field>
                <Field label="Email Address" error={errors.email?.message}>
                  <Input type="email" placeholder="you@example.com" {...register("email")} />
                </Field>
                <Field label="Phone Number" error={errors.phone?.message}>
                  <Input type="tel" placeholder="+91 84388 49180" {...register("phone")} />
                </Field>
                <Field label="Service Required" error={errors.service?.message}>
                  <Select
                    value={serviceValue}
                    onValueChange={(v) =>
                      setValue("service", v, { shouldValidate: true })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.title} value={s.title}>
                          {s.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" error={errors.message?.message}>
                  <Textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    {...register("message")}
                  />
                </Field>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={isSubmitting}
                className="mt-6 w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
