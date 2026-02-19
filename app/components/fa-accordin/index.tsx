"use client";
import { useState } from "react";

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFaqClick = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="hs-accordion-group space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`hs-accordion overflow-hidden rounded-lg border border-white/10 bg-default-950/40 backdrop-blur-3xl hover:shadow-cyan-500/30 hover:shadow-md transition ${
            openFaq === faq.id ? " active" : ""
          }`}
          id={`faq-${faq.id}`}
        >
          <button
            className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-4 sm:px-6 py-4 text-left capitalize text-white transition-all"
            aria-controls={`faq-accordion-${faq.id}`}
            onClick={() => handleFaqClick(faq.id)}
          >
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--lucide me-3 h-5 w-5 stroke-white align-middle"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                  </g>
                </svg>
              </div>
              <p>{faq.question}</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className={`iconify iconify--lucide h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180 ${openFaq === faq.id ? "rotate-180" : ""}`}
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m18 15l-6-6l-6 6"
                ></path>
              </svg>
            </div>
          </button>
          <div
            id={`faq-accordion-${faq.id}`}
            className={`hs-accordion-content w-full overflow-hidden transition-all duration-500 ${
              openFaq === faq.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
            aria-labelledby={`faq-${faq.id}`}
          >
            <div className="px-6 pb-4 pt-0">
              <p className="mb-2 text-sm font-medium text-default-300">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
