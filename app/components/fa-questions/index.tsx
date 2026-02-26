import { faqs } from "@/app/constants";
import FaqAccordion from "../fa-accordin";

export default function FaQuestions() {
  return (
    <section className="text-white py-24 px-4 sm:px-6 md:px-12 text-center">
      <div className="flex items-center justify-center gap-6">
        {/* Left Line */}
        <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

        <h2 className=" text-center text-[42px] mb-10 mt-6 text-white">
          Frequently Asked Questions
        </h2>

        {/* Right Line */}
        <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
