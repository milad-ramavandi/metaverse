import { Banknote, Repeat, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { HoverBorderGradient } from "../hover-border-gradient";

const useCases = [
  {
    icon: <Banknote className="w-8 h-8 text-indigo-500 mb-4" />,
    title: "Lending & Borrowing",
    description:
      "Traditional lending often requires credit checks, paperwork, and banks as intermediaries. DeFi lending platforms like Aave and Compound enable users to lend crypto assets and earn interest in a decentralized manner.",
    bg_color: "bg-indigo-500",
  },
  {
    icon: <Repeat className="w-8 h-8 text-emerald-500 mb-4" />,
    title: "Decentralized Exchanges (DEXs)",
    description:
      "DEXs like Uniswap, SushiSwap let users trade cryptocurrencies directly from their wallets without intermediaries. These platforms use automated market makers (AMMs) to provide liquidity and facilitate trades instantly.",
    bg_color: "bg-emerald-500",
  },
  {
    icon: <Shield className="w-8 h-8 text-rose-500 mb-4" />,
    title: "Stablecoins",
    description:
      "Stablecoins such as DAI, USDC, and Tether (USDT) are cryptocurrencies pegged to stable assets like the US Dollar. They serve as a vital bridge between volatile crypto markets and traditional finance.",
    bg_color: "bg-rose-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-cyan-500 mb-4" />,
    title: "Yield Farming & Staking",
    description:
      "Yield farming incentivizes users to provide liquidity or stake tokens by offering attractive rewards, often in the form of additional tokens or fees. Protocols like Yearn.finance and Curve Finance automate yield optimization strategies to maximize returns.",
    bg_color: "bg-cyan-500",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: useCases.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Review",
      author: item.title,
      reviewBody: item.description,
    },
  })),
};

const DefiUseCases = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="defi-use-cases" className="py-20 px-6">
        <div className="w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="text-center flex flex-col items-center justify-center order-1 lg:order-2">
              <HoverBorderGradient
                containerClassName="inline-flex border-0 p-0.5"
                className="bg-white/15 backdrop-blur-none flex items-center space-x-2"
              >
                <div className="w-3 h-3 rounded-full bg-[rgb(207,255,17)]"></div>
                <p className="font-medium text-2xl text-[rgb(207,255,17)]">
                  Features
                </p>
              </HoverBorderGradient>
              <h2 className="text-3xl md:text-4xl font-bold my-6 text-white">
                Real-World Use Cases of DeFi
              </h2>
              <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto">
                DeFi has rapidly evolved from an experimental concept to a
                robust financial ecosystem, providing millions with new ways to
                interact with money, assets, and investment opportunities. Below
                are some key use cases that illustrate DeFi’s transformative
                power:
              </p>
            </div>
            <div className="relative w-full aspect-[1/1] order-2 lg:order-1">
              <Image
                src="/defi-use-cases.png"
                fill
                alt="Illustration of decentralized finance (DeFi) use cases including lending, exchanges, stablecoins, and yield farming"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-12">
            {useCases?.map((item, index) => {
              return (
                <article key={index} className="text-center relative">
                  <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-50">
                    <div
                      className={`w-52 h-24 ${item?.bg_color} blur-3xl rounded-full`}
                    ></div>
                  </div>
                  <div className="flex justify-center">{item?.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 whitespace-nowrap">
                    {item?.title}
                  </h3>
                  <p className="text-gray-300">{item?.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DefiUseCases;
