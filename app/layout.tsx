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

export const metadata: Metadata = {
  title:
    "The Metaverse: A New Dimension of Digital Experience | lands.domains",
  description:
    "Discover the unique experience of the Metaverse: learn what it is, how it works, and what possibilities it unlocks for the future of humanity. Join the decentralized web revolution with lands.domains.",
  keywords:
    "Web3 domains, decentralized domains, NFT domains, blockchain identity, ENS, crypto names, lands domains, digital identity, blockchain domains, crypto domains, Metaverse, Virtual Reality, Immersive Technology, Digital World",
  openGraph: {
    title: "The Metaverse: A New Dimension of Digital Experience",
    description:
      "Discover the unique experience of the Metaverse: learn what it is, how it works, and what possibilities it unlocks for the future of humanity. Join the decentralized web revolution with lands.domains.",
    url: "https://lands.domains/metaverse",
    siteName: "lands.domains",
    images: [
      {
        url: "https://lands.domains/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Metaverse Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Metaverse: A New Dimension of Digital Experience",
    description:
      "Discover the unique experience of the Metaverse: learn what it is, how it works, and what possibilities it unlocks for the future of humanity. Join the decentralized web revolution with lands.domains.",
    images: ["https://lands.domains/preview-image.png"],
    site: "@landsdomains",
  },
  alternates: {
    canonical: "https://lands.domains/metaverse",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#00071C] scrollbar-hide`}
      >
        {children}
      </body>
    </html>
  );
}
