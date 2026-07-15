import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import TabIcon from "../assets/logo/Tab-Icon.png?w=80&format=webp&as=url";
import { navigate } from "../utils/navigation";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Footer = () => {
  const yearNow = new Date().getFullYear();
  const [reviewForm, setReviewForm] = useState({ client_name: "", email: "", review: "" });
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewStatus, setReviewStatus] = useState(null);

  const handleReviewChange = (e) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviewSubmitting(true);
    setReviewStatus(null);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "client-review", ...reviewForm }),
    })
      .then(() => {
        setReviewStatus("success");
        setReviewForm({ client_name: "", email: "", review: "" });
      })
      .catch(() => {
        setReviewStatus("error");
      })
      .finally(() => {
        setReviewSubmitting(false);
      });
  };

  const siteMapLinks = [
    { name: "Home", href: "/#home" },
    { name: "Commercial Services", href: "/commercial" },
    { name: "Residential Services", href: "/residential" },
    { name: "Testimonials", href: "/#testimonial" },
    { name: "About Us", href: "/#aboutus" },
    { name: "Contact Us", href: "/#contactus" },
    { name: "Projects Album", href: "/#projects" },
    { name: "Leave a review", href: "#client-review" },
  ];

  const serviceLinks = [
    { name: "Residential Services", href: "/residential" },
    { name: "Commercial Services", href: "/commercial" },
    { name: "Smart Electrical Panels", href: "/residential" },
    { name: "EV Charging Solutions", href: "/residential" },
  ];

  const companyLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/campbell-bay-electric", external: true },
    { name: "Email Us", href: "mailto:info@campbellbayelectric.com", external: true },
    { name: "Call Us", href: "tel:+14088914470", external: true },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
      return; // Use default link click
    }
    e.preventDefault();

    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetHash = href.startsWith("/#") ? href.substring(1) : href; // e.g. '#aboutus'
      if (window.location.pathname === "/") {
        // Scroll smoothly on the home page
        window.history.pushState({}, "", href.startsWith("/#") ? href : "/" + href);
        const element = document.querySelector(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        window.dispatchEvent(new Event("hashchange"));
      } else {
        // Redirect to home page with hash
        navigate(href.startsWith("/#") ? href : "/" + href);
      }
    } else {
      // Navigate to sub-page
      navigate(href);
    }
  };

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
              <h3 className="text-lg font-semibold font-merriweather text-base-content">Campbell Bay Electric</h3>
              <div className="flex items-center space-x-2">
                <img src={TabIcon} alt="Campbell Bay Electric Logo" className="w-16" />
              </div>

              <p className="text-sm text-base-content/70 font-merriweather">
                Safe, Efficient, and Durable Electrical Solutions
              </p>
            </div>

            {/* Site Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-merriweather text-base-content">Site Map</h3>
              <ul className="space-y-2">
                {siteMapLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-base-content/70 hover:text-base-content transition-colors font-merriweather cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-merriweather text-base-content">Our Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-base-content/70 hover:text-base-content transition-colors font-merriweather cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-merriweather text-base-content">Connect With Us</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="text-sm text-base-content/70 hover:text-base-content transition-colors font-merriweather"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Community giving & client reviews */}
        <div className="border-t border-base-content/10">
          <div className="container mx-auto max-w-2xl px-6 py-10">
            <p className="text-center text-sm leading-relaxed text-base-content/80 font-merriweather">
              Campbell Bay Electric also supports Christian and Catholic churches through charitable giving, alongside our other community commitments.
            </p>

            <div id="client-review" className="mt-10 rounded-xl border border-base-content/10 bg-base-100/50 p-6 shadow-sm md:p-8">
              <h3 className="text-center font-merriweather text-lg font-semibold text-base-content md:text-xl">
                Share your experience
              </h3>
              <p className="mt-2 text-center text-sm text-base-content/70 font-merriweather">
                Leave a short review. We may feature it on this site—we&apos;ll reach out if we need anything else.
              </p>

              <form name="client-review" method="post" className="mt-6 space-y-4" onSubmit={handleReviewSubmit}>
                <input type="hidden" name="form-name" value="client-review" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>

                {reviewStatus === "success" && (
                  <div className="rounded-lg bg-green-100 p-4 text-sm text-green-800 font-merriweather">
                    Thank you! Your review was sent. We appreciate you taking the time.
                  </div>
                )}
                {reviewStatus === "error" && (
                  <div className="rounded-lg bg-red-100 p-4 text-sm text-red-800 font-merriweather">
                    Something went wrong. Please try again or email us at info@campbellbayelectric.com.
                  </div>
                )}

                <div>
                  <label htmlFor="client-review-name" className="mb-1 block text-sm font-merriweather text-base-content">
                    Your name
                  </label>
                  <input
                    id="client-review-name"
                    type="text"
                    name="client_name"
                    value={reviewForm.client_name}
                    onChange={handleReviewChange}
                    required
                    autoComplete="name"
                    className="input input-bordered w-full font-merriweather"
                    placeholder="Name as you’d like it shown"
                  />
                </div>
                <div>
                  <label htmlFor="client-review-email" className="mb-1 block text-sm font-merriweather text-base-content">
                    Email <span className="text-base-content/60">(optional)</span>
                  </label>
                  <input
                    id="client-review-email"
                    type="email"
                    name="email"
                    value={reviewForm.email}
                    onChange={handleReviewChange}
                    autoComplete="email"
                    className="input input-bordered w-full font-merriweather"
                    placeholder="So we can follow up if needed"
                  />
                </div>
                <div>
                  <label htmlFor="client-review-text" className="mb-1 block text-sm font-merriweather text-base-content">
                    Your review
                  </label>
                  <textarea
                    id="client-review-text"
                    name="review"
                    value={reviewForm.review}
                    onChange={handleReviewChange}
                    required
                    rows={4}
                    className="textarea textarea-bordered w-full font-merriweather"
                    placeholder="Tell us about your project or experience…"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-neutral w-full rounded-full font-merriweather"
                  disabled={reviewSubmitting}
                >
                  {reviewSubmitting ? "Sending…" : "Submit review"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-base-content/10">
          <div className="flex items-center justify-center py-6 font-merriweather text-sm lg:text-lg">
            <h1>© Campbell Bay Electric 2020-{yearNow}. All rights reserved.</h1>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
