import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-badge
        px-[12px] py-[3px]
        text-caption font-semibold
        ${className}
      `}
    >
      {children}
    </span>
  );
}
