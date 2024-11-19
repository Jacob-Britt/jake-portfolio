import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./CSS/globals.css";
import Header from "./Navigation";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jake Britton - Portfolio",
  description:
    "Welcome to Jake Britton's portfolio. Discover projects, skills, and experience in software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100`}
      >
        {/* Global Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
