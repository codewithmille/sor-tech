import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sortech — Professional Web Design & Development Agency",
  description:
    "Sortech builds high-converting, professional websites and custom web apps for growing businesses. Transparent milestone pricing and 14-day launch guarantee.",
  keywords: [
    "web design Philippines",
    "web development agency",
    "custom website developer",
    "Sortech digital agency",
    "freelance web developer",
    "e-commerce website",
    "landing page design",
    "business website developer",
  ],
  authors: [{ name: "Sortech" }],
  creator: "Sortech",
  publisher: "Sortech",
  openGraph: {
    title: "Sortech — Professional Web Design & Development Agency",
    description:
      "We design and build websites that generate leads, establish credibility, and help your business grow 24/7. Get a free quote or 5-min audit today.",
    url: "https://sortech.io",
    siteName: "Sortech",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sortech — Professional Web Design & Development Agency",
    description:
      "We design and build websites that generate leads and build credibility. 50% milestone payments & 14-day launch guarantee.",
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: "var(--bg-base)", color: "var(--text-white)" }}
      >
        {children}
      </body>
    </html>
  );
}
