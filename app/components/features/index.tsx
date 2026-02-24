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
import Feature from "./feature";

const features = [
  {
    title: "User-Owned Virtual Assets",
    description:
      "In the metaverse, users fully own their virtual assets such as avatars, land, and digital items through blockchain-based ownership. No centralized entity can seize or control what truly belongs to you.",
    icon: <KeyRound />,
  },
  {
    title: "Open & Borderless Access",
    description:
      "The metaverse is accessible to anyone, anywhere in the world. Users can enter virtual worlds, experiences, and economies without geographical limitations or traditional gatekeepers.",
    icon: <Unlock />,
  },
  {
    title: "Smart World Automation",
    description:
      "Smart contracts power automated interactions inside the metaverse, from virtual marketplaces to digital events. These systems enable trustless, transparent, and real-time execution of in-world actions.",
    icon: <Settings />,
  },
  {
    title: "Global Virtual Economy",
    description:
      "The metaverse connects users into a shared global economy where digital goods, services, and experiences can be traded seamlessly across platforms and regions.",
    icon: <Globe />,
  },
  {
    title: "Interconnected Virtual Worlds",
    description:
      "Metaverse platforms are designed to be interoperable, allowing users to move identities, assets, and experiences across multiple virtual worlds without friction.",
    icon: <Link2 />,
  },
  {
    title: "Transparent Digital Interactions",
    description:
      "All transactions and interactions within the metaverse are recorded on-chain, ensuring transparency, traceability, and trust across virtual environments.",
    icon: <Eye />,
  },
  {
    title: "Creator Monetization",
    description:
      "The metaverse empowers creators to earn directly from their work by selling virtual assets, experiences, and services without intermediaries taking control or excessive fees.",
    icon: <BarChart3 />,
  },
  {
    title: "Virtual Commerce Without Middlemen",
    description:
      "Users can buy, sell, and trade digital assets directly within the metaverse, eliminating traditional platforms and enabling peer-to-peer virtual commerce.",
    icon: <Banknote />,
  },
  {
    title: "Digital Asset Tokenization",
    description:
      "Virtual land, collectibles, and experiences are tokenized as digital assets, making them tradable, scarce, and verifiable across the metaverse ecosystem.",
    icon: <Coins />,
  },
  {
    title: "Community-Driven Governance",
    description:
      "Metaverse platforms often evolve through community governance, allowing users to vote on upgrades, rules, and future development of shared virtual spaces.",
    icon: <Gavel />,
  },
  {
    title: "Real-Time Experiences",
    description:
      "Unlike traditional platforms, the metaverse enables real-time interactions, instant ownership transfers, and live participation in immersive digital environments.",
    icon: <Zap />,
  },
  {
    title: "Decentralized & Censorship-Resistant",
    description:
      "Built on decentralized infrastructure, the metaverse resists censorship and shutdowns, ensuring freedom of expression and persistent access to virtual worlds.",
    icon: <ShieldCheck />,
  },
];

const Features = () => {
  return (
    <section id="key-features-of-defi" className="py-20 px-6">
      <div className="w-full mx-auto text-center">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-2">
          <div className="flex items-center justify-center gap-6">
            {/* Left Line */}
            <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

            <h2 className="text-3xl md:text-4xl font-bold my-6 text-white">
              Key Features of Metaverse
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
