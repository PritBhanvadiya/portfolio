import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import PageTransition from '@/components/PageTransition'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prit Bhanvadiya Portfolio",
  description: "Portfolio website of Prit Bhanvadiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${inter.className} antialiased`}
      >
      
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
