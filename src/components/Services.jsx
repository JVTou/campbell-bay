import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const services = [
  {
    name: "Residential Services",
    icon: "/images/featured/cableinfrastructure.jpeg",
    description:
      "Electrical panel upgrades, smart house features, whole house rewires, emergency power systems, generator installs, battery backup installs, recessed lighting, and low-voltage wiring.",
  },
  {
    name: "Commercial Services",
    icon: "/images/featured/wireless.jpeg",
    description:
      "Transformers, phase converters, commercial tenant improvements, commercial services and troubleshooting, exterior lighting, high-voltage lighting, and parking lot lighting.",
  },
  {
    name: "Integrated Electrification Systems",
    icon: "/images/featured/audiovisual.jpg",
    description:
      "Smart electrical panels, solar integration, EV charging, energy storage systems, and micro-grids. Create energy-efficient spaces with modern technologies that maximize your property's energy potential.",
  },
  {
    name: "Smart Electrical Panels",
    icon: "/images/featured/security.jpg",
    description:
      "Certified installer of Span Smart Panels. Intelligently manage solar power, home batteries, and EV charging. Enable fast Level 2 charging and future bi-directional EV chargers.",
  },
  {
    name: "Energy Storage Systems",
    icon: "/images/featured/IT.jpg",
    description:
      "Battery backup systems integrated with smart panels. Reduce energy costs during peak hours, power your home during blackouts, and participate in Virtual Power Plant programs.",
  },
  {
    name: "EV Charging Solutions",
    icon: "/images/featured/managedservices.jpg",
    description:
      "Level 2 EV chargers for fast charging. Future bi-directional chargers will enable both charging your car and back-feeding energy to power your home during utility outages.",
  },
  {
    name: "Solar Integration",
    icon: "/images/featured/consultation.jpg",
    description:
      "Partner with leading solar installers for seamless solar installations. We handle the electrical integration to ensure safe, reliable, and long-lasting solar power systems.",
  },
];
const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="services"
      className="mt-10 flex flex-col items-center justify-center md:mt-20"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="z-10 font-garamond text-center text-2xl font-semibold md:text-5xl">
          Our Services
        </h1>
        <span className="z-10 text-md font-garamond mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">
          Professional electrical services and integrated electrification systems for residential and commercial properties throughout the South Bay Area.
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="container mt-10 grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((item, index) => (
          <div
            key={index}
            className="z-10 card max-w-2xl shadow-sm transition duration-300 hover:-translate-y-1"
          >
            <div className="card-body">
              <h2 className="font-garamond card-title text-3xl font-black">
                {item.name}
              </h2>
              <p className="text-md font-garamond font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
              <figure>
                <img className="p-4" src={item.icon} alt={item.description} />
              </figure>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
