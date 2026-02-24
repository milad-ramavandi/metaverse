import { Banknote, Repeat, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";
import { HoverBorderGradient } from "../hover-border-gradient";

const useCases = [
  {
    icon: <Banknote className="w-8 h-8 text-indigo-500 mb-4" />,
    title: "Virtual Economy & Digital Commerce",
    description:
      "The metaverse enables fully functional virtual economies where users can buy, sell, and trade digital goods such as avatars, virtual land, NFTs, and services using cryptocurrencies or tokens.",
    bg_color: "bg-indigo-500",
  },
  {
    icon: <Repeat className="w-8 h-8 text-emerald-500 mb-4" />,
    title: "Cross-World Asset Trading",
    description:
      "Users can exchange digital assets across different virtual worlds and platforms. Interoperable standards allow seamless transfer of items, identities, and value within the metaverse ecosystem.",
    bg_color: "bg-emerald-500",
  },
  {
    icon: <Shield className="w-8 h-8 text-rose-500 mb-4" />,
    title: "Digital Identity & Security",
    description:
      "The metaverse relies on decentralized identity systems to protect user privacy and ownership. Blockchain-based identities reduce fraud while giving users full control over their digital presence.",
    bg_color: "bg-rose-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-cyan-500 mb-4" />,
    title: "Creator Monetization & Virtual Income",
    description:
      "Creators can generate sustainable income by designing virtual experiences, assets, events, or environments. The metaverse removes intermediaries, allowing creators to earn directly from users.",
    bg_color: "bg-cyan-500",
  },
];

const UseCases = () => {
  return (
    <section className="py-20 px-6">
      <div className="w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20">
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
              Real-World Use Cases of Metaverse
            </h2>
            <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto">
              The metaverse is transforming how people interact, work, and
              create value in digital environments. From virtual economies to
              immersive social experiences, these use cases showcase how the
              metaverse is shaping the future of the internet.
            </p>
          </div>
          <div className="relative w-full aspect-square order-2 lg:order-1">
            <Image
              src="/use-cases-metaverse.png"
              fill
              alt="Illustration of metaverse use cases including Virtual Economy & Digital Commerce, Cross-World Asset Trading, Digital Identity & Security, Creator Monetization & Virtual Income."
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-24">
          {useCases?.map((item, index) => {
            return (
              <article key={index} className="text-center relative">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-50">
                  <div
                    className={`w-52 h-24 ${item?.bg_color} blur-3xl rounded-full`}
                  ></div>
                </div>
                <div className="flex justify-center">{item?.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 whitespace-nowrap">
                  {item?.title}
                </h3>
                <p className="text-gray-300 text-base">{item?.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
