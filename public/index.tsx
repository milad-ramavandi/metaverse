import Script from "next/script";
import AnimatedTestimoialsWrapper from "../animated-testimoials-wrapper";

const securityCases = [
  {
    title: "Brave Browser",
    description:
      "Brave offers built-in crypto wallets, phishing protection, and automatic tracker blocking. Its open-source code and integrated Web3 features make it a top choice for privacy and security in the decentralized web.",
    imageUrl: "/brave-browser.jpg",
    imageAlt:
      "Brave browser with Web3 security and ad blocker on dark background",
  },
  {
    title: "MetaMask Extension",
    description:
      "MetaMask is a popular Web3 wallet extension that enables secure smart contract interactions. While powerful, it relies on the security of the host browser, making phishing awareness critical for users.",
    imageUrl: "/metamask.jpg",
    imageAlt:
      "MetaMask crypto wallet extension with Ethereum integration and security lock",
  },
  {
    title: "Opera Crypto Browser",
    description:
      "Opera Crypto offers native Web3 support, built-in wallet, phishing protection, and a secure clipboard for transactions. Its user-friendly design and crypto-focused features enhance overall safety.",
    imageUrl: "/opera-crypto-browser.jpg",
    imageAlt:
      "Opera Crypto browser showing secure transaction features and blockchain icons",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: securityCases.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Review",
      author: item.title,
      reviewBody: item.description,
    },
  })),
};

const SecurityComparison = () => {
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
                Web3 Browser Security Comparison
              </h2>

              {/* Right Line */}
              <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
            </div>
          </div>
          <p className="text-lg text-gray-400 mb-12 text-center">
            In the world of Web3, browser security plays a critical role in
            protecting digital assets, wallet credentials, and user privacy.
            Unlike traditional browsers, Web3 browsers interact directly with
            decentralized applications (dApps) and smart contracts—making them
            prime targets for phishing attacks, malicious scripts, and fake
            wallet pop-ups. Choosing a secure Web3 browser is no longer
            optional; it’s a necessity for anyone navigating the decentralized
            internet. This section explores why robust security mechanisms—such
            as permission control, phishing detection, and secure key
            management—are essential to safeguard your blockchain experience.
          </p>
          <AnimatedTestimoialsWrapper testimonials={securityCases}/>
        </div>
      </section>
    </>
  );
};

export default SecurityComparison;
