
import Script from "next/script";
import Hero from "./components/hero";
import WhatIsDefi from "./components/what-is-defi";
import Features from "./components/features";
import DefiUseCases from "./components/defi-use-cases";
import WhyDefiMatter from "./components/why-defi-matter";
import Security from "./components/security";
import HowToGetStartedWithDeFi from "./components/how-get-start-defi";
import FaQuestions from "./components/fa-questions";
import Testimonials from "./components/testimonials";

const HomePage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Decentralized Finance (DeFi) | Learn About the Future of Finance",
    url: "https://lands.domains/defi",
    headline:
      "Decentralized Finance (DeFi) | Learn About the Future of Finance",
    description:
      "Explore what DeFi is, its key features, use cases, security, what is Defi matter?, and how to get started with Defi. Learn how decentralized finance is changing the global financial landscape.",
    image: "https://lands.domains/preview-image.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://lands.domains/defi",
    },
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
          name: "Defi",
          item: "https://lands.domains/defi",
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
      <main className="px-4 min-h-screen max-w-[1300px] mx-auto flex flex-col gap-16 md:gap-32">
        <Hero />
        <WhatIsDefi />
        <Features />
        <DefiUseCases />
        <WhyDefiMatter />
        <Security />
        <HowToGetStartedWithDeFi />
        <Testimonials/>
        <FaQuestions />
      </main>
    </>
  );
};

export default HomePage;
