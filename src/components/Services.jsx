import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const services = [
  {
    name: "Commercial Services",
    icon: "/media/Conduit/IMG_4590.jpg",
    description:
      "Transformers, phase converters, commercial tenant improvements, commercial services and troubleshooting, exterior lighting, high-voltage lighting, and parking lot lighting.",
  },
  {
    name: "Integrated Electrification Systems",
    icon: "/media/Panels/IMG_4586.jpg",
    description:
      "Smart electrical panels, solar integration, EV charging, energy storage systems, and micro-grids. Create energy-efficient spaces with modern technologies that maximize your property's energy potential.",
  },
  {
    name: "Smart Electrical Panels",
    icon: "/media/Panels/IMG_4587.jpg",
    description:
      "Certified installer of Span Smart Panels. Intelligently manage solar power, home batteries, and EV charging. Enable fast Level 2 charging and future bi-directional EV chargers.",
  },
  {
    name: "Energy Storage Systems",
    icon: "/media/Panels/IMG_4588.jpg",
    description:
      "Battery backup systems integrated with smart panels. Reduce energy costs during peak hours, power your home during blackouts, and participate in Virtual Power Plant programs.",
  },
  {
    name: "EV Charging Solutions",
    icon: "/media/Chargers/IMG-9290.jpg",
    description:
      "Level 2 EV chargers for fast charging. Future bi-directional chargers will enable both charging your car and back-feeding energy to power your home during utility outages.",
  },
  {
    name: "Solar Integration",
    icon: "/media/Solar/Photo-Feb-17-10-40-48-AM.jpg",
    description:
      "Partner with leading solar installers for seamless solar installations. We handle the electrical integration to ensure safe, reliable, and long-lasting solar power systems.",
  },
  {
    name: "Residential Services",
    icon: "/media/Lighting/IMG_4589.jpg",
    description:
      "Electrical panel upgrades, smart house features, whole house rewires, emergency power systems, generator installs, battery backup installs, recessed lighting, and low-voltage wiring.",
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
        <h1 className="z-10 font-merriweather text-center text-2xl font-semibold md:text-5xl">
          Our Services
        </h1>
        <span className="z-10 text-md font-merriweather mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">
          Commercial electrical services and integrated electrification for businesses across the South Bay.
        </span>
        <div className="mt-4">
          <a href="#commercial-services" className="btn btn-neutral rounded-full font-merriweather">
            Explore Commercial Services
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="container mt-10 grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3 max-w-full overflow-hidden"
      >
        {services.map((item, index) => (
          <div
            key={index}
            id={item.name === "Commercial Services" ? "commercial-services" : undefined}
            className="z-10 card h-96 w-full max-w-2xl shadow-sm transition duration-300 hover:-translate-y-1 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            <div className="card-body flex flex-col h-full bg-black/50 backdrop-blur-sm">
              <h2 className="font-merriweather card-title text-2xl font-black text-white">
                {item.name}
              </h2>
              <p className="text-sm font-merriweather font-medium leading-relaxed text-white/90 flex-grow">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
