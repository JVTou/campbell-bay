import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Footer = () => {
  const yearNow = new Date().getFullYear();

  const siteMapLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonial" },
    { name: "About Us", href: "#aboutus" },
    { name: "Contact Us", href: "#contactus" },
    { name: "Projects Album", href: "#projects" },
  ];

  const serviceLinks = [
    { name: "Residential Services", href: "#services" },
    { name: "Commercial Services", href: "#services" },
    { name: "Integrated Electrification", href: "#services" },
    { name: "Smart Electrical Panels", href: "#services" },
    { name: "EV Charging Solutions", href: "#services" },
  ];

  const companyLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/campbell-bay-electric", external: true },
    { name: "Email Us", href: "mailto:info@campbellbayelectric.com", external: true },
    { name: "Call Us", href: "tel:+14089106195", external: true },
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="footer"
      className="mt-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex w-full flex-col justify-center"
      >
        {/* Site Map Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-garamond text-base-content">Campbell Bay Electric</h3>
              <div className="flex items-center space-x-2">
                <img src="/media/logo/Tab-Icon.png" alt="Campbell Bay Electric Logo" className="w-16" />
              </div>

              <p className="text-sm text-base-content/70 font-garamond">
                Safe, Efficient, and Durable Electrical Solutions
              </p>
            </div>

            {/* Site Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-garamond text-base-content">Site Map</h3>
              <ul className="space-y-2">
                {siteMapLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-base-content/70 hover:text-base-content transition-colors font-garamond"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-garamond text-base-content">Our Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-base-content/70 hover:text-base-content transition-colors font-garamond"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-garamond text-base-content">Connect With Us</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="text-sm text-base-content/70 hover:text-base-content transition-colors font-garamond"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-base-content/10">
          <div className="flex items-center justify-center py-6 font-garamond text-sm lg:text-lg">
            <h1>© Campbell Bay Electric 2019-{yearNow}. All rights reserved.</h1>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
