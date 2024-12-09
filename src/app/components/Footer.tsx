import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="https://github.com/scraayp"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i className="fab fa-github"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/michkolasa/"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link
              href="https://x.com/scraayp"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
          <p className="text-gray-400 text-center">
            © 2024 Michal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
