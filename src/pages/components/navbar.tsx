import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="text-black dark:text-white font-bold">
      <div className="DESKTOPNAV space-x-8 hidden lg:flex">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-black dark:text-white hover:text-primary mb-4 md:mb-0"
            href="../"
          >
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="logo"
              className="rounded-full"
            />
            <span className="font-bold ml-3 text-xl">Michal</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="mr-5 text-xl text-black dark:text-white hover:text-primary"
              href="#about"
            >
              About
            </Link>
            <Link
              className="mr-5 text-xl text-black dark:text-white hover:text-primary"
              href="#projects"
            >
              Portfolio
            </Link>
            <Link
              className="mr-5 text-xl text-black dark:text-white hover:text-primary"
              href="#contact"
            >
              Contact
            </Link>
            <Link
              className="mr-5 text-xl text-black dark:text-white hover:text-primary"
              href="https://github.com/scraayp"
            >
              <FaGithub />
            </Link>
            <Link
              className="mr-5 text-xl text-black dark:text-white hover:text-primary"
              href="https://linkedin.com/michkolasa"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="mr-5 text-xl text-black dark:text-white hover:text-primary"
              href="https://discord.com/"
            >
              <FaDiscord />
            </Link>
            <Link
              className="mr-5 text-xl text-black dark:text-white hover:text-primary"
              href="https://twitter.com/scraayp"
            >
              <FaTwitter />
            </Link>
          </nav>
        </div>
      </div>
      <div id="mobilenav">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className={isNavOpen ? "hidden" : "w-full grid justify-end mr-4"}
          >
            <div
              className="HAMBURGER-ICON space-y-2 mt-8 ml-8 right-0 w-full"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-black dark:bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black dark:bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black dark:bg-white"></span>
            </div>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-black dark:text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-primary my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-primary my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-primary my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </header>
  );
}
