import Image from "next/image";
import { HoverBorderGradient } from "../hover-border-gradient";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute w-full h-full inset-0 z-0 overflow-hidden">
        <Image
          src={"/metaverse.jpg"}
          fill
          priority
          alt="Futuristic illustration of Web3 browser security featuring blockchain elements, padlock shield, and decentralized network"
          className="object-cover opacity-30"
        />
      </div>

      <div className="w-full max-w-3xl text-left space-y-6 relative z-50 my-20 px-6">
        <div className="text-left" aria-hidden="true">
          <HoverBorderGradient
            containerClassName="inline-flex border-0 p-0.5"
            className="bg-white/15 backdrop-blur-none flex items-center space-x-2"
          >
            <div className="w-3 h-3 rounded-full bg-[rgb(207,255,17)]"></div>
            <p className="font-medium text-2xl text-[rgb(207,255,17)]">
              Digital Identity
            </p>
          </HoverBorderGradient>
          <h1 className="text-xl lg:text-5xl text-white font-bold my-6 leading-tight min-h-[90px] sm:min-h-[140px] lg:min-h-[120px] xl:min-h-[60px] z-50">
            The Metaverse: A New Dimension of Digital Experience
          </h1>
          <p className="text-base font-extralight md:text-xl text-gray-300 mb-6">
            The Metaverse is a persistent, shared digital space where people can
            interact using avatars, experience immersive environments, and even
            own digital assets. It's not just a game or a VR chat—it's the
            evolution of the internet into a 3D, interactive world.Powered by
            blockchain, AR/VR, and AI technologies, the Metaverse redefines how
            we socialize, work, play, and transact in a borderless virtual
            universe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
