import type { Metadata } from "next";
import { Patrick_Hand_SC } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand_SC({
  variable: "--font-patrick-hand-sc",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title:
    "Natasha Ann |  Software Engineer & Storyteller Bridging Tech and Society",
  description:
    "I’m a software engineer and storyteller who translates complex technology into clear, compelling narratives for the public, policymakers, and internal teams. With experience building first-of-its-kind apps, shaping technical strategy across organizations, and creating accessible content on TikTok, Instagram, and podcasts, I bridge the gap between engineering, society, and responsible AI. I combine systems thinking, research experience, and a passion for science communication to help people understand how emerging technologies work—and why they matter.",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title:
      "Natasha Ann |  Software Engineer & Storyteller Bridging Tech and Society",
    description:
      "I’m a software engineer and storyteller who translates complex technology into clear, compelling narratives for the public, policymakers, and internal teams. With experience building first-of-its-kind apps, shaping technical strategy across organizations, and creating accessible content on TikTok, Instagram, and podcasts, I bridge the gap between engineering, society, and responsible AI. I combine systems thinking, research experience, and a passion for science communication to help people understand how emerging technologies work—and why they matter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${patrickHand.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
