import { WavyBackground } from "../wavy-background";

const Hero = () => {
  return (
    <WavyBackground backgroundFill="#00071c">
      <section
        id="hero"
        className="pt-20 px-6 flex flex-col items-center justify-center w-full text-center"
      >
        <h1 className="text-5xl text-white font-bold my-6 leading-tight min-h-[240px] sm:min-h-[140px] lg:min-h-[120px] xl:min-h-[60px]">
          Decentralized Finance (DeFi): A New Era of Economic Empowerment
        </h1>
        {/* <div className="relative w-full max-w-[1300px] mx-auto aspect-[1/1] overflow-hidden">
        <Image
          src={"/hero5.png"}
          fill
          alt="Futuristic cyber-themed landscape illustrating decentralized Web3 browsers evolution and blockchain technology"
          priority
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
        />
      </div> */}

        <p className="text-lg font-extralight md:text-xl text-gray-300 my-6 max-h-64">
          DeFi, or decentralized finance, is an open alternative to the
          traditional financial system—one that removes intermediaries, enables
          global access, and leverages blockchain technology to create
          trustless, transparent, and programmable financial applications.
        </p>
        <p className="text-base font-extralight text-gray-300 max-h-64">
          Whether you're sending money, borrowing assets, earning yield, or
          trading tokens, DeFi platforms operate 24/7 without banks,
          governments, or central authorities. It's finance built by code,
          governed by communities, and open to everyone with an internet
          connection.
        </p>
      </section>
    </WavyBackground>
  );
};

export default Hero;
