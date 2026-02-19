import {
  Banknote,
  BarChart3,
  Coins,
  Eye,
  Gavel,
  Globe,
  KeyRound,
  Link2,
  Settings,
  ShieldCheck,
  Unlock,
  Zap,
} from "lucide-react";
import Feature from "../feature";
import GradientText from "../gradient-text";

const Features = () => {
  const features = [
    {
      title: "Non-Custodial Control",
      description:
        "DeFi platforms are non-custodial, meaning users retain full control of their funds without relying on centralized institutions. This empowers individuals to manage assets directly via secure Web3 wallets like MetaMask.",
      icon: <KeyRound />,
    },
    {
      title: "Permissionless Access",
      description:
        "Anyone with an internet connection can access DeFi without the need for KYC or approval. This inclusivity democratizes financial services globally, especially in underbanked regions.",
      icon: <Unlock />,
    },
    {
      title: "Smart Contract Automation",
      description:
        "DeFi protocols are powered by smart contracts that automate transactions without intermediaries. These self-executing agreements reduce errors, lower costs, and ensure transparency in financial processes.",
      icon: <Settings />,
    },
    {
      title: "Global Liquidity Pools",
      description:
        "DeFi allows users worldwide to contribute to and access global liquidity pools. These decentralized reserves facilitate instant trading, lending, and borrowing across borders 24/7.",
      icon: <Globe />,
    },
    {
      title: "Interoperability",
      description:
        "Most DeFi platforms are designed to work seamlessly across multiple blockchain networks and dApps. This interoperability enables users to compose financial strategies using various protocols together (a.k.a. “Money Legos”).",
      icon: <Link2 />,
    },
    {
      title: "Transparent Transactions",
      description:
        "All DeFi transactions are recorded on public blockchains like Ethereum, ensuring full transparency. Anyone can verify contract logic, token flows, and platform integrity through block explorers.",
      icon: <Eye />,
    },
    {
      title: "Yield Farming Opportunities",
      description:
        "DeFi enables users to earn passive income through yield farming, where crypto assets are locked in protocols to generate returns. It’s a powerful tool for maximizing capital efficiency.",
      icon: <BarChart3 />,
    },
    {
      title: "Lending & Borrowing Without Banks",
      description:
        "With DeFi, users can lend and borrow crypto assets instantly without involving banks or credit checks. Interest rates are algorithmically set, and collateral is managed via smart contracts.",
      icon: <Banknote />,
    },
    {
      title: "Tokenization of Assets",
      description:
        "DeFi supports the tokenization of real-world assets such as real estate, commodities, or fiat currencies. This makes them divisible, tradable, and accessible globally via blockchain.",
      icon: <Coins />,
    },
    {
      title: "Governance by Community",
      description:
        "Many DeFi protocols are governed by token holders who vote on proposals and updates. This decentralized governance ensures that control and decision-making remain in the hands of the community.",
      icon: <Gavel />,
    },
    {
      title: "Instant Settlement",
      description:
        "Unlike traditional finance with settlement delays, DeFi enables instant transaction execution and finality. Users benefit from faster trades, reduced risk, and real-time liquidity.",
      icon: <Zap />,
    },
    {
      title: "Censorship Resistance",
      description:
        "DeFi platforms operate on decentralized infrastructure that resists censorship and shutdown. Users maintain sovereignty over their funds and access, regardless of geographic or political restrictions.",
      icon: <ShieldCheck />,
    },
  ];
  return (
    <section id="key-features-of-defi" className="py-20 px-6">
      <div className="w-full mx-auto text-center">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-2">
          <div className="flex items-center justify-center gap-6">
            {/* Left Line */}
            <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

            <h2 className="text-3xl md:text-4xl font-bold my-6 text-white">
              <GradientText
                colors={["#10b981", "#f43f5e", "#06b6d4", "#4079ff"]}
                animationSpeed={7}
                showBorder={false}
              >
                Key Features of Defi
              </GradientText>
            </h2>

            {/* Right Line */}
            <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
