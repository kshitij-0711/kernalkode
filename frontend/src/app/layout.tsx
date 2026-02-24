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
  title: "KernalKode - Premium Web Development",
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
