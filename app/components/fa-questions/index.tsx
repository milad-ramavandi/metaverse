import Script from "next/script";
import FaqAccordion from "../fa-accordin";

const faqs = [
  {
    id: 1,
    question: "What is DeFi (Decentralized Finance)?",
    answer:
      "DeFi stands for Decentralized Finance, a blockchain-based financial system that allows users to access services like lending, borrowing, trading, and payments without the need for traditional banks or intermediaries.",
  },
  {
    id: 2,
    question: "How is DeFi different from traditional banking?",
    answer:
      "Unlike traditional banking, which relies on centralized institutions, DeFi operates in a decentralized manner using blockchain and smart contracts. Users have full control over their assets, ensuring transparency, security, and global access.",
  },
  {
    id: 3,
    question: "What role do smart contracts play in DeFi?",
    answer:
      "Smart contracts are self-executing codes deployed on blockchains like Ethereum. They automate financial transactions without intermediaries and are fundamental to how DeFi protocols function securely and efficiently.",
  },
  {
    id: 4,
    question: "Is DeFi safe to use?",
    answer:
      "DeFi platforms use advanced encryption and open-source smart contracts, offering strong security. However, risks like coding bugs, hacks, and fraudulent projects exist. Always use reputable platforms and secure wallets.",
  },
  {
    id: 5,
    question: "How can I invest in DeFi?",
    answer:
      "Not necessarily. Many Web3 browsers allow you to browse without a wallet, but to interact with dApps or sign blockchain transactions, a wallet is required. Most browsers offer built-in wallets or seamless integration with extensions and hardware wallets.",
  },
  {
    id: 6,
    question: "Which blockchains support DeFi?",
    answer:
      "While Ethereum is the most widely used blockchain for DeFi, other networks like BNB Chain (BSC), Polygon, Avalanche, and Solana also host DeFi applications with faster speeds and lower fees.",
  },
  {
    id: 7,
    question: "How is interest or yield calculated in DeFi?",
    answer:
      "Returns in DeFi are typically displayed as APY (Annual Percentage Yield) or APR (Annual Percentage Rate). Earnings come from activities such as staking, lending, or providing liquidity and are often automatically deposited into your wallet.",
  },
  {
    id: 8,
    question: "Is using DeFi free?",
    answer:
      "Many DeFi services are free to use, but you’ll usually need to pay gas fees for transactions—especially on networks like Ethereum. Alternative blockchains with lower fees are available for cost-efficient usage.",
  },
  {
    id: 9,
    question: "What is the best wallet for DeFi?",
    answer:
      "Popular DeFi-compatible wallets include MetaMask, Trust Wallet, and Coinbase Wallet. These wallets enable users to interact with decentralized apps (dApps) and manage their crypto assets directly.",
  },
  {
    id: 10,
    question: "Is DeFi the future of global finance?",
    answer:
      "DeFi is revolutionizing access to financial services and has the potential to become a key part of the future financial system. It offers financial inclusion, transparency, and reduced reliance on intermediaries.",
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
