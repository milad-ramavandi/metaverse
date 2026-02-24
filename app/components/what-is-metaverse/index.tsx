import AnimatedTestimoialsWrapper from "../animated-testimoials-wrapper";
import { securityFeatures } from "@/app/constants";

const WhatIsMetaverse = () => {
  return (
    <section className="py-20 text-white">
      <div className="w-full mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-6">
          {/* Left Line */}
          <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

          <h2 className="text-3xl md:text-4xl font-bold my-6 text-white">
            What is the Metaverse?
          </h2>

          {/* Right Line */}
          <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
        </div>

        <p className="text-lg text-gray-400 mb-12 max-w-5xl mx-auto">
          The metaverse is more than just a virtual space — it is a new digital
          universe where people interact, work, create, and own assets in
          immersive environments. As this ecosystem grows, concerns around
          digital identity, privacy, and data ownership become increasingly
          critical. Our approach places user security at the core of every
          virtual interaction by combining advanced encryption, decentralized
          identity frameworks, and AI-driven threat monitoring to create a safe,
          transparent, and trustless metaverse experience for everyone.
        </p>
        <AnimatedTestimoialsWrapper testimonials={securityFeatures} />
      </div>
    </section>
  );
};

export default WhatIsMetaverse;
