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
      className="flex w-full items-center justify-center py-10"
    >
      <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
        <h2 className="text-base-400 mb-12 text-center font-garamond text-lg font-semibold leading-8 z-20">
          Trusted Partners & Industry Leaders
        </h2>
        <div className="wrap flex flex-wrap justify-center gap-10 xl:gap-32">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="w-32 grayscale"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LogoClouds;
