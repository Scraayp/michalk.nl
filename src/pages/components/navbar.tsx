import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className=" border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="./" className="flex items-center">
          <img
            src="./logo.png"
            className="h-8 mr-3 rounded-full"
            alt="Michal's logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Michal
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <Link
                href="./"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:text-primary text-black dark:text-white font-semibold"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 rounded  md:border-0 hover:text-primary md:p-0 dark:text-white  text-black font-semibold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 pl-3 pr-4 md:border-0 hover:text-primary md:p-0 dark:text-white text-black font-semibold"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 rounded  md:border-0 hover:text-primary md:p-0 dark:text-white  text-black font-semibold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
