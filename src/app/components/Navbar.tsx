import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 py-4 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center relative">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Michal
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="group">
              <span className="relative">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            <Link href="#about" className="group">
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>

            <Link href="#projects" className="group">
              <span className="relative">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            <Link href="#contact" className="group">
              <span className="relative">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </div>

          <button
            id="menu-btn"
            className="md:hidden p-2 rounded-lg hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                id="menu-icon"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              ></path>
            </svg>
          </button>

          <div
            id="mobile-menu"
            className="hidden md:hidden absolute top-full left-0 w-full bg-dark glass-effect"
          >
            <Link
              href="/"
              className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
            >
              About
            </Link>

            <Link
              href="#projects"
              className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
