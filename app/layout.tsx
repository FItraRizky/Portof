import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import SmoothScroll from "../components/SmoothScroll";
import StaggeredMenu from "../components/StaggeredMenu";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitrarizky.com"),
  title: {
    default: "Fitra Rizky - Software Developer",
    template: "%s | Fitra Rizky",
  },
  description:
    "Portfolio of Fitra Rizky, an independent software developer from Indonesia specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Fitra Rizky",
    "Software Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Fitra Rizky", url: "https://fitrarizky.com" }],
  creator: "Fitra Rizky",
  publisher: "Fitra Rizky",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fitra Rizky - Software Developer",
    description:
      "Portfolio of Fitra Rizky, an independent software developer from Indonesia specializing in React, Next.js, and modern web technologies.",
    url: "https://fitrarizky.com",
    siteName: "Fitra Rizky Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Fitra Rizky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitra Rizky - Software Developer",
    description:
      "Portfolio of Fitra Rizky, an independent software developer from Indonesia.",
    images: ["/profile.jpg"],
    creator: "@fitrarizky", // Placeholder
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // User might need to add this
  },
  verification: {
    google: "google-site-verification-code", // Placeholder
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
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fitra Rizky",
              url: "https://fitrarizky.com",
              jobTitle: "Software Developer",
              sameAs: [
                "https://github.com/fitrarizky",
                "https://linkedin.com/in/fitrarizky",
                "https://twitter.com/fitrarizky",
              ],
            }),
          }}
        />
        <SmoothScroll />
        <StaggeredMenu />
        {children}
      </body>
    </html>
  );
}
