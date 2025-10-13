import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="contactus"
      className="mt-20 px-4 md:px-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex w-full flex-col justify-center"
      >
        <h1 className="z-10 text-center font-garamond text-2xl font-semibold md:text-5xl">
          Get in touch
        </h1>
        <span className="z-10 text-md mt-2 px-2 text-center font-garamond md:mt-4 md:px-5 md:text-xl">
          Contact us now and scale your business
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mx-auto px-6 py-10"
      >
        <div className="lg:-mx-6 lg:flex lg:items-start">
          <div className="z-10 lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-start">
            <div className="mt-6 space-y-8 md:mt-8">
              {/* Headquarters */}
              <div>
                <h3 className="text-base-400 font-semibold mb-3 font-garamond">Our Headquarters</h3>
                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-base-400 mx-2 h-6 w-6 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="mx-2 font-garamond text-base-content">
                    <strong className="font-garamond">Northern California:</strong> 398 Martin Avenue, Santa Clara, CA 95050
                  </span>
                </p>
              </div>

              {/* Branches */}
              <div>
                <h3 className="text-base-400 font-semibold mb-3 font-garamond">Branches</h3>
                <div className="space-y-3">
                  <p className="-mx-2 flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-base-400 mx-2 h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="mx-2 font-garamond text-base-content">
                      <strong className="font-garamond">Southern California:</strong> 1251 Pomona Rd, Unit 104, Corona, CA 92882
                    </span>
                  </p>
                  <p className="-mx-2 flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-base-400 mx-2 h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="mx-2 font-garamond text-base-content">
                      <strong className="font-garamond">Texas:</strong> 720 Bastrop Hwy, Suite 109, Austin, TX 78741
                    </span>
                  </p>
                  <p className="-mx-2 flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-base-400 mx-2 h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="mx-2 font-garamond text-base-content">
                      <strong className="font-garamond">Nevada:</strong> 625 Spice Islands Dr, Suite C, Sparks, NV 89431
                    </span>
                  </p>
                  <p className="-mx-2 flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-base-400 mx-2 h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="mx-2 font-garamond text-base-content">
                      <strong className="font-garamond">Arizona:</strong> 9845 S 31st Ave, Laveen, AZ 85339
                    </span>
                  </p>
                  <p className="-mx-2 flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-base-400 mx-2 h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="mx-2 font-garamond text-base-content">
                      <strong className="font-garamond">Idaho:</strong> 1449 N Wollaston Dr, Post Falls, ID 83854
                    </span>
                  </p>
                </div>
              </div>

              {/* National Team */}
              <div>
                <h3 className="text-base-400 font-semibold mb-3 font-garamond">National Team</h3>
                <p className="font-garamond text-base-content mb-2">
                  Our national team is available for projects in all states
                </p>
                <p className="font-garamond text-base-content opacity-80">
                  <strong className="font-garamond">Contact:</strong> Our national project managers will support our services outside of our usual locations
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-base-400 font-semibold mb-3 font-garamond">Contact</h3>
                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-base-400 mx-2 h-6 w-6 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="mx-2 font-garamond text-base-content">
                    <strong className="font-garamond">Email:</strong> contact@veritas-inc.com
                  </span>
                </p>
                <p className="-mx-2 flex items-start mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-base-400 mx-2 h-6 w-6 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="mx-2 font-garamond text-base-content">
                    <strong className="font-garamond">Phone:</strong> +1 877-971-0849
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-base-400 font-garamond">Follow us</h3>

                <div className="-mx-1.5 mt-4 flex ">
                  <a
                    className="btn mx-1.5 rounded-full bg-base-100"
                    href="https://www.linkedin.com/company/veritas-managed-solutions-inc"
                    aria-label="linkedin"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="z-10 card mt-8 lg:mx-6 lg:w-1/2">
            <div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl">
              <h1 className="card-title font-garamond">Ask us anything</h1>

              <form className="mt-6" netlify name="contact">
                <div className="flex-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-garamond">
                    Full Name
                  </label>
                  <input
                    id="name"
                    autoComplete="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full font-garamond"
                  />
                </div>

                <div className="mt-6 flex-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-garamond">
                    Email address
                  </label>
                  <input
                    id="email"
                    autoComplete="email"
                    type="email"
                    placeholder="abcd@example.com"
                    className="input input-bordered w-full font-garamond"
                  />
                </div>

                <div className="mt-6 w-full">
                  <label htmlFor="message" className="mb-2 block text-sm font-garamond">
                    Message
                  </label>
                  <textarea
                    id="message"
                    autoComplete="message"
                    className="textarea textarea-bordered w-full font-garamond"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  className="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300 font-garamond"
                  type="submit"
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
