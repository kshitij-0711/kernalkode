import type { Metadata } from "next";
import {
  Nunito,
  Cormorant_Garamond,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

// Primary Sans (Rounded, Clean Geometric)
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

// Primary Serif (Elegant, High-Contrast Luxe)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Accent Mono (Technical, Crisp Labels)
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://boringstudious.com'),
  title: {
    default: "BoringStudious - Premium Web Development",
    template: "%s | BoringStudious",
  },
  description: "A full-stack landing page with stunning design variants for premium web development services.",
  keywords: [
    "Web Development", 
    "Software Engineering", 
    "Full-Stack", 
    "React", 
    "Next.js", 
    "Premium Web Design", 
    "UI/UX"
  ],
  authors: [{ name: "BoringStudious Team" }],
  creator: "BoringStudious",
  publisher: "BoringStudious",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "BoringStudious - Premium Web Development",
    description: "A full-stack landing page with stunning design variants for premium web development services.",
    url: "https://boringstudious.com",
    siteName: "BoringStudious",
    images: [
      {
        url: "/og-image.jpg", // Optional: create this later or adjust path
        width: 1200,
        height: 630,
        alt: "BoringStudious OpenGraph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoringStudious - Premium Web Development",
    description: "A full-stack landing page with stunning design variants for premium web development services.",
    // site: "@boringstudious", // Optional: your twitter handle
    // creator: "@boringstudious", 
    images: ["/twitter-image.jpg"], // Optional: create this later or adjust path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://boringstudious.com',
    languages: {
      'en-US': 'https://boringstudious.com/en-US',
    },
  },
};

import Providers from './providers';

// ... (previous imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${cormorant.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased transition-colors duration-300">
        <Providers>
          <ThemeProvider>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
