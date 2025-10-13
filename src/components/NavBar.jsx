import React, { useState } from "react";
import "react-hook-theme/dist/styles/style.css";
import ThemeChooser from "./ThemeProvider";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "About", href: "#aboutus" },
  { name: "Contact Us", href: "#contactus" },
  { name: "Projects Album", href: "#projects" },
];
const NavBar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="sticky top-4 z-50 flex justify-center -mt-20">
      <div className="navbar rounded-full bg-base-100/90 py-0 shadow-2xl outline outline-base-content/5 backdrop-blur flex w-5/6">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu dropdown-content menu-md z-[1] mt-3 w-96 gap-2 rounded-box bg-base-100 p-2 shadow">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a key={item.name} href={item.href} className="font-garamond">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/"
            className="hidden md:flex btn btn-ghost rounded-full font-garamond text-lg font-semibold flex-row items-center"
          >
            <div className="w-12">
              <div className="rounded object-contain">
                <img src="/images/icons/veritas_logo.png" />
              </div>
            </div>
            veritas managed solutions, inc.
          </a>
        </div>
        <div className="navbar-center">
          <div className="w-12 md:hidden">
            <div className="rounded object-contain">
              <img src="/images/icons/veritas_logo.png" />
            </div>
          </div>
          <div className="ml-10 hidden lg:flex">
            {navigation.map((item, index) => (
              <nav key={index} className="menu menu-horizontal px-1">
                <a
                  key={item.name}
                  href={item.href}
                  className={`btn btn-ghost rounded-full font-garamond text-sm ${
                    active === item.name ? "bg-base-300" : ""
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </a>
              </nav>
            ))}
          </div>
        </div>

        <div className="navbar-end h-10 scale-75">
          <ThemeChooser />
        </div>
      </div>
    </div>
  );
};

export default NavBar;