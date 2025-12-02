import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Acharya | Python & Full-Stack Developer",
  description: "Python developer specializing in Django, React, and AI-powered applications. Building scalable web solutions from backend to frontend.",
  keywords: "Python Developer, Django, React, Full-Stack, Nepal, Kathmandu, Web Development",
  authors: [{ name: "Abhishek Acharya" }],
  openGraph: {
    title: "Abhishek Acharya | Python & Full-Stack Developer",
    description: "Portfolio showcasing Python, Django, and Full-Stack projects",
    type: "website",
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
