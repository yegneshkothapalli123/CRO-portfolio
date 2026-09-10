import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yegnesh Kothapalli | CRO & Conversion-Focused Landing Page Designer",
  description:
    "Yegnesh Kothapalli is a CRO and conversion-focused landing page designer helping SaaS, startups and digital businesses improve UX, messaging and conversions.",
  keywords: [
    "CRO",
    "Conversion Rate Optimization",
    "CRO Specialist",
    "Landing Page Designer",
    "Conversion-Focused Landing Pages",
    "Landing Page Optimization",
    "SaaS Landing Page Designer",
    "Startup Landing Page Designer",
    "UX Design",
    "A/B Testing",
    "Conversion Design",
    "Landing Page CRO",
    "UX Optimization",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
