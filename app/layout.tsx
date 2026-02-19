import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
  title: "Decentralized Finance (DeFi) | Learn About the Future of Finance",
  description:
    "Explore what DeFi is, its key features, use cases, security, what is Defi matter?, and how to get started with Defi. Learn how decentralized finance is changing the global financial landscape.",
  keywords: [
    "DeFi",
    "DeFi meaning",
    "DeFi explained",
    "DeFi definition",
    "permissionless finance",
    "smart contracts",
    "peer-to-peer lending",
    "crypto lending platforms",
    "DeFi vs traditional finance",
    "DeFi use cases",
    "real-world DeFi applications",
    "DeFi lending",
    "staking in DeFi",
    "Decentralized lending",
    "Permissionless borrowing",
    "Smart contracts",
    "Stablecoins (DAI, USDC, USDT)",
    "Custodial risk",
    "KYC (Know Your Customer)",
    "Automated Market Makers (AMMs)",
    "Liquidity providers",
    "Passive income",
    "Liquidity pools",
    "Rug pull",
    "Use Cases of DeFi",
    "Proof of Stake (PoS)",
    "Algorithmic stablecoins",
    "Price stability",
    "Yield farming",
    "Algorithmic stablecoins",
    "Crypto asset borrowing",
    "Why DeFi Matters",
    "Importance of DeFi",
    "Future of finance",
    "permissionless financial innovation",
    "programmable money",
    "financial inclusion",
    "DeFi transparency",
    "DeFi security",
    "DeFi wallet security",
    "DeFi end-to-end encryption",
    "DeFi smart contract audit",
    "private key backup strategy",
    "anonymous crypto transactions without KYC",
    "DeFi future",
    "decentralized exchanges (DEXs)",
    "decentralized financial system",
    "What is DeFi",
    "Decentralized Finance explained",
    "Decentralized Finance",
    "Crypto",
    "Blockchain",
    "blockchain finance",
    "Web3",
    "crypto wallet setup",
    "buy crypto for defi",
    "best defi platforms",
    "defi security tips",
    "decentralized finance features",
    "what makes DeFi different",
    "DeFi financial services",
    "what makes DeFi different",
    "non-custodial asset control",
    "DeFi security protocols",
    "crypto lending and borrowing",
    "DeFi interest rates",
    "DeFi interoperability explained",
    "blockchain interoperability tools",
    "token economics in DeFi",
    "DeFi governance tokens",

  ],
  openGraph: {
    title: "Decentralized Finance (DeFi) | Learn About the Future of Finance",
    description:
      "Explore what DeFi is, its key features, use cases, security, what is Defi matter?, and how to get started with Defi. Learn how decentralized finance is changing the global financial landscape.",
    url: "https://lands.domains/defi",
    siteName: "lands.domains",
    images: [
      {
        url: "https://lands.domains/preview-image.png",
        width: 1200,
        height: 630,
        alt: ".lands Web3 Domain Benefits",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decentralized Finance (DeFi) | Learn About the Future of Finance",
    description:
      "Explore what DeFi is, its key features, use cases, security, what is Defi matter?, and how to get started with Defi. Learn how decentralized finance is changing the global financial landscape.",
    images: ["https://lands.domains/preview-image.png"],
    site: "@landsdomains",
  },
  alternates: {
    canonical: "https://lands.domains/defi",
  },
  robots: {
    index: true,
    follow: true,
  },
};
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#00071C] scrollbar-hide overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
