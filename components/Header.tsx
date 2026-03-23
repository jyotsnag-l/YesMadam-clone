import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-black"
      }`}
    >
      <div className="flex items-center justify-between px-10 py-4">
        {/* Left - Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold cursor-pointer">
            <span className="text-blue-500">yes</span>
            <span className="text-pink-500">madam</span>
          </h1>
        </div>

        {/* Center - Navigation Links */}
        <div
          className={` flex justify-between w-[600px] font-medium ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <a href="#milestones" className="hover:text-pink-500 transition-colors">
            Milestones
          </a>
          <a href="#services" className="hover:text-pink-500 transition-colors">
            Services
          </a>
          <a href="#media-coverage" className="hover:text-pink-500 transition-colors">
            Media Coverage
          </a>
          <a href="#reviews" className="hover:text-pink-500 transition-colors">
            Reviews
          </a>
          <a href="#careers" className="hover:text-pink-500 transition-colors">
            Careers
          </a>
        </div>

        {/* Right - Button */}
        <div>
          <button
            className={`px-5 py-2 rounded-full font-medium transition ${
              scrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Get App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
