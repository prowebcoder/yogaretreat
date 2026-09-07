import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/data/testimonials";

/** Guest quotes. The copy in lib/data/testimonials.ts is placeholder — replace before publishing. */
export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="page-width">
        <Reveal className="section-head">
          <div>
            <p className="kicker">In their words</p>
            <h2>What people take home.</h2>
          </div>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal as="figure" className="testimonial" key={item.name + index} delay={index * 90}>
              <p>{item.quote}</p>
              <figcaption>
                <strong>{item.name}</strong>
                <small>{item.origin} — {item.program}</small>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <p className="testimonial-note">Placeholder quotes. Replace them with real, attributable guest feedback before this page goes live.</p>
      </div>
    </section>
  );
}
