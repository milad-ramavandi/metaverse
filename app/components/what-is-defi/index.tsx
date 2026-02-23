import Script from "next/script";
import AnimatedTestimoialsWrapper from "../animated-testimoials-wrapper";

const securityFeatures = [
  {
    title: "User Privacy",
    description:
      "Your identity and actions are protected through end-to-end encryption and zero-knowledge proofs.",
    imageUrl: "/user-privacy.jpg",
    imageAlt: "Privacy",
    
  },
  {
    title: "Data Protection",
    description:
      "All interactions are securely stored using decentralized data storage technologies.",
    imageUrl: "/data-protection.jpg",
    imageAlt: "Data Protection",
    
  },
  {
    title: "Digital Identity",
    description:
      "Own and manage your digital persona without relying on centralized authorities.",
    imageUrl: "/digital-identity.jpg",
    imageAlt: "Digital Identity",
    
  },
  {
    title: "AI Threat Detection",
    description:
      "Real-time detection of malicious behavior using AI and behavioral analytics.",
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

const WhatIsDefi = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="py-20 text-white">
        <div className="w-full mx-auto px-4 text-center">
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-2">
            <div className="flex items-center justify-center gap-6">
              {/* Left Line */}
              <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

              <h2 className="text-3xl md:text-4xl font-bold my-6 text-white">
                 What is the Metaverse?
              </h2>

              {/* Right Line */}
              <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
            </div>
          </div>
          <p className="text-lg text-gray-400 mb-12 text-center">
            As the metaverse expands, so do the concerns around digital
            identity, privacy, and data ownership. Our approach puts user
            security at the forefront of virtual experiences. We integrate
            robust encryption, decentralized identity protocols, and real-time
            threat detection to ensure a safe and trustworthy environment for
            everyone.
          </p>
          <AnimatedTestimoialsWrapper testimonials={securityFeatures} />
        </div>
      </section>
    </>
  );
};

export default WhatIsDefi;
