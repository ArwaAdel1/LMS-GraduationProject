import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  q: string;
  a: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex w-full flex-col gap-md">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-card border border-primary/5 bg-surface shadow-card transition-shadow hover:shadow-elevated"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-md px-lg py-md text-start"
            >
              <span className="text-h3 font-semibold text-primary">
                {item.q}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-lg pb-md text-body text-text-secondary">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
