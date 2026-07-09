import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { Analytics } from '@vercel/analytics/react';
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shivansh Giri',
    url: 'https://shivanshgiri.vercel.app',
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://github.com/ShivanshGiri',
      // Add other social links here
    ],
  };

  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
