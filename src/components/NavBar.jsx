import React, { useState, useEffect } from "react";
import TabIcon from "../assets/logo/Tab-Icon.png?w=80&format=webp&as=url";
import { navigate } from "../utils/navigation";

const standardLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#aboutus" },
  { name: "Contact", href: "/#contactus" },
];

const NavBar = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const updateActive = () => {
      if (window.location.pathname === "/commercial") {
        setActive("Commercial");
      } else if (window.location.pathname === "/residential") {
        setActive("Residential");
      } else {
        const hash = window.location.hash;
        if (hash === "#aboutus") {
          setActive("About");
        } else if (hash === "#contactus") {
          setActive("Contact");
        } else {
          setActive("Home");
        }
      }
    };

    updateActive();
    
    // Listen for hash and path changes
    window.addEventListener("hashchange", updateActive);
    window.addEventListener("popstate", updateActive);
    window.addEventListener("pushstate", updateActive);

    return () => {
      window.removeEventListener("hashchange", updateActive);
      window.removeEventListener("popstate", updateActive);
      window.removeEventListener("pushstate", updateActive);
    };
  }, [currentPath]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleLinkClick = (e, href, name) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("/#")) {
      const targetHash = href.substring(1); // e.g. '#aboutus'
      if (window.location.pathname === "/") {
        // We are already on the home page, scroll smoothly
        window.history.pushState({}, "", href);
        const element = document.querySelector(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        window.dispatchEvent(new Event("hashchange"));
      } else {
        // Navigate to home page with hash
        navigate(href);
      }
    } else {
      // Navigate to a new sub-page
      navigate(href);
    }
  };

  return (
    <nav className="w-full relative z-50">
      {/* Top Bar: Brand Logo & Phone */}
      <div className="w-full bg-[#2f435b] text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1 hidden md:block" />
          <a 
            href="/#home" 
            onClick={(e) => handleLinkClick(e, "/#home", "Home")} 
            className="flex items-center justify-center space-x-3 flex-grow md:flex-grow-0"
          >
            <img src={TabIcon} className="h-14 w-14 md:h-20 md:w-20" alt="Campbell Bay Electric Logo" />
            <span className="text-2xl md:text-3xl font-semibold font-merriweather tracking-wide">Campbell Bay Electric</span>
          </a>
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-sky-400 mx-2 h-6 w-6 flex-shrink-0"
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
            </svg>
            <a href="tel:14088914470" className="font-merriweather text-sm hover:text-sky-300 transition-colors">(408) 891-4470</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Menu Options */}
      <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          {/* Mobile menu toggle and phone number */}
          <div className="w-full flex items-center justify-between md:hidden">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-sky-500 h-5 w-5 flex-shrink-0"
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
              </svg>
              <a href="tel:14088914470" className="font-merriweather text-xs text-gray-700 dark:text-gray-300">(408) 891-4470</a>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
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

          {/* Links list */}
          <div className={`items-center justify-center ${isOpen ? "flex" : "hidden"} w-full md:flex md:w-auto`} id="navbar-sticky">
            <ul className="flex flex-col w-full md:w-auto items-center p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-800 gap-4 md:gap-0">
              
              {/* Commercial Link (Left end) */}
              <li>
                <a
                  href="/commercial"
                  onClick={(e) => handleLinkClick(e, "/commercial", "Commercial")}
                  className={`block py-2 px-5 rounded-full border text-center font-sans font-bold tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 w-44 md:w-auto ${
                    active === "Commercial"
                      ? "bg-teal-600 text-white border-teal-600 shadow-md"
                      : "bg-teal-50/80 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800 hover:bg-teal-600 hover:text-white hover:border-teal-600"
                  }`}
                >
                  Commercial
                </a>
              </li>

              {/* Standard Page Links (Centered) */}
              {standardLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.name)}
                    className={`block py-2 px-3 rounded-md font-sans font-semibold tracking-wide uppercase text-base md:text-lg transition-colors ${
                      active === link.name
                        ? "text-blue-600 dark:text-blue-400 font-bold"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    aria-current={active === link.name ? "page" : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              {/* Residential Link (Right end) */}
              <li>
                <a
                  href="/residential"
                  onClick={(e) => handleLinkClick(e, "/residential", "Residential")}
                  className={`block py-2 px-5 rounded-full border text-center font-sans font-bold tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 w-44 md:w-auto ${
                    active === "Residential"
                      ? "bg-orange-600 text-white border-orange-600 shadow-md"
                      : "bg-orange-50/80 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800 hover:bg-orange-600 hover:text-white hover:border-orange-600"
                  }`}
                >
                  Residential
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;