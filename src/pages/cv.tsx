import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Image from "next/image";
import React from "react";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <embed
          id="pdf-embed"
          type="application/pdf"
          width="100%"
          height="800px"
          src="/cv.pdf"
        />
      </div>
      <Footer />
    </main>
  );
}
