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
const testimonials = [
  {
    name: "Orvick Management Group, Inc.",
    role: "Property Management Company",
    description:
      "Campbell Bay Electric has been our trusted electrical contractor for over five years. Their team consistently delivers exceptional work on our commercial properties, from routine maintenance to complex electrical upgrades. Their attention to detail, reliability, and professional service make them our go-to choice for all electrical needs.",
    image: "/media/customers/orvick.jpg",
    rating: 5,
  },
  {
    name: "Scott",
    role: "Property Owner",
    description:
      "Hector, Manny, and Jessie worked nonstop Saturday. I was really impressed! Thanks for coordinating with tenants. [...] Yours truly, Scott.",
    rating: 5,
  },
  {
    name: "Orvick Management Group",
    role: "Property Management Company",
    description:
      "Wonderful! You all are the best! Thanks for such fast service.",
    image: "/media/customers/orvick.jpg",
    rating: 5,
  },
  {
    name: "Scott Adams",
    role: "Property Owner",
    description:
      "Thanks for sending Jesse over. He was quick and tidy.",
    image: "/media/customers/bicyclebluebook.png",
    rating: 5,
  },
  {
    name: "Ruben",
    role: "DRI Construction",
    description:
      "I would like to extend my utmost respect to your crew. They conducted themselves like professionals and are very hard working. I look forward to working with you in the future. See you on the next one !! God Bless 🙏",
    rating: 5,
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
        <h1 className="z-10 text-center font-merriweather text-2xl font-semibold md:text-5xl">
          Our Partnerships
        </h1>
        <span className="z-10 text-md mt-2 px-2 font-merriweather md:mt-4 md:px-5 md:text-xl">
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
          {testimonials.map((item, index) => (
            <SwiperSlide className="h-full" key={index}>
              <div className="z-10 flex h-full items-center justify-center pb-8 md:pb-12 px-2 sm:px-4">
                <figure className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
                  <blockquote className="text-center font-merriweather leading-6 sm:leading-8 text-sm sm:text-base md:text-lg lg:text-xl text-base-content px-1 sm:px-2">
                    <p>"{item.description}"</p>
                  </blockquote>
                  <div className="mt-6 md:mt-10 flex flex-col items-center">
                    {item.image && (
                      <div className="w-1/2 sm:w-1/3 flex justify-center">
                        <img
                          className="h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20 object-cover rounded-full"
                          src={item.image}
                          alt={`${item.name} photo`}
                        />
                      </div>
                    )}
                    <div className="mt-3 md:mt-4 flex flex-col items-center text-center">
                      <div className="font-merriweather text-lg sm:text-xl font-semibold text-base-content">
                        {item.name}
                      </div>
                      <span className="text-center font-merriweather text-xs sm:text-sm text-base-content/70 mt-1">
                        {item.role}
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
