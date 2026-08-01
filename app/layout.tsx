import type { Metadata } from "next";
import { Outfit, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-Cell CUUP — We Build Founders",
  description:
    "The official Entrepreneurship Cell of Chandigarh University Uttar Pradesh. Join a community of future founders, innovators, and builders.",
  openGraph: {
    title: "E-Cell CUUP — We Build Founders",
    description:
      "The official Entrepreneurship Cell of Chandigarh University Uttar Pradesh.",
    type: "website",
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
      className={`${outfit.variable} ${interTight.variable}`}
    >
      <body className="noise">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
