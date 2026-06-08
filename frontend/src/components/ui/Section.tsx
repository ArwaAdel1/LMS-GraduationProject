import type { ReactNode } from "react";

type SectionVariant = "light" | "surface" | "dark";

interface SectionProps {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

// Flat token backgrounds only — no gradients, no decorative orbs/texture.
// Sections are separated by their solid color band + whitespace.
const variantStyles: Record<SectionVariant, string> = {
  light: "bg-background text-text-primary",
  surface: "bg-surface text-text-primary",
  dark: "bg-primary text-text-on-primary",
};

export default function Section({
  id,
  variant = "light",
  className = "",
  containerClassName = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`${variantStyles[variant]} ${className}`}>
      <div
        className={`mx-auto w-full max-w-mobile px-md py-2xl sm:max-w-tablet md:max-w-desktop md:px-lg ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
