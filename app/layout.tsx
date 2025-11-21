import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import SmoothScroll from "../components/SmoothScroll";
import Crosshair from "../components/Crosshair";
import StaggeredMenu from "../components/StaggeredMenu";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Fitra Rizky - Software Developer",
  description:
    "Portfolio of Fitra Rizky, an independent software developer from Indonesia.",
  keywords: [
    "Fitra Rizky",
    "Software Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Fitra Rizky" }],
  openGraph: {
    title: "Fitra Rizky - Software Developer",
    description:
      "Portfolio of Fitra Rizky, an independent software developer from Indonesia.",
    url: "https://fitrarizky.com",
    siteName: "Fitra Rizky Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitra Rizky - Software Developer",
    description:
      "Portfolio of Fitra Rizky, an independent software developer from Indonesia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <SmoothScroll />
        <Crosshair />
        <StaggeredMenu />
        {children}
      </body>
    </html>
  );
}
