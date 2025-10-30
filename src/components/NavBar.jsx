import React, { useState } from "react";
import TabIcon from "../assets/logo/Tab-Icon.png?w=80&format=webp&as=url";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#aboutus" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contactus" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClick = (name) => setActive(name);

  return (
    <nav className="w-full">
      <div className="w-full bg-[#2f435b] text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1" />
          <a href="#home" className="flex items-center justify-center space-x-3">
            <img src={TabIcon} className="h-14 w-14 md:h-20 md:w-20" alt="Campbell Bay Electric Logo" />
            <span className="hidden md:inline-block text-3xl font-semibold font-merriweather tracking-wide">Campbell Bay Electric</span>
          </a>
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-base-400 mx-2 h-6 w-6 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>            <a href="tel:14088914470" className="font-merriweather text-sm">(408) 891-4470</a>
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <div className="w-full flex items-center justify-end md:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-center ${isOpen ? "flex" : "hidden"} w-full md:flex md:w-auto`} id="navbar-sticky">
            <ul className="flex flex-col items-center p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => handleClick(link.name)}
                  className={`block py-2 px-3 rounded-sm md:px-3 md:py-2 md:p-0 font-sans font-semibold tracking-wide uppercase text-base md:text-lg transition-colors ${
                      active === link.name
                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-gray-100 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-gray-800 dark:hover:text-white"
                    }`}
                    aria-current={active === link.name ? "page" : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;