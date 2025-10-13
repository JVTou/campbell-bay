import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="aboutus"
      className="hidden md:flex flex-col items-center justify-center font-garamond"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center font-garamond"
      >
        <h1 className="z-10 text-center font-garamond text-2xl font-semibold md:text-5xl">
          About Us
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default Team;
