import { Banknote, BarChart3, Users, Zap } from "lucide-react";
import Script from "next/script";
import { GlareCard } from "../glare-card";

const reasons = [
  {
    icon: <Users className="w-8 h-8 text-cyan-400 mb-4" />,
    title: "Financial Inclusion",
    description:
      "DeFi empowers individuals worldwide by providing open access to financial services without the need for traditional banks or credit history.",
    bg_color: "bg-cyan-400",
    shadow: "shadow-[0_0_60px_30px_rgba(34,211,238,0.6)]",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-yellow-300 mb-4" />,
    title: "Transparency & Trust",
    description:
      "Built on public blockchains, DeFi systems are open-source and auditable, ensuring accountability and reducing corruption or fraud.",
    bg_color: "bg-yellow-300",
    shadow: "shadow-[0_0_60px_30px_rgba(253,224,71,0.5)]",
  },
  {
    icon: <Banknote className="w-8 h-8 text-purple-500 mb-4" />,
    title: "Programmable Money",
    description:
      "Smart contracts automate financial interactions such as lending, borrowing, and trading—making finance faster, cheaper, and borderless.",
    bg_color: "bg-purple-500",
    shadow: "shadow-[0_0_60px_30px_rgba(168,85,247,0.6)]",
  },
  {
    icon: <Zap className="w-8 h-8 text-pink-500 mb-4" />,
    title: "Permissionless Innovation",
    description:
      "Anyone can build and access DeFi apps without approval—encouraging rapid innovation and decentralization of power.",
    bg_color: "bg-pink-500",
    shadow: "shadow-[0_0_60px_30px_#ec4899]",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: reasons.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Review",
      author: item.title,
      reviewBody: item.description,
    },
  })),
};

const WhyDefiMatter = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="why-defi-matters" className="py-20 px-6">
        <div className="w-full mx-auto text-center">
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-2">
            <div className="flex items-center justify-center gap-6">
              {/* Left Line */}
              <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

              <h2 className="text-3xl md:text-4xl font-bold text-white my-12">
                Why DeFi Is Reshaping the Future of Finance?
              </h2>

              {/* Right Line */}
              <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-8">
            Decentralized Finance (DeFi) is not just another crypto trend—it's a
            movement that redefines how people access and interact with money.
            By removing centralized intermediaries, DeFi makes financial systems
            more inclusive, transparent, and programmable. Whether it's earning
            passive income through staking, sending money across borders
            instantly, or accessing financial tools without a bank, DeFi
            democratizes financial power.
          </p>
          {/* <p className="text-lg text-gray-300 mb-8">
            These browsers serve as portals into the decentralized web, enabling
            users to interact with smart contracts, manage crypto assets, and
            navigate blockchain-based services without relying on third-party
            intermediaries. They support decentralized identity (DID), offer
            seamless wallet integrations, and often include built-in tools for
            accessing content on IPFS, ENS, and other emerging protocols.
          </p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {reasons?.map((item, index) => {
              return (
                <GlareCard
                  className="rounded-xl p-6 relative overflow-hidden"
                  key={index}
                >
                  <div className="relative z-50">
                    <>{item?.icon}</>
                    <h3 className="text-xl font-semibold text-white mb-2 whitespace-nowrap">
                      {item?.title}
                    </h3>
                    <p className="text-gray-300">{item?.description}</p>
                  </div>
                </GlareCard>
              );
            })}
          </div>
          <p className="text-lg text-gray-300 mt-8">
            In a decentralized world, DeFi is the backbone of financial
            freedom—enabling individuals to take control of their assets,
            participate in a global economy, and shape a more open financial
            system.In a decentralized world, DeFi is the backbone of financial
            freedom—enabling individuals to take control of their assets,
            participate in a global economy, and shape a more open financial
            system.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyDefiMatter;
