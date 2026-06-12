# Framer Motion Animation Components - GrowthSpark Digital Agency

## Overview

This document outlines all the premium animation components available for the GrowthSpark website. These components are built with Framer Motion and provide a professional, modern, SaaS-quality animation experience.

## Installation

Dependencies are already installed:
```bash
npm install framer-motion react-countup
```

## Animation Components

### 1. **AnimatedBlob** (`src/components/animations/AnimatedBlob.tsx`)
Floating gradient blob animations with continuous motion.

**Features:**
- Customizable animation duration and delay
- Multiple color gradients (purple, blue, pink)
- Smooth easing with infinite loop

**Usage:**
```tsx
import { FloatingGradientBlobs } from "@/components/animations";

export function MyComponent() {
  return (
    <div className="relative">
      <FloatingGradientBlobs />
      {/* Your content */}
    </div>
  );
}
```

### 2. **ScrollReveal** (`src/components/animations/ScrollReveal.tsx`)
Components that animate in when they enter the viewport.

**Features:**
- Fade-up animation
- Customizable delay and duration
- Stagger animation for child items
- Trigger once on scroll

**Usage:**
```tsx
import { ScrollReveal, ScrollRevealContainer, ScrollRevealItem } from "@/components/animations";

export function MySection() {
  return (
    <ScrollRevealContainer>
      <ScrollRevealItem>
        <div>First item</div>
      </ScrollRevealItem>
      <ScrollRevealItem>
        <div>Second item</div>
      </ScrollRevealItem>
    </ScrollRevealContainer>
  );
}
```

### 3. **PageTransition** (`src/components/animations/PageTransition.tsx`)
Smooth fade transitions between pages.

**Features:**
- Fade in/out on page change
- Smooth entrance animations
- Works with AnimatePresence

**Usage:**
```tsx
import { PageTransition } from "@/components/animations";

export function Page() {
  return (
    <PageTransition>
      <div>Page content</div>
    </PageTransition>
  );
}
```

### 4. **MouseFollowingGradient** (`src/components/animations/MouseFollowingGradient.tsx`)
Interactive gradient that follows mouse movement.

**Features:**
- Smooth tracking of mouse position
- Glow effect with blur
- Low performance impact
- Fixed positioning

**Usage:**
```tsx
import { MouseFollowingGradient } from "@/components/animations";

export function App() {
  return (
    <>
      <MouseFollowingGradient />
      {/* Page content */}
    </>
  );
}
```

### 5. **ClientLogoCarousel** (`src/components/animations/ClientLogoCarousel.tsx`)
Infinite scrolling carousel for client logos.

**Features:**
- Continuous horizontal scroll
- Pause on hover
- Seamless loop
- Responsive design

**Usage:**
```tsx
import { ClientLogoCarousel } from "@/components/animations";

const clients = [
  { name: "Google", icon: "🔵 Google" },
  { name: "Microsoft", icon: "📘 Microsoft" },
];

export function ClientsSection() {
  return <ClientLogoCarousel logos={clients} speed={50} />;
}
```

### 6. **AnimatedTestimonialsSlider** (`src/components/animations/AnimatedTestimonialsSlider.tsx`)
Animated testimonial carousel with navigation.

**Features:**
- Smooth slide transitions
- Dot and arrow navigation
- Star rating display
- AnimatePresence for entrance/exit

**Usage:**
```tsx
import { AnimatedTestimonialsSlider } from "@/components/animations";

const testimonials = [
  {
    id: "1",
    name: "John Doe",
    quote: "Great service!",
    rating: 5,
    role: "CEO",
  },
];

export function Testimonials() {
  return <AnimatedTestimonialsSlider testimonials={testimonials} />;
}
```

### 7. **AnimatedServiceCard** (`src/components/animations/AnimatedServiceCard.tsx`)
Individual service card with hover effects.

**Features:**
- Scale and lift on hover
- Icon animation
- Gradient border effect
- Smooth transitions

**Usage:**
```tsx
import { AnimatedServiceCard, AnimatedServiceCardGrid } from "@/components/animations";

const services = [
  {
    title: "Web Development",
    description: "Custom websites",
    icon: <Code2 />,
  },
];

export function Services() {
  return <AnimatedServiceCardGrid services={services} columns={3} />;
}
```

### 8. **GlassmorphismNavbar** (`src/components/animations/GlassmorphismNavbar.tsx`)
Enhanced navbar with glassmorphism effect.

**Features:**
- Scroll-triggered background blur
- Gradient border on scroll
- Smooth transitions
- Mobile menu animation

**Usage:**
```tsx
import { GlassmorphismNavbar, NavLink, NavMobileMenu } from "@/components/animations";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <GlassmorphismNavbar>
      <div className="flex items-center justify-between">
        <NavLink href="/" isActive>Home</NavLink>
        <NavMobileMenu isOpen={mobileOpen}>
          <NavLink href="/services">Services</NavLink>
        </NavMobileMenu>
      </div>
    </GlassmorphismNavbar>
  );
}
```

### 9. **ThemeToggle** (`src/components/animations/ThemeToggle.tsx`)
Dark/light mode toggle with smooth transitions.

**Features:**
- Persist theme to localStorage
- System preference detection
- Smooth color transitions
- Icon animation

**Usage:**
```tsx
import { ThemeToggle, ThemeProvider } from "@/components/animations";

export function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        {/* Page content */}
      </div>
    </ThemeProvider>
  );
}
```

## Section Components

### 1. **ClientLogosSection** (`src/components/sections/ClientLogosSection.tsx`)
Complete section with client logos carousel.

**Features:**
- Scroll reveal animation
- Eyebrow text
- Section heading
- Responsive layout

**Usage:**
```tsx
import { ClientLogosSection } from "@/components/sections";

export function Home() {
  return (
    <>
      <Hero />
      <ClientLogosSection />
    </>
  );
}
```

### 2. **AnimatedStatsGrid** (`src/components/sections/AnimatedStatsGrid.tsx`)
Animated statistics cards with hover effects.

**Features:**
- Counter animation on scroll
- Hover lift effect
- Icon animation
- Responsive grid

**Usage:**
```tsx
import { AnimatedStatsGrid } from "@/components/sections";

const stats = [
  { value: 100, suffix: "+", label: "Projects", icon: "🚀" },
  { value: 50, suffix: "+", label: "Clients", icon: "😊" },
];

export function Stats() {
  return <AnimatedStatsGrid stats={stats} />;
}
```

### 3. **ParallaxSection** (`src/components/sections/ParallaxSection.tsx`)
Parallax scrolling effects.

**Features:**
- Scroll-based animation
- Background parallax
- Floating elements
- Customizable speed

**Usage:**
```tsx
import { ParallaxBackground, FloatingElement } from "@/components/sections";

export function HeroSection() {
  return (
    <ParallaxBackground image="/hero.jpg" speed={0.3}>
      <FloatingElement distance={30}>
        <div>Floating content</div>
      </FloatingElement>
    </ParallexBackground>
  );
}
```

## Existing Animations (Already Enhanced)

### FloatingShapes
Enhanced with Framer Motion for smooth floating animations.

```tsx
// Multiple blobs with different animation speeds and positions
import { FloatingShapes } from "@/components/FloatingShapes";
```

### Reveal Components
Original reveal animations still available with scroll-based triggering.

```tsx
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
```

### Counter
Number counter that animates on scroll.

```tsx
import { Counter } from "@/components/Counter";
```

## Best Practices

1. **Performance**
   - Use `will-change` for animated elements
   - Avoid animating too many elements simultaneously
   - Use `reduce-motion` preference for accessibility

2. **Accessibility**
   - Always provide skip animations option
   - Test with screen readers
   - Ensure sufficient contrast for animated elements

3. **Mobile Optimization**
   - Reduce animation duration on mobile
   - Disable heavy animations on low-end devices
   - Test on actual mobile devices

4. **Timing**
   - Use 0.6-0.8s for most animations
   - Stagger delays by 0.1-0.15s
   - Use easing: `[0.22, 1, 0.36, 1]` for smooth feel

5. **SEO & Performance**
   - Maintain Lighthouse score > 90
   - Use lazy loading for heavy sections
   - Optimize images used in animations

## Animation Presets

### Fade Up
```tsx
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
```

### Scale & Fade
```tsx
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

### Stagger
```tsx
transition={{ staggerChildren: 0.1 }}
```

## Testing Animations

Run the dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Check Lighthouse scores:
- Target score: > 90
- Monitor Core Web Vitals
- Test animation performance

## Troubleshooting

### Animations Not Triggering
- Check `whileInView` viewport settings
- Ensure element is in viewport range
- Verify `amount` property (0.2 for 20% visibility)

### Performance Issues
- Reduce number of simultaneous animations
- Use GPU-accelerated properties (transform, opacity)
- Disable animations on low-end devices

### Layout Shifts
- Avoid animating height/width
- Use `transform` instead
- Test on different screen sizes

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [React CountUp](https://github.com/glennreyes/react-countup)
- [Web Animation Performance](https://web.dev/animations-guide/)

## Version Info

- Framer Motion: Latest
- React: 19+
- TailwindCSS: 4+
- React Router: v7+
