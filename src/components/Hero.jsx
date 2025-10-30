import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { fadeIn, staggerContainer } from "../utils/motion";
import LogoClouds from "./LogoClouds";
import HeroLogo from "../assets/logo/IMG_07122013.jpeg?w=800&format=webp&as=url";

const Hero = () => {
  return (
    <>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
        className="hero w-full min-h-[75vh] md:min-h-[70vh] flex justify-center items-center relative z-0 px-4 md:px-18 bg-[url('/images/icons/mobileGraphics.svg')] md:bg-[url('/images/icons/graphics.svg')] bg-cover bg-center bg-no-repeat"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="z-10 hero-content w-full flex flex-col lg:flex-row items-center justify-center px-4"
      >
        {/* Left side - Text content */}
        <div className="text-center lg:text-start flex flex-col justify-center items-center lg:items-start lg:w-1/2">
          <div className="font-merriweather text-3xl font-black md:text-7xl text-white md:text-base-content">
            Campbell Bay Electric
            <div className="h-[5rem] md:h-[10rem] md:w-[720px] py-1 md:py-3">
               <Typewriter
                 onInit={(typewriter) => {
                   typewriter
                     .pauseFor(1000)
                    .typeString(`<span class="text-sky-400">Electrical<br>Services</span>`)
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
             <span className="text-white md:text-base-content font-merriweather">since 2020</span>
          </div>
          <div className="py-6 flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-merriweather shadow-md"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="btn btn-ghost md:btn-lg rounded-full font-merriweather font-light text-white md:text-base-content"
            >
              See our work
            </a>
          </div>
        </div>

        {/* Right side - Logo image */}
        <motion.div
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="hidden lg:flex lg:w-1/2 justify-center items-center"
        >
          <img
            src={HeroLogo}
            alt="Campbell Bay Electric Logo"
            className="max-w-full max-h-[500px] object-contain rounded-lg shadow-2xl"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
    <LogoClouds />
    </>
  );
};

export default Hero;
