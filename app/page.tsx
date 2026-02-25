import Script from "next/script";
import Hero from "./components/hero";
import Features from "./components/features";
import Security from "./components/security";
import FaQuestions from "./components/fa-questions";
import Testimonials from "./components/testimonials";
import WhatIsMetaverse from "./components/what-is-metaverse";
import UseCases from "./components/use-cases";
import WhyMetaverseMatter from "./components/why-metaverse-matter";

const HomePage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Metaverse: A New Dimension of Digital Experience",
    url: "https://lands.domains/metaverse",
    description:
      "Discover the unique experience of the Metaverse: learn what it is, how it works, and what possibilities it unlocks for the future of humanity. Join the decentralized web revolution with lands.domains.",
    publisher: {
      "@type": "Organization",
      name: "lands.domains",
      url: "https://lands.domains",
      logo: {
        "@type": "ImageObject",
        url: "https://lands.domains/logo.svg",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://lands.domains",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Metaverse",
          item: "https://lands.domains/metaverse",
        },
      ],
    },
  };
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-32 overflow-x-hidden">
        <Hero />
        <WhatIsMetaverse />
        <Features />
        <UseCases />
        <WhyMetaverseMatter />
        <Security />
        <Testimonials/>
        <FaQuestions />
      </main>
    </>
  );
};

export default HomePage;
