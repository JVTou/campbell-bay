import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const services = [
  {
    name: "Cable Infrastructure",
    icon: "/images/featured/cableinfrastructure.jpeg",
    description:
      "Build or renovate your network with our comprehensive cable infrastructure solutions. From structured cabling to fiber optic installations, we ensure reliable connectivity for your business.",
  },
  {
    name: "Wireless Services",
    icon: "/images/featured/wireless.jpeg",
    description:
      "Wireless systems designed by experts. We provide enterprise-grade WiFi solutions, wireless network design, and optimization to keep your business connected seamlessly.",
  },
  {
    name: "Audio and Visual",
    icon: "/images/featured/audiovisual.jpg",
    description:
      "Modern conference room and AV solutions prepared to improve your workflow. From video conferencing systems to digital signage, we enhance communication and collaboration.",
  },
  {
    name: "Security Services",
    icon: "/images/featured/security.jpg",
    description:
      "Secure your locations with card access, burglar and alarm systems. Our comprehensive security solutions protect your assets and provide peace of mind.",
  },
  {
    name: "Information Technology",
    icon: "/images/featured/IT.jpg",
    description:
      "Software, troubleshooting and desktop support. Our IT team handles everything from system administration to technical support to keep your technology running smoothly.",
  },
  {
    name: "Managed Services",
    icon: "/images/featured/managedservices.jpg",
    description:
      "Network systems, server management and smart hands. We proactively monitor and maintain your IT infrastructure to prevent issues before they impact your business.",
  },
  {
    name: "Consultation",
    icon: "/images/featured/consultation.jpg",
    description:
      "Consultation, design and project management. Our experts work with you to plan, design, and execute technology solutions that align with your business goals.",
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
          Comprehensive technology solutions to power your business growth and success.
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
