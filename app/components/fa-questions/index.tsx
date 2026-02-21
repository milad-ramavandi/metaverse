import Script from "next/script";
import FaqAccordion from "../fa-accordin";

const faqs = [
  {
    id: 1,
    question: "What exactly is the Metaverse?",
    answer:
      "The Metaverse is a shared digital space where people can interact, shop, learn, and play as virtual avatars.",
  },
  {
    id: 2,
    question: "Will the Metaverse replace the current Internet?",
    answer:
      "Not necessarily. It’s more of an evolution or additional layer on top of the current internet that enhances human interaction.",
  },
  {
    id: 3,
    question: "How can I access the Metaverse?",
    answer:
      "You can enter Metaverse platforms using VR headsets, laptops, or even smartphones depending on the platform.",
  },
  {
    id: 4,
    question: "What are the risks of the Metaverse?",
    answer:
      "As with any new technology, challenges like privacy concerns, digital security, and screen-time addiction exist in the Metaverse.",
  },
  {
    id: 5,
    question: "Is the Metaverse only for gaming?",
    answer:
      "No. The Metaverse has broader applications including education, business, digital art, and even psychological therapy.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer.replace(/\n/g, "<br/>"),
    },
  })),
};

export default function FaQuestions() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="text-white py-24 px-4 sm:px-6 md:px-12 text-center">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-2">
          <div className="flex items-center justify-center gap-6">
            {/* Left Line */}
            <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

            <h2 className=" text-center text-[42px] mb-10 mt-6 text-white">
              Frequently Asked Questions
            </h2>

            {/* Right Line */}
            <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
