export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float-slow absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-[100px]" />
      <div className="animate-float-slower absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent/25 blur-[110px]" />
      <div className="animate-float-slow absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/20 blur-[90px]" />
    </div>
  );
}
