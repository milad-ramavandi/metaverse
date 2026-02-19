import {
  AlertTriangle,
  Code2,
  KeyRound,
  Lock,
  Network,
  ShieldCheck,
  UserCheck,
  Wallet,
} from "lucide-react";
import Script from "next/script";
import Grid from "../grid";

const securityCases = [
  {
    title: "End-to-End Encryption for Data",
    icon: <Lock className="w-8 h-8 text-indigo-600" />,
    description:
      "All sensitive user data in modern DeFi interfaces is encrypted using end-to-end cryptography, ensuring that no third-party—whether centralized or decentralized—can intercept wallet credentials or session information.",
  },
  {
    title: "Private Key Ownership & Recovery",
    icon: <KeyRound className="w-8 h-8 text-indigo-600" />,
    description:
      "DeFi platforms emphasize user ownership of private keys through secure backup systems such as seed phrases, social recovery, or multi-signature authentication, making self-custody both safer and more manageable.",
  },
  {
    title: "Decentralized Infrastructure Resilience",
    icon: <Network className="w-8 h-8 text-indigo-600" />,
    description:
      "Unlike centralized services, DeFi ecosystems are resistant to single points of failure. Even if one node or service goes offline, users retain access to funds via the blockchain, ensuring uninterrupted financial sovereignty.",
  },
  {
    title: "KYC-Free & Anonymous Transactions",
    icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
    description:
      "Most DeFi platforms eliminate the need for Know Your Customer (KYC) processes, preserving user anonymity and reducing data leaks—while still maintaining transparency through on-chain analytics and public audit trails.",
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

const Security = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="py-20 text-white">
        <div className="w-full mx-auto px-4 text-center">
          {/* <div
            className="inline-flex bg-slate-600 p-[2px] rounded-full"
          >
            <div className="bg-[#00071C] rounded-full px-4 py-1">
              <p className="font-medium text-2xl text-[rgb(207,255,17)]">
                Security
              </p>
            </div>
          </div> */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-2">
            <div className="flex items-center justify-center gap-6">
              {/* Left Line */}
              <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

              <h2 className="text-3xl md:text-4xl font-bold my-6 text-white">
                Security in Defi
              </h2>

              {/* Right Line */}
              <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
            </div>
          </div>

          <p className="text-lg text-gray-400 mb-12 text-center">
            Security is a foundational pillar of the DeFi ecosystem. Unlike
            traditional finance, where centralized institutions control data and
            access, decentralized finance places users in full control of their
            assets—making robust security measures essential. From secure wallet
            integrations and phishing protection to smart contract auditing and
            end-to-end encryption, DeFi platforms must defend users against
            evolving threats. Understanding how DeFi protects user funds,
            private keys, and transaction data is critical for building trust in
            this permissionless financial infrastructure. Whether you're a
            seasoned trader or a newcomer, being aware of DeFi security
            practices empowers you to navigate the decentralized web safely and
            confidently.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {securityCases.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex gap-5 rounded-2xl p-6 bg-gradient-to-l from-neutral-800 to-neutral-900 transition-transform hover:-translate-y-1 duration-300 overflow-hidden"
                >
                  <Grid/>
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
    </>
  );
};

export default Security;
