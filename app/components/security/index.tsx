import { KeyRound, Lock, Network, UserCheck } from "lucide-react";
import Grid from "../grid";

const securityCases = [
  {
    title: "End-to-End Encryption for Virtual Data",
    icon: <Lock className="w-8 h-8 text-indigo-600" />,
    description:
      "All sensitive data within metaverse platforms—including identity credentials, communications, and asset interactions—is protected using end-to-end encryption, ensuring that only intended participants can access private information.",
  },
  {
    title: "User-Controlled Digital Identity",
    icon: <KeyRound className="w-8 h-8 text-indigo-600" />,
    description:
      "The metaverse empowers users with full ownership of their digital identities and access keys. Through self-sovereign identity models and secure recovery mechanisms, users maintain control without relying on centralized authorities.",
  },
  {
    title: "Decentralized & Resilient Infrastructure",
    icon: <Network className="w-8 h-8 text-indigo-600" />,
    description:
      "Metaverse ecosystems are built on decentralized networks that eliminate single points of failure. Even if individual services or nodes go offline, user identities, assets, and experiences remain accessible and secure.",
  },
  {
    title: "Privacy-Preserving Participation",
    icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
    description:
      "Modern metaverse platforms enable users to interact, transact, and socialize without exposing unnecessary personal data, reducing the risk of identity theft while maintaining trust through cryptographic verification.",
  },
];

const Security = () => {
  return (
    <section className="py-20 text-white">
      <div className="w-full mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-6">
          {/* Left Line */}
          <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

          <h2 className="text-3xl md:text-4xl font-bold my-6 text-white">
            Security in the Metaverse
          </h2>

          {/* Right Line */}
          <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
        </div>

        <p className="text-lg text-gray-400 mb-12 text-center max-w-5xl mx-auto">
          Security is a foundational pillar of the metaverse. As virtual worlds
          become more immersive and interconnected, protecting user identities,
          digital assets, and personal interactions is more critical than ever.
          Unlike traditional platforms that rely on centralized control, the
          metaverse adopts decentralized and privacy-first security models. From
          encrypted communications and secure digital identities to resilient
          infrastructure and fraud prevention, metaverse security ensures users
          can explore, create, and interact in virtual environments with
          confidence and trust.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {securityCases.map((item, index) => {
            return (
              <div
                key={index}
                className="relative flex gap-5 rounded-2xl p-6 bg-gradient-to-l from-neutral-800 to-neutral-900 transition-transform hover:-translate-y-1 duration-300 overflow-hidden"
              >
                <Grid />
                <div className="relative z-20">{item?.icon}</div>
                <div className="text-left relative z-20">
                  <h3 className="text-xl font-semibold">{item?.title}</h3>
                  <p className="text-gray-400">{item?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Security;
