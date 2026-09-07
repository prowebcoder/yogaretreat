import type { FaqItem } from "@/lib/data/faq";

/** Native <details> accordion — works without JavaScript and stays keyboard accessible. */
export function FaqAccordion({ items, openFirst = false }: { items: FaqItem[]; openFirst?: boolean }) {
  return (
    <div>
      {items.map((item, index) => (
        <details className="faq" key={item.question} open={openFirst && index === 0}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
