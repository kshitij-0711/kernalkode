import type { Metadata } from "next";
import {
  Roboto,
  Cormorant_Garamond,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

// Primary Sans (Neutral, Clean Grotesque)
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
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
  title: "WebCraft - Premium Web Development",
  description: "A full-stack landing page with stunning design variants.",
};

import Providers from './providers';

// ... (previous imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${roboto.variable} 
          ${cormorant.variable}
          ${spaceMono.variable}
          antialiased transition-colors duration-300
        `}
      >
        <Providers>
          <ThemeProvider>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
