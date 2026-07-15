import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PhotoAlbum from "./components/PhotoAlbum";
import Services from "./components/Services";
import AboutMapSection from "./components/AboutMapSection";
import Testimonial from "./components/Testimonial";
import CommercialPage from "./components/CommercialPage";
import ResidentialPage from "./components/ResidentialPage";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      
      // If we navigate to a new page, scroll to top. Otherwise, scroll to hash if present.
      if (window.location.pathname !== "/") {
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        const hash = window.location.hash;
        if (hash) {
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("pushstate", handleLocationChange);

    // Initial check on load
    if (window.location.pathname === "/" && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("pushstate", handleLocationChange);
    };
  }, []);

  return (
    <div className="relative font-merriweather overflow-x-hidden bg-base-100 text-base-content min-h-screen flex flex-col justify-between">
      <div className="flex-grow">
        <NavBar currentPath={currentPath} />
        
        {currentPath === "/" && (
          <>
            <Hero />
            <Services />
            <Testimonial />
            <AboutMapSection />
            <Contact />
            <PhotoAlbum />
          </>
        )}
        
        {currentPath === "/commercial" && <CommercialPage />}
        {currentPath === "/residential" && <ResidentialPage />}
      </div>
      <Footer currentPath={currentPath} />
    </div>
  );
}

export default App;
