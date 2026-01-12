type ButtonProps = {
  href: string;
  variant?: "primary" | "dark" | "light";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const external = href.startsWith("http");

  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-[var(--alpine-glacier)] text-slate-900 hover:opacity-90",
    light: "bg-white/70 text-slate-900 hover:bg-white",
    dark: "!bg-slate-900 !text-white hover:!bg-slate-950",

  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
