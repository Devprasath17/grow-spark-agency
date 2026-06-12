import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-brand shadow-glow transition-transform group-hover:scale-105">
        <Zap className="h-5 w-5 text-primary-foreground" fill="currentColor" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        Growth<span className="gradient-text">Spark</span>
      </span>
    </Link>
  );
}
