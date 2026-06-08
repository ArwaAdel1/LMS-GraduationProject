import type { LucideIcon } from "lucide-react";

type Tone = "accent" | "primary" | "success" | "onDark";
type Size = "sm" | "md" | "lg";

interface IconBadgeProps {
  icon: LucideIcon;
  tone?: Tone;
  size?: Size;
  className?: string;
}

const toneStyles: Record<Tone, string> = {
  accent: "bg-accent/15 text-accent",
  primary: "bg-primary/10 text-primary",
  success: "bg-success/15 text-success",
  onDark: "bg-text-on-primary/10 text-accent ring-1 ring-text-on-primary/10",
};

const sizeStyles: Record<Size, { box: string; icon: number }> = {
  sm: { box: "h-10 w-10 rounded-md", icon: 18 },
  md: { box: "h-12 w-12 rounded-lg", icon: 22 },
  lg: { box: "h-14 w-14 rounded-lg", icon: 26 },
};

export default function IconBadge({
  icon: Icon,
  tone = "accent",
  size = "md",
  className = "",
}: IconBadgeProps) {
  const s = sizeStyles[size];
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${s.box} ${toneStyles[tone]} ${className}`}
    >
      <Icon size={s.icon} strokeWidth={2} />
    </span>
  );
}
