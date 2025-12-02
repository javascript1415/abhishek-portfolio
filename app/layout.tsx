import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Acharya | Full-Stack Developer",
  description:
    "Full-stack developer crafting scalable web applications with Django, React, and AI — specializing in fintech, RAG systems, and data-driven solutions.",
  keywords: [
    "Full-Stack Developer",
    "Django Developer",
    "React Developer",
    "AI Engineer",
    "Fintech",
    "RAG systems",
    "Kathmandu",
    "Nepal",
  ],
  authors: [{ name: "Abhishek Acharya" }],
  openGraph: {
    title: "Abhishek Acharya | Full-Stack Developer",
    description:
      "Portfolio showcasing full-stack, fintech, and AI projects built with Django, React, and modern tooling.",
    url: "https://abhishekacharya.vercel.app",
    siteName: "Abhishek Acharya Portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://abhishekacharya.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
