import Badge from "@/components/ui/Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  onDark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-start";

  return (
    <div className={`flex max-w-tablet flex-col ${alignment}`}>
      {eyebrow && (
        <Badge
          className={`mb-sm ${
            onDark ? "bg-accent/15 text-accent" : "bg-accent/10 text-accent"
          }`}
        >
          {eyebrow}
        </Badge>
      )}
      <h2
        className={`text-h2 font-bold ${
          onDark ? "text-text-on-primary" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-md text-h3 font-regular ${
            onDark ? "text-text-on-primary/80" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
