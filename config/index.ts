import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Shivansh Giri | Portfolio",
  description: "Welcome to the personal portfolio of Shivansh Giri, a Full Stack Developer & DSA enthusiast.",
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "space-portfolio",
    "portfolio",
    "react-icons",
    "cn",
    "clsx",
    "3d-portfolio",
    "3d-website",
    "sonner",
    "framer-motion",
    "motion",
    "animation",
    "heroicons",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  metadataBase: new URL("https://shivanshgiri.vercel.app"),
  authors: {
    name: "Shivansh Giri",
    url: "https://github.com/ShivanshGiri",
  },
  openGraph: {
    title: "Shivansh Giri | Portfolio",
    description: "Welcome to the personal portfolio of Shivansh Giri, a Full Stack Developer & DSA enthusiast.",
    url: "https://shivanshgiri.vercel.app",
    siteName: "Shivansh Giri Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Giri | Portfolio",
    description: "Welcome to the personal portfolio of Shivansh Giri, a Full Stack Developer & DSA enthusiast.",
    creator: "@shivanshgiri", // replace with actual twitter handle if known
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE", // The user can replace this with their actual tag
  },
  alternates: {
    canonical: "https://shivanshgiri.vercel.app",
  },
} as const;
