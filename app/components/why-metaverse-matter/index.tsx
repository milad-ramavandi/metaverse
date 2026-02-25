import { Banknote, BarChart3, Users, Zap } from "lucide-react";
import { GlareCard } from "../glare-card";

const reasons = [
  {
    icon: <Users className="w-8 h-8 text-cyan-400 mb-4" />,
    title: "Digital Inclusion",
    description:
      "The metaverse creates inclusive digital spaces where anyone can participate, connect, and build value regardless of location, background, or physical limitations.",
    bg_color: "bg-cyan-400",
    shadow: "shadow-[0_0_60px_30px_rgba(34,211,238,0.6)]",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-yellow-300 mb-4" />,
    title: "Transparency & Ownership",
    description:
      "Built on decentralized technologies, the metaverse enables transparent ownership of digital assets, identities, and experiences—giving users verifiable control over what they create and own.",
    bg_color: "bg-yellow-300",
    shadow: "shadow-[0_0_60px_30px_rgba(253,224,71,0.5)]",
  },
  {
    icon: <Banknote className="w-8 h-8 text-purple-500 mb-4" />,
    title: "Virtual Economies",
    description:
      "The metaverse supports thriving virtual economies where digital goods, services, and experiences can be created, traded, and monetized seamlessly across platforms.",
    bg_color: "bg-purple-500",
    shadow: "shadow-[0_0_60px_30px_rgba(168,85,247,0.6)]",
  },
  {
    icon: <Zap className="w-8 h-8 text-pink-500 mb-4" />,
    title: "Limitless Innovation",
    description:
      "Open metaverse platforms allow developers and creators to experiment freely, build immersive experiences, and push the boundaries of digital interaction without centralized restrictions.",
    bg_color: "bg-pink-500",
    shadow: "shadow-[0_0_60px_30px_#ec4899]",
  },
];

const WhyMetaverseMatter = () => {
  return (
    <section className="py-20 px-6">
      <div className="w-full mx-auto text-center">
        <div className="flex items-center justify-center gap-6">
          {/* Left Line */}
          <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

          <h2 className="text-3xl md:text-4xl font-bold text-white my-12">
            Why the Metaverse Is Shaping the Future of the Internet
          </h2>

          {/* Right Line */}
          <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
        </div>

        <p className="text-lg text-gray-300 mb-8 max-w-5xl mx-auto">
          The metaverse is not just a technological trend—it represents a
          fundamental shift in how people interact, work, and create value in
          digital spaces. By merging virtual environments with decentralized
          ownership and immersive experiences, the metaverse empowers users to
          move beyond passive consumption and become active participants in a
          shared digital universe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left my-12">
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
        <p className="text-lg text-gray-300 mt-8 max-w-5xl mx-auto">
          In a connected digital world, the metaverse acts as the foundation for
          a new era of interaction—where users own their identities, creators
          control their work, and communities thrive without centralized
          gatekeepers. It is not just the next evolution of the internet, but a
          reimagining of how humans experience the digital realm.
        </p>
      </div>
    </section>
  );
};

export default WhyMetaverseMatter;
