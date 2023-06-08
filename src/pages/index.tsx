import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="mainContent">
        <h1 className="text-4xl font-bold text-center mt-32 text-black dark:text-white">
          <span className="text-primary">Hey!</span> I am Michal,
        </h1>
        <h2 className="text-3xl font-bold text-center mt-10 text-black dark:text-white">
          I build the <span className="text-primary">backend</span> side of apps and websites.
        </h2>
      </div>
      <div id="about" className="m-auto w-head mt-32">
        <h1 className="text-left text-4xl font-bold text-primary">About</h1>
      </div>
    </main>
  );
}
