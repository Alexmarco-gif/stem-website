import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Stem-Cogent | Decision Intelligence for Fast-Moving Markets",
  description: "Stem helps fintech and financial-services teams detect meaningful market changes early and turn fragmented signals into defensible decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
