import { Star, Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { landingContent } from "@/data/landing";

function avatarUrl(seed: string) {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
    seed,
  )}&backgroundColor=37306B&textColor=ffffff&fontSize=42`;
}

interface TestimonialItem {
  name: string;
  stage: string;
  quote: string;
  rating: number;
  seed: string;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-xs">
      {Array.from({ length: count }).map((_, s) => (
        <Star key={s} size={16} className="fill-warning text-warning" />
      ))}
    </div>
  );
}

function Person({ item }: { item: TestimonialItem }) {
  return (
    <div className="flex items-center gap-sm">
      <img
        src={avatarUrl(item.seed)}
        alt={item.name}
        className="h-11 w-11 rounded-full object-cover"
      />
      <div>
        <span className="block text-body font-bold text-primary">
          {item.name}
        </span>
        <span className="block text-small text-text-secondary">
          {item.stage}
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { lang } = useLanguage();
  const testimonials = landingContent[lang].testimonials;
  const [featured, ...rest] = testimonials.items as TestimonialItem[];

  return (
    <Section id="testimonials" variant="light">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />

      {/* Real, specific quotes — featured + supporting, no auto-rotating slider */}
      <div className="mt-2xl grid gap-lg md:grid-cols-2">
        {featured && (
          <article className="flex flex-col gap-md rounded-card bg-surface p-lg shadow-card md:col-span-2">
            <Stars count={featured.rating} />
            <p className="text-h3 font-semibold text-primary">
              {featured.quote}
            </p>
            <Person item={featured} />
          </article>
        )}

        {rest.map((item) => (
          <article
            key={item.seed}
            className="flex flex-col gap-md rounded-card bg-surface p-lg shadow-card"
          >
            <Stars count={item.rating} />
            <p className="flex-1 text-body text-primary">{item.quote}</p>
            <Person item={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
