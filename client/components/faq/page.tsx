"use client";
import "./styles.scss";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "How often should I water my plants after delivery?",
    a: "Let them acclimatize first. Check soil moisture with your finger; water only when the top 2–3 cm feels dry. Most indoor plants need watering once a week.",
  },
  {
    q: "Do you provide pots and soil with the plants?",
    a: "Yes. Most listings include a nursery pot. Decorative planters and premium potting mixes (cocopeat + compost + perlite) can be added at checkout.",
  },
  {
    q: "What if my plant arrives damaged?",
    a: "No worries—share an unboxing photo within 24 hours and we’ll replace it or issue store credit as per our live plant guarantee.",
  },
  {
    q: "Do you ship outside my city?",
    a: "We currently deliver to major metros and Tier-1 cities. For other locations, we ship hardy plants via partner couriers with protective packaging.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="inner">
        <div className="intro">
          <h2 id="faq-heading" className="title">
            Frequently <span>asked</span> questions
          </h2>
          <p className="subtitle">
            Everything you need to know about our plants, delivery, and care.
          </p>
        </div>

        <ul className="list" role="list">
          {FAQS.map((item, i) => {
            const baseId = useId();
            const panelId = `${baseId}-panel`;
            const btnId = `${baseId}-button`;
            const isOpen = open === i;

            return (
              <li key={i} className={`item ${isOpen ? "is-open" : ""}`}>
                <h3 className="question">
                  <button
                    id={btnId}
                    className="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown className="icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="panel"
                  hidden={!isOpen}
                >
                  <p className="answer">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}