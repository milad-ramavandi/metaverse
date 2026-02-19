import Script from "next/script";
import { Wallet, Coins, ShieldCheck, Layers } from "lucide-react";

const steps = [
  {
    icon: <Wallet className="w-8 h-8 text-cyan-400 mb-4" />,
    title: "Set Up a Crypto Wallet",
    description:
      "Install a Web3-compatible wallet like MetaMask or Trust Wallet. This wallet acts as your gateway to interacting with DeFi apps and storing your crypto assets securely.",

    bg_color: "bg-cyan-400",
  },
  {
    icon: <Coins className="w-8 h-8 text-yellow-300 mb-4" />,
    title: "Buy or Transfer Crypto",
    description:
      "Purchase Ethereum or other cryptocurrencies on an exchange, then transfer them to your wallet. You’ll use these tokens to pay for transactions and invest in DeFi protocols.",

    bg_color: "bg-yellow-300",
  },
  {
    icon: <Layers className="w-8 h-8 text-purple-500 mb-4" />,
    title: "Choose a DeFi Platform",
    description:
      "Explore platforms like Uniswap for swapping tokens, Aave for lending and borrowing, or Yearn Finance for yield optimization. Always check for audits and community trust.",

    bg_color: "bg-purple-500",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-pink-500 mb-4" />,
    title: "Stay Safe",
    description:
      "Use hardware wallets for large amounts, avoid clicking unknown links, and don’t share your seed phrase. DeFi offers freedom—but it comes with responsibility.",

    bg_color: "bg-pink-500",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Started with DeFi",
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    itemListElement: {
      "@type": "HowToDirection",
      text: step.description,
    },
  })),
};

const HowToGetStartedWithDeFi = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="how-to-get-start-with-defi" className="py-20 px-6">
        <div className="w-full mx-auto text-center">
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-2">
            <div className="flex items-center justify-center gap-6">
              {/* Left Line */}
              <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

              <h2 className="text-3xl md:text-4xl font-bold text-white my-6">
                How to Get Started with DeFi?
              </h2>

              {/* Right Line */}
              <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-12">
            Decentralized Finance (DeFi) is open to anyone with an internet
            connection, offering tools to lend, borrow, trade, and earn without
            middlemen. Here’s a beginner-friendly guide to start your DeFi
            journey securely and effectively.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-xl p-6 relative bg-white/10 border border-white/10 backdrop-blur-none"
              >
                <div
                  className={`absolute inset-0 w-full h-full flex justify-end items-center -z-50 text-8xl pr-6`}
                >
                  <div className="absolute top-4 right-6 text-[160px] text-white/10 font-bold z-0 pointer-events-none opacity-70">
                    {index + 1}
                  </div>
                  <div className={`w-52 h-24 ${step?.bg_color} blur-3xl`}></div>
                </div>
                <div className="relative z-50">
                  {step.icon}
                  <h3 className="text-xl font-semibold text-white mb-2 whitespace-nowrap">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToGetStartedWithDeFi;
