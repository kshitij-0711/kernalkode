import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Providers from "./providers";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boring Studios",
  description: "Premium Web Development Studio",
  openGraph: {
    title: "Boring Studios",
    description: "Premium Web Development Studio",
    siteName: "Boring Studios",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boring Studios",
    description: "Premium Web Development Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jetbrainsMono.variable}`}
      data-theme="dark"
    >
      <body className="antialiased transition-colors duration-300">
        <Providers>
          <ThemeProvider>
            <CustomCursor />
            <LenisProvider>
              {children}
            </LenisProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
