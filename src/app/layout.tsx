import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Michal Kolasa",
  description: "My personal dev-polio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/7bcbbd58a8.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <body
        className={` antialiased bg-gray-950 text-gray-100 font-sans overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
