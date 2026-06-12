import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface GlassmorphismNavbarProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassmorphismNavbar({
  children,
  className = "",
}: GlassmorphismNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${className}`}
      animate={{
        backgroundColor: scrolled
          ? "rgba(15, 23, 42, 0.7)"
          : "rgba(15, 23, 42, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
    >
      {/* Gradient border on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{
          opacity: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function NavLink({ href, children, isActive = false }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-transparent"
          layoutId="activeIndicator"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.a>
  );
}

interface NavMobileMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export function NavMobileMenu({ isOpen, children }: NavMobileMenuProps) {
  return (
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden md:hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2, delay: isOpen ? 0.1 : 0 }}
        className="flex flex-col gap-4 border-t border-border px-4 py-4"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
