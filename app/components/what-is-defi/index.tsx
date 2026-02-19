const WhatIsDefi = () => {
  return (
    <section id="what-is-defi" className="py-20 px-6">
      <div className="w-full mx-auto text-center">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-2">
          <div className="flex items-center justify-center gap-6">
            {/* Left Line */}
            <div className="h-px flex-grow bg-gradient-to-r from-[#977AED]  to-transparent " />

            <h2 className="text-3xl md:text-4xl font-bold text-white my-6">
              What is DeFi?
            </h2>

            {/* Right Line */}
            <div className="h-px flex-grow bg-gradient-to-l from-[#11A2E5]  to-transparent " />
          </div>
        </div>

        <p className="text-lg text-gray-300 mb-12">
          DeFi, short for Decentralized Finance, refers to a new wave of
          financial applications that operate without centralized institutions
          like banks or brokers. Instead, DeFi platforms use smart
          contracts—self-executing programs built on blockchain networks—to
          facilitate peer-to-peer transactions, lending, borrowing, trading, and
          more.
        </p>
        <p className="text-lg text-gray-400 mb-4">
          Unlike traditional finance, DeFi is permissionless, meaning anyone
          with a crypto wallet and internet access can use it—no need for
          approval, KYC, or intermediaries. Transactions are governed by code,
          not people, creating systems that are transparent,
          censorship-resistant, and always accessible.
        </p>
        <p className="text-lg text-gray-400">
          The DeFi ecosystem includes decentralized exchanges (DEXs), lending
          protocols, stablecoins, synthetic assets, yield farming platforms, and
          insurance protocols—all working together to create an open and
          borderless financial network.
        </p>
      </div>
    </section>
  );
};

export default WhatIsDefi;
