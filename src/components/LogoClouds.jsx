import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { getLogos } from "../utils/logoImporter";

const LogoClouds = () => {
  const logos = getLogos();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex w-full items-center justify-center py-10 px-4 md:px-20"
    >
      <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
        <h1 className="text-base-400 mb-12 text-center font-merriweather text-lg font-semibold leading-8 z-20">
          Trusted Partners & Industry Leaders
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 xl:gap-16 max-w-6xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md flex items-center justify-center"
            >
              <img
                className="w-40 h-24 object-contain"
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LogoClouds;
