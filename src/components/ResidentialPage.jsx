import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

// Responsive image imports using vite-imagetools
import HeroAvif from "../assets/featured/4O1A1577.jpg?w=480;768;1200;1600&format=avif&as=srcset";
import HeroWebp from "../assets/featured/4O1A1577.jpg?w=480;768;1200;1600&format=webp&as=srcset";
import HeroJpg from "../assets/featured/4O1A1577.jpg?w=1200&format=jpg&as=url";

import PanelsAvif from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=480;768&format=avif&as=srcset";
import PanelsWebp from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=480;768&format=webp&as=srcset";
import PanelsJpg from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=768&format=jpg&as=url";

import ChargerAvif from "../assets/chargers/IMG-9290.jpg?w=480;768&format=avif&as=srcset";
import ChargerWebp from "../assets/chargers/IMG-9290.jpg?w=480;768&format=webp&as=srcset";
import ChargerJpg from "../assets/chargers/IMG-9290.jpg?w=768&format=jpg&as=url";

import SolarAvif from "../assets/solar/Photo-Feb-17-10-40-48-AM.jpg?w=480;768&format=avif&as=srcset";
import SolarWebp from "../assets/solar/Photo-Feb-17-10-40-48-AM.jpg?w=480;768&format=webp&as=srcset";
import SolarJpg from "../assets/solar/Photo-Feb-17-10-40-48-AM.jpg?w=768&format=jpg&as=url";

const ResidentialPage = () => {
  const residentialServices = [
    {
      title: "Smart Panels (Span & Leviton)",
      description: "Certified installers of Span Smart Panels. Take granular control of your solar, home batteries, and EV charging with real-time app monitoring and off-grid panel shedding.",
      sources: [
        { srcSet: PanelsAvif, type: "image/avif" },
        { srcSet: PanelsWebp, type: "image/webp" }
      ],
      fallback: PanelsJpg
    },
    {
      title: "EV Charger Installation",
      description: "Fast Level 2 home charger setups for Tesla, Rivian, Ford, and all major EVs. Future-ready solutions compatible with bi-directional vehicle-to-home battery backup.",
      sources: [
        { srcSet: ChargerAvif, type: "image/avif" },
        { srcSet: ChargerWebp, type: "image/webp" }
      ],
      fallback: ChargerJpg
    },
    {
      title: "Solar Integration & Backups",
      description: "Electrical engineering design connecting rooftop solar and battery storage. Maximize self-consumption, avoid peak utility rates, and guarantee backup power during outages.",
      sources: [
        { srcSet: SolarAvif, type: "image/avif" },
        { srcSet: SolarWebp, type: "image/webp" }
      ],
      fallback: SolarJpg
    }
  ];

  const handleScheduleScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById("sera-booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative font-merriweather pb-24 md:pb-28">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet={HeroAvif} type="image/avif" sizes="100vw" />
            <source srcSet={HeroWebp} type="image/webp" sizes="100vw" />
            <img 
              src={HeroJpg} 
              alt="Home solar and battery backup integration" 
              className="w-full h-full object-cover filter brightness-[0.3]"
            />
          </picture>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-orange-400 uppercase bg-orange-950/60 border border-orange-850 rounded-full">
              Residential Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-wide font-merriweather">
              Smart & Sustainable <span className="text-orange-400 font-merriweather">Home Power</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Certified installations for Span Smart Panels, EV chargers, solar integration, and high-quality home electrical services tailored to keep your family safe and powered.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#sera-booking"
                onClick={handleScheduleScroll}
                className="btn border-none bg-orange-655 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 active:scale-95"
              >
                Schedule Appointment Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Residential Electrification
            </h2>
            <p className="mt-4 text-base-content/70 text-lg">
              Unlock energy independence, monitor your power, and shield your home from blackouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <div 
                key={index} 
                className="card bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
              >
                <figure className="relative h-48 overflow-hidden">
                  <picture>
                    {service.sources.map((src, idx) => (
                      <source key={idx} srcSet={src.srcSet} type={src.type} />
                    ))}
                    <img 
                      src={service.fallback} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </picture>
                </figure>
                <div className="card-body p-6">
                  <h3 className="card-title text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Grid list of secondary services */}
          <div className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Essential Home Electrical Services:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-gray-700 dark:text-gray-300 font-semibold">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                <span>Panel Upgrades & Subpanels</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                <span>Whole-Home Rewiring & Inspections</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                <span>Recessed LED Lighting Layouts</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                <span>Troubleshooting & Power Outage Fixes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                <span>Dedicated Appliance Circuits</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                <span>GFCI & AFCI Safety Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERA Integration Section */}
      <section id="sera-booking" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-orange-600 dark:text-orange-400 font-bold uppercase text-xs tracking-wider">Book Online</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-gray-900 dark:text-white">
              Schedule Your Appointment
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Book a licensed technician for troubleshooting, panel upgrades, or smart home evaluations in real-time.
            </p>

            {/* Returning Customers Portal CTA */}
            <div className="mt-6 inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-full px-5 py-2 text-sm font-sans font-semibold text-amber-800 dark:text-amber-300">
              <span>Returning Customer?</span>
              <a 
                href="https://campbellbayelectric.schedule.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-amber-900 dark:hover:text-amber-200 transition-colors"
              >
                Access the Customer Portal
              </a>
            </div>
          </div>

          {/* Embedded Web Component container */}
          <div className="bg-gray-50 dark:bg-gray-950 rounded-3xl border border-gray-150 dark:border-gray-800 p-4 md:p-8 shadow-xl min-h-[500px]">
            <schedule-appointment tenant="campbellbayelectric"></schedule-appointment>
          </div>
        </div>
      </section>

      {/* Floating Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl w-full z-45 px-0 md:px-4">
        <div className="relative bg-slate-900/95 backdrop-blur-md py-4 px-4 shadow-2xl border border-slate-800 md:rounded-2xl overflow-hidden w-full">
          {/* Reference image: Purple-to-Cyan top gradient border */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
          
          <div className="grid grid-cols-3 gap-3 w-full">
            {/* Call Now Button */}
            <a
              href="tel:14088914470"
              className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-sans font-bold py-3 px-2 rounded-xl text-xs md:text-sm uppercase tracking-wide transition-all duration-300 shadow-md text-center"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </a>

            {/* Text Us Button */}
            <a
              href="sms:14088914470"
              className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-sans font-bold py-3 px-2 rounded-xl text-xs md:text-sm uppercase tracking-wide transition-all duration-300 shadow-md text-center"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Text Us</span>
            </a>

            {/* Schedule Button */}
            <a
              href="#sera-booking"
              onClick={handleScheduleScroll}
              className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-sans font-bold py-3 px-2 rounded-xl text-xs md:text-sm uppercase tracking-wide transition-all duration-300 shadow-md text-center"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialPage;
