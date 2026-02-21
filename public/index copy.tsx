import Image from "next/image";
import Link from "next/link";

const securityFeatures = [
  {
    title: "User Privacy",
    description:
      "Your identity and actions are protected through end-to-end encryption and zero-knowledge proofs.",
    image: "/user-privacy.jpg",
    alt: "Privacy",
    bg_color: "bg-cyan-400",
    box_shadow: "shadow-[0_0_60px_30px_rgba(34,211,238,0.6)]",
  },
  {
    title: "Data Protection",
    description:
      "All interactions are securely stored using decentralized data storage technologies.",
    image: "/data-protection.jpg",
    alt: "Data Protection",
    bg_color: "bg-yellow-300",
    box_shadow: "shadow-[0_0_60px_30px_rgba(253,224,71,0.5)]",
  },
  {
    title: "Digital Identity",
    description:
      "Own and manage your digital persona without relying on centralized authorities.",
    image: "/digital-identity.jpg",
    alt: "Digital Identity",
    bg_color: "bg-purple-500",
    box_shadow: "shadow-[0_0_60px_30px_rgba(168,85,247,0.6)]",
  },
  {
    title: "AI Threat Detection",
    description:
      "Real-time detection of malicious behavior using AI and behavioral analytics.",
    image: "/ai-threat-detection.jpg",
    alt: "AI Threat Detection",
    bg_color: "bg-teal-400",
    box_shadow: "shadow-[0_0_60px_30px_rgba(0,240,255,0.5)]",
  },
];

export default function Security() {
  return (
    <section className="text-white py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-medium mb-6">
            Security in the Metaverse
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            As the metaverse expands, so do the concerns around digital
            identity, privacy, and data ownership. Our approach puts user
            security at the forefront of virtual experiences.
          </p>
          <p className="text-base text-gray-400">
            We integrate robust encryption, decentralized identity protocols,
            and real-time threat detection to ensure a safe and trustworthy
            environment for everyone.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {securityFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-xl bg-white/15 border border-white/10 backdrop-blur-3xl shadow-lg overflow-hidden"
            >
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-1 rounded-b-full ${feature?.bg_color} ${feature?.box_shadow}`} />

              <Image
                src={feature.image}
                alt={feature.alt}
                width={600}
                height={400}
                className="mb-4 rounded-xl w-full"
              />
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
