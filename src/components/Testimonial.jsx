import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
const partnerships = [
  {
    company: "Tesla",
    companyDescription: "The world's leading electric vehicle and clean energy company",
    description: "Our long-standing partnership with Tesla has been built on trust, innovation, and shared vision. Over the years, we've delivered comprehensive network infrastructure and security solutions across their global manufacturing facilities, supporting their mission to accelerate the world's transition to sustainable energy. This enduring collaboration continues to drive technological excellence.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    company: "Silicon Valley Bank",
    companyDescription: "A leading financial services company serving the innovation economy",
    description: "Our deep-rooted partnership with Silicon Valley Bank spans multiple years of mutual growth and success. We've consistently delivered robust IT infrastructure and security solutions that have supported their mission of serving the innovation economy. This lasting relationship has been built on our shared commitment to excellence and innovation in financial technology.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Silicon_Valley_Bank_logo%2C_2022.svg",
  },
  {
    company: "Lucid Motors",
    companyDescription: "Pioneering the future of luxury electric vehicles",
    description: "Our enduring partnership with Lucid Motors has been instrumental in supporting their vision of creating the most advanced electric vehicles. Through years of collaboration, we've provided essential network infrastructure and security systems that have grown alongside their state-of-the-art manufacturing and research facilities. This long-term relationship continues to drive innovation.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Lucid_Motors_logo.svg",
  },
  {
    company: "Lam Research",
    companyDescription: "A global leader in semiconductor equipment and services",
    description: "Our longstanding collaboration with Lam Research has been a cornerstone of our success in the semiconductor industry. Over the years, we've implemented advanced IT solutions for their precision manufacturing environments, supporting their mission of enabling the next generation of technology. This enduring partnership has been built on mutual trust and shared technological excellence.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Lam_Research_logo.svg",
  },
  {
    company: "Redwood Materials",
    companyDescription: "Creating a circular supply chain for lithium-ion batteries",
    description: "Our growing partnership with Redwood Materials has been built on a foundation of shared environmental values and technological innovation. We're proud to support their mission of creating a circular supply chain for lithium-ion batteries through our technology solutions. This promising long-term collaboration continues to evolve as we work together toward sustainable battery recycling and materials recovery.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Redwood_Materials_Low_Resolution.png",
  },
];
const Testimonial = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="testimonial"
      className="my-10 flex flex-col items-center justify-center"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="z-10 text-center font-garamond text-2xl font-semibold md:text-5xl">
          Our Partnerships
        </h1>
        <span className="z-10 text-md mt-2 px-2 font-garamond md:mt-4 md:px-5 md:text-xl">
          Trusted by Industry Leaders
        </span>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="w-full max-w-7xl py-4 md:py-10 px-2 sm:px-4"
      >
        <Swiper
          cssMode={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            }
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="w-full h-fit sm:h-96 rounded-xl border border-base-content/10"
        >
          {partnerships.map((item, index) => (
            <SwiperSlide className="h-full" key={index}>
              <div className="z-10 flex h-full items-center justify-center pb-8 md:pb-12 px-2 sm:px-4">
                <figure className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
                  <blockquote className="text-center font-garamond leading-6 sm:leading-8 text-sm sm:text-base md:text-lg lg:text-xl text-base-content px-1 sm:px-2">
                    <p>"{item.description}"</p>
                  </blockquote>
                    <div className="mt-6 md:mt-10 flex flex-col items-center">
                      <div className="w-1/2 sm:w-1/3 flex justify-center">
                        <img
                          className="h-12 sm:h-16 md:h-20 w-auto object-contain"
                          src={item.logo}
                          alt={`${item.company} logo`}
                        />
                      </div>
                      <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-center text-center sm:text-left">
                        <div className="font-garamond text-lg sm:text-xl font-semibold text-base-content">
                          {item.company}
                        </div>
                        <span className="hidden sm:inline mx-2 text-base-content/50">|</span>
                        <span className="text-center font-garamond text-xs sm:text-sm text-base-content/70 mt-1 sm:mt-0">
                          {item.companyDescription}
                        </span>
                    </div>
                    </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
                  {/* Navigation buttons */}
        <div className="swiper-button-prev text-base-content hover:text-base-content"></div>
        <div className="swiper-button-next text-base-content hover:text-base-content"></div>

        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
