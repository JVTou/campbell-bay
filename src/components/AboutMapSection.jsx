import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import ClipboardJS from 'clipboard';
import tippy from 'tippy.js';
import MapData from './MapData';

const AboutMapSection = () => {
  const mapRef = useRef(null);
  const toolTipRef = useRef(null);
  const stateDropdownRef = useRef(null);

  useEffect(() => {
    loadMap();
    stateDropdown();
    emailTooltip();
  }, []);

  const emailTooltip = () => {
    const emailElement = document.getElementById("email");
    if (emailElement) {
      const clipboard = new ClipboardJS("#email");
      const copiedTippy = tippy("#email", {
        content: "Copied!",
        trigger: "",
      })[0];

      clipboard.on("success", function (e) {
        copiedTippy.show();
        setTimeout(copiedTippy.hide, 2000);
      });
    }
  };

  const loadMap = () => {
    const map = mapRef.current;
    const toolTip = toolTipRef.current;

    if (!map || !toolTip) return;

    // Add event listeners to map element
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      map.addEventListener("mousemove", mouseEntered, false);
      map.addEventListener("mouseout", mouseGone, false);
    }

    // Show tooltip on mousemove
    function mouseEntered(e) {
      const target = e.target;

      // Check if target has the county class and data attributes, or if it's inside a county group
      const countyElement = target.classList && target.classList.contains('county') 
        ? target 
        : target.closest('.county');
      
      if (countyElement) {
        
        target.style.filter = `brightness(50%)`;
        const county = countyElement.dataset.county || 'N/A';
        const projects = countyElement.dataset.projects || '0';
        const partners = countyElement.dataset.partners || '0';

        // Follow cursor
        toolTip.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;

        // Position tooltip in viewport
        if (window.innerWidth > e.offsetX + toolTip.offsetWidth + 50) {
          toolTip.style.left = `revert`;
        } else {
          toolTip.style.left = `${
            window.innerWidth - (e.offsetX + toolTip.offsetWidth + 50)
          }px`;
        }

        toolTip.innerHTML = `
          <ul class="font-sans list-none p-4 m-0">
              <li class="mb-3"><b>County: ${county}</b></li>
              <li class="mb-3">Projects: ${projects}+</li>
              <li class="mb-3">Partners: ${partners}+</li>
          </ul>`;
      }
    }

    // Clear tooltip on mouseout
    function mouseGone(e) {
      const target = e.target;
      const countyElement = target.classList && target.classList.contains('county') 
        ? target 
        : target.closest('.county');
      
      if (countyElement) {
        target.style.filter = `brightness(1)`;
        toolTip.innerHTML = "";
      }
    }
  };

  // Dropdown for mobile
  const stateDropdown = () => {
    const stateDropdown = stateDropdownRef.current;
    const map = mapRef.current;
    const toolTip = toolTipRef.current;

    if (!stateDropdown || !map || !toolTip) return;

    let previousState = stateDropdown.value;

    // Add event listeners to dropdown menu
    stateDropdown.addEventListener("change", () => {
      const selectedCounty = stateDropdown.value;
      const selectedState = map.querySelector(`[data-county="${selectedCounty}"]`);

      if (!selectedState) return;

      // Reset style of previous selection
      const prevState = map.querySelector(`[data-county="${previousState}"]`);
      if (prevState) {
        prevState.style.filter = `brightness(1)`;
      }

      //Reset tooltip position
      toolTip.style.left = "8px";
      toolTip.style.top = "-64px";

      // Choose the element with the dropdown selection's class and style it
      selectedState.style.filter = `brightness(50%)`;

      // Add data to toolTip with fallback values
      const county = selectedState.dataset.county || 'N/A';
      const region = selectedState.dataset.region || 'N/A';
      const state = selectedState.dataset.state || 'N/A';
      const projects = selectedState.dataset.projects || '0';
      const partners = selectedState.dataset.partners || '0';

      toolTip.innerHTML = `
          <ul class="font-sans list-none p-4 m-0">
              <li class="mb-3"><b>County: ${county}</b></li>
              <li class="mb-3">Projects: ${projects}+</li>
              <li class="mb-3">Partners: ${partners}+</li>
          </ul>`;

      // Move selected state's tooltip to the state's position in the viewport
      const selectedStateLocation = selectedState.getBoundingClientRect();

      if (window.innerWidth > toolTip.offsetWidth + selectedStateLocation.right) {
        toolTip.style.transform = `translate(${selectedStateLocation.right}px, ${selectedStateLocation.top}px)`;
      } else {
        toolTip.style.transform = `translate(${
          selectedStateLocation.left - toolTip.offsetWidth - 20
        }px, ${selectedStateLocation.y}px)`;
      }

      previousState = stateDropdown.value;
    });
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* About Section */}
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="flex flex-col items-center justify-center font-merriweather lg:col-span-1 col-span-1"
            id="aboutus"
          >
            <div className="flex flex-col items-center justify-center font-merriweather max-w-4xl">
              <h1 className="z-10 text-center font-merriweather text-xl font-semibold md:text-3xl mb-6">
                About Campbell Bay Electric
              </h1>
              <div className="text-center space-y-4">
                <p className="text-sm md:text-base leading-relaxed text-base-content/80">
                  With over 13 years of industry-leading electrical experience collectively, our team at CBE has helped countless home and business owners find safe, efficient, and durable electric solutions at a reasonable price.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-base-content/80">
                  We offer a full range of residential and commercial electrical services, including electrical panel upgrades, smart house features, whole house rewires, emergency power systems, transformers, phase converters, and commercial tenant improvements. Our licensed professionals handle everything from basic electrical repairs to complex integrated electrification systems.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-base-content/80">
                  As a certified installer of Span Smart Panels, we specialize in integrated electrification systems that help property owners create more energy-efficient spaces. Our team works with you to develop customized plans that maximize your property's energy potential through solar integration, EV charging, energy storage systems, and micro-grids.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-base-content/80">
                  Continuous training and review of the ever changing codes and related laws keeps our electricians up to date, and you are protected from costly mistakes. It is our mission to follow the industry-leading practices and present our customers with informed options for meeting the needs of their electrical projects. We provide you with prices and technicians you can trust, and we are very competitive in the markets we serve.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="hidden lg:flex flex-col h-full lg:col-span-2"
          >
            <div className="flex flex-col md:flex-row relative h-full z-10">
              <section className="content flex-[1_1_50%] order-1 md:flex-[1_1_80%] md:p-8 md:relative z-10">
                <div className="map-wrapper w-full h-fit m-auto z-10 relative">
                  {/* Title explaining hover functionality */}
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold text-base-content mb-2">Service Areas</h2>
                    <p className="text-base-content/70 text-sm">
                      Hover over counties to see projects and partners in each area
                    </p>
                  </div>

                  <div
                    id="toolTip"
                    ref={toolTipRef}
                    className="absolute transition ease-out duration-200 bg-base-300 rounded-md z-[999] pointer-events-none"
                    role="tooltip"
                    aria-live="polite"
                    aria-hidden="true"
                  ></div>
                  <svg
                    ref={mapRef}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ strokeLinejoin: "round", stroke: "#ecf0f1", fill: "none" }}
                    version="1.1"
                    viewBox="0 0 959 593"
                    id="map"
                    className="block z-10 mx-auto w-full h-[50vh] lg:h-[60vh]"
                    role="img"
                    aria-label="Interactive map of service areas"
                    tabIndex="0"
                  >
                    <MapData />
                  </svg>
                </div>
              </section>
              
              {/* Mobile version */}
              <div className="md:hidden flex flex-col p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Service Areas</h2>
                  <p className="text-sm text-base-content/70">
                    We provide electrical services across multiple regions. 
                    Use the dropdown below to explore our coverage areas and see projects and partners.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="state-select" className="block text-sm font-medium mb-2">
                      Select a county:
                    </label>
                    <select
                      id="state-select"
                      ref={stateDropdownRef}
                      className="w-full p-3 border border-base-300 rounded-lg bg-base-100 text-base-content"
                      defaultValue=""
                    >
                      <option value="">Choose a county...</option>
                      <option value="Alameda">Alameda</option>
                      <option value="Contra Costa">Contra Costa</option>
                      <option value="Marin">Marin</option>
                      <option value="Monterey">Monterey</option>
                      <option value="Napa">Napa</option>
                      <option value="San Francisco">San Francisco</option>
                      <option value="San Mateo">San Mateo</option>
                      <option value="Santa Clara">Santa Clara</option>
                      <option value="Santa Cruz">Santa Cruz</option>
                      <option value="Solano">Solano</option>
                      <option value="Sonoma">Sonoma</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMapSection;
