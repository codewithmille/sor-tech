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
  title: "Sortech — Digital Agency | We Build Websites That Work",
  description:
    "Sortech is a startup digital agency helping businesses grow online. Custom web design, e-commerce, SEO, and web apps — fast delivery, real results.",
  keywords: [
    "web design",
    "web development",
    "digital agency",
    "Sortech",
    "freelance",
    "e-commerce",
    "SEO",
    "web app",
  ],
  openGraph: {
    title: "Sortech — Digital Agency | We Build Websites That Work",
    description:
      "Sortech helps businesses grow online with custom web design, development, and SEO. Get your free quote today.",
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
