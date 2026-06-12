import {
  Code2,
  Search,
  Megaphone,
  Palette,
  Users,
  BadgeDollarSign,
  Rocket,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "GrowthSpark Digital Agency",
  shortName: "GrowthSpark",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "hello@growthsparkagency.com",
  address: "Chennai, Tamil Nadu, India",
  whatsappMessage:
    "Hi! I'm interested in your services. Can we discuss my project?",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support" },
];

export const WHY_CHOOSE: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Users,
    title: "Professional Team",
    desc: "Experienced professionals delivering high-quality solutions.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "Cost-effective services tailored to your business needs.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "Projects completed on time without compromising quality.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Dedicated support whenever you need assistance.",
  },
];

export const SERVICES: {
  icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
}[] = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Custom websites designed to attract customers and increase conversions.",
    items: [
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "E-commerce Websites",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Improve search rankings and reach more potential customers.",
    items: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Performance Optimization",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Build brand awareness and engage your audience.",
    items: ["Facebook", "Instagram", "LinkedIn", "YouTube"],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    desc: "Professional logos, brand identity, and marketing materials.",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Assets",
      "Marketing Materials",
    ],
  },
];

export const HOME_TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    rating: 5,
    quote:
      "GrowthSpark transformed our online presence and helped us generate more leads.",
  },
  {
    name: "Priya Enterprises",
    role: "Retail Brand",
    rating: 5,
    quote:
      "Professional service, excellent communication, and timely delivery.",
  },
  {
    name: "Vijay Fitness Studio",
    role: "Fitness Center",
    rating: 5,
    quote: "Our website now attracts new customers every day.",
  },
];

export const SUCCESS_STORIES = [
  {
    name: "Raj Traders",
    rating: 5,
    quote: "Website traffic increased by 120% within three months.",
    metric: "+120%",
    metricLabel: "Traffic Growth",
  },
  {
    name: "Elite Fitness",
    rating: 5,
    quote: "Membership inquiries doubled after launching the new website.",
    metric: "2x",
    metricLabel: "More Inquiries",
  },
  {
    name: "Bright Academy",
    rating: 5,
    quote: "Generated more student enrollments through targeted campaigns.",
    metric: "+85%",
    metricLabel: "Enrollments",
  },
];

export const CORE_VALUES = [
  { title: "Innovation", desc: "We embrace new ideas and modern technology." },
  { title: "Transparency", desc: "Honest communication at every step." },
  { title: "Quality", desc: "Excellence in everything we deliver." },
  { title: "Customer Success", desc: "Your growth is our top priority." },
];

export const TEAM = [
  { name: "Aarav Mehta", role: "Founder & CEO", initials: "AM" },
  { name: "Sneha Kapoor", role: "Creative Director", initials: "SK" },
  { name: "Karan Verma", role: "Lead Developer", initials: "KV" },
  { name: "Divya Nair", role: "SEO Strategist", initials: "DN" },
];

export const TIMELINE = [
  { year: "2020", title: "The Beginning", desc: "GrowthSpark was founded with a vision to empower local businesses online." },
  { year: "2021", title: "First 25 Clients", desc: "Built a strong reputation for quality web development and design." },
  { year: "2023", title: "Service Expansion", desc: "Added SEO, social media marketing, and full branding services." },
  { year: "2025", title: "100+ Projects", desc: "Delivered 100+ successful projects for clients across India." },
];

export const PRICING = [
  {
    name: "Starter",
    price: "₹14,999",
    tagline: "Perfect for small businesses",
    features: [
      "5-Page Business Website",
      "Mobile Responsive Design",
      "Basic On-Page SEO",
      "Contact Form",
      "2 Weeks Delivery",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹34,999",
    tagline: "Best for growing brands",
    features: [
      "Up to 12 Pages",
      "Premium Custom Design",
      "Advanced SEO Setup",
      "Social Media Setup",
      "3 Months Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "Tailored digital strategy",
    features: [
      "E-commerce / Web App",
      "Full Branding Package",
      "Ongoing SEO & Marketing",
      "Dedicated Manager",
      "Priority 24/7 Support",
    ],
    popular: false,
  },
];

export const PROCESS = [
  { step: "01", title: "Discovery", desc: "We learn about your business, goals, and audience." },
  { step: "02", title: "Strategy", desc: "We craft a tailored plan and project roadmap." },
  { step: "03", title: "Design & Build", desc: "We design and develop your digital solution." },
  { step: "04", title: "Launch & Grow", desc: "We launch, optimize, and support your growth." },
];

export const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Most business websites are delivered within 2–4 weeks depending on scope and complexity. We always agree on a clear timeline before starting.",
  },
  {
    q: "Do you provide support after the project is completed?",
    a: "Yes. Every project includes a support period, and we offer ongoing maintenance and support plans to keep your website running smoothly.",
  },
  {
    q: "Will my website be mobile-friendly and SEO-ready?",
    a: "Absolutely. Every website we build is fully responsive, fast, and optimized with SEO best practices from day one.",
  },
  {
    q: "How much does a project cost?",
    a: "Pricing depends on your requirements. We offer transparent packages and custom quotes — book a free consultation and we'll recommend the best fit.",
  },
  {
    q: "Do you offer digital marketing services too?",
    a: "Yes. Alongside web development we provide SEO, social media marketing, and complete branding services to grow your business online.",
  },
];

export const ACHIEVEMENTS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Brands Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Industries Served" },
];

export const CLIENT_LOGOS = [
  "Raj Traders",
  "Elite Fitness",
  "Bright Academy",
  "Priya Enterprises",
  "Vijay Fitness",
  "NovaTech",
  "UrbanNest",
  "GreenLeaf",
];
