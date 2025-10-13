import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { fadeIn, staggerContainer } from "../utils/motion";

const Hero = () => {
  return (
    <>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
        className="hero w-full h-screen flex justify-start items-center relative px-4 md:px-18 bg-[url('/images/icons/mobileGraphics.svg')] md:bg-[url('/images/icons/graphics.svg')] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="z-10 hero-content flex-col items-center lg:items-start"
      >
        <div className="text-center lg:text-start flex flex-col justify-center items-center lg:items-start min-w-2/3">
          <div className="font-garamond text-3xl font-black md:text-7xl text-white md:text-base-content">
            veritas managed solutions, inc.
            <div className="h-[3rem] md:h-[6rem] md:w-[720px] py-1 md:py-3">
               <Typewriter
                 onInit={(typewriter) => {
                   typewriter
                     .pauseFor(1000)
                     .typeString(`<span class="text-amber-400">Low Voltage Systems</span>`)
                     .start();
                 }}
                options={{
                  loop: false,
                  delay: 30,
                  cursor: "",
                  parseHTML: true,
                }}
              />
            </div>
             <span className="text-white md:text-base-content font-garamond">since 2009</span>
          </div>
          <div className="py-6 flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-garamond shadow-md"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="btn btn-ghost md:btn-lg rounded-full font-garamond font-light text-white md:text-base-content"
            >
              See our work
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default Hero;
