import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="aboutus"
      className="flex flex-col items-center justify-center font-garamond py-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center font-garamond max-w-4xl px-6"
      >
        <h1 className="z-10 text-center font-garamond text-2xl font-semibold md:text-5xl mb-8">
          About Campbell Bay Electric
        </h1>
        <div className="text-center space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-base-content/80">
            With over 13 years of industry-leading electrical experience collectively, our team at CBE has helped countless home and business owners find safe, efficient, and durable electric solutions at a reasonable price.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-base-content/80">
            We offer a full range of residential and commercial electrical services, including electrical panel upgrades, smart house features, whole house rewires, emergency power systems, transformers, phase converters, and commercial tenant improvements. Our licensed professionals handle everything from basic electrical repairs to complex integrated electrification systems.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-base-content/80">
            As a certified installer of Span Smart Panels, we specialize in integrated electrification systems that help property owners create more energy-efficient spaces. Our team works with you to develop customized plans that maximize your property's energy potential through solar integration, EV charging, energy storage systems, and micro-grids.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-base-content/80">
            Continuous training and review of the ever changing codes and related laws keeps our electricians up to date, and you are protected from costly mistakes. It is our mission to follow the industry-leading practices and present our customers with informed options for meeting the needs of their electrical projects. We provide you with prices and technicians you can trust, and we are very competitive in the markets we serve.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
