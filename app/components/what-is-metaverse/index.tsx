import Script from "next/script";
import AnimatedTestimoialsWrapper from "../animated-testimoials-wrapper";

const securityFeatures = [
  {
    title: "User Privacy",
    description:
      "Your personal data, identity, and virtual interactions are safeguarded using advanced end-to-end encryption and zero-knowledge proof technologies, ensuring that only you control what information is shared within the metaverse.",
    imageUrl: "/user-privacy.jpg",
    imageAlt: "Privacy",
  },
  {
    title: "Data Protection",
    description:
      "All user activities and assets are stored securely through decentralized and tamper-resistant storage systems, preventing unauthorized access, data leaks, and single points of failure.",
    imageUrl: "/data-protection.jpg",
    imageAlt: "Data Protection",
  },
  {
    title: "Digital Identity",
    description:
      "Create, own, and manage your digital identity independently without relying on centralized platforms, giving you full sovereignty over your virtual presence across metaverse environments.",
    imageUrl: "/digital-identity.jpg",
    imageAlt: "Digital Identity",
  },
  {
    title: "AI Threat Detection",
    description:
      "Our AI-powered security engine continuously analyzes behavior patterns in real time to detect fraud, impersonation attempts, and malicious activities before they can impact users or virtual economies.",
    imageUrl: "/ai-threat-detection.jpg",
    imageAlt: "AI Threat Detection",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: securityFeatures.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Review",
      author: item.title,
      reviewBody: item.description,
    },
  })),
};

const WhatIsMetaverse = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
            The metaverse is more than just a virtual space — it is a new
            digital universe where people interact, work, create, and own assets
            in immersive environments. As this ecosystem grows, concerns around
            digital identity, privacy, and data ownership become increasingly
            critical. Our approach places user security at the core of every
            virtual interaction by combining advanced encryption, decentralized
            identity frameworks, and AI-driven threat monitoring to create a
            safe, transparent, and trustless metaverse experience for everyone.
          </p>
          <AnimatedTestimoialsWrapper testimonials={securityFeatures} />
        </div>
      </section>
    </>
  );
};

export default WhatIsMetaverse;
