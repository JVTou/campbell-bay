import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

// Responsive image imports using vite-imagetools
import HeroAvif from "../assets/featured/4O1A1627.jpg?w=480;768;1200;1600&format=avif&as=srcset";
import HeroWebp from "../assets/featured/4O1A1627.jpg?w=480;768;1200;1600&format=webp&as=srcset";
import HeroJpg from "../assets/featured/4O1A1627.jpg?w=1200&format=jpg&as=url";

import ConduitAvif from "../assets/conduit/IMG_6534.jpg?w=480;768&format=avif&as=srcset";
import ConduitWebp from "../assets/conduit/IMG_6534.jpg?w=480;768&format=webp&as=srcset";
import ConduitJpg from "../assets/conduit/IMG_6534.jpg?w=768&format=jpg&as=url";

import PanelAvif from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=480;768&format=avif&as=srcset";
import PanelWebp from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=480;768&format=webp&as=srcset";
import PanelJpg from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=768&format=jpg&as=url";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const CommercialPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "commercial-inquiry", ...formData })
    })
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", phone: "", description: "" });
      })
      .catch((error) => {
        setSubmitStatus("error");
        console.error("Form submission error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const commercialServices = [
    {
      title: "Tenant Improvements",
      description: "Custom design-build conduit layouts, tenant spaces rewiring, modular office setups, and panel distributions tailored for growing businesses.",
      sources: [
        { srcSet: ConduitAvif, type: "image/avif" },
        { srcSet: ConduitWebp, type: "image/webp" }
      ],
      fallback: ConduitJpg
    },
    {
      title: "Three-Phase Power & Transformers",
      description: "Installation, maintenance, and diagnostics of phase converters, step-down/step-up transformers, and high-voltage distribution networks.",
      sources: [
        { srcSet: HeroAvif, type: "image/avif" },
        { srcSet: HeroWebp, type: "image/webp" }
      ],
      fallback: HeroJpg
    },
    {
      title: "Smart Commercial Panels",
      description: "Certified installers of Span and Leviton intelligent electrical systems. Optimize power routing, isolate heavy industrial loads, and monitor power quality in real-time.",
      sources: [
        { srcSet: PanelAvif, type: "image/avif" },
        { srcSet: PanelWebp, type: "image/webp" }
      ],
      fallback: PanelJpg
    }
  ];

  return (
    <div className="relative font-merriweather">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet={HeroAvif} type="image/avif" sizes="100vw" />
            <source srcSet={HeroWebp} type="image/webp" sizes="100vw" />
            <img 
              src={HeroJpg} 
              alt="Commercial electrical conduit installation" 
              className="w-full h-full object-cover filter brightness-[0.3]"
            />
          </picture>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-teal-400 uppercase bg-teal-950/60 border border-teal-800 rounded-full">
              Commercial Contracting
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-wide">
              Powering Bay Area <span className="text-teal-400">Businesses</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From commercial tenant improvements and high-voltage troubleshooting to advanced smart panel integrations, we deliver licensed solutions on budget and code-compliant.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#inquiry"
                className="btn border-none bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 active:scale-95"
              >
                Request a Proposal
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Specialized Business Services
            </h2>
            <p className="mt-4 text-base-content/70 text-lg">
              High-performance electrical engineering built to maximize durability and meet strict safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <div 
                key={index} 
                className="card bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
              >
                <figure className="relative h-48 overflow-hidden">
                  <picture>
                    {service.sources.map((src, idx) => (
                      <source key={idx} srcSet={src.srcSet} type={src.type} />
                    ))}
                    <img 
                      src={service.fallback} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </picture>
                </figure>
                <div className="card-body p-6">
                  <h3 className="card-title text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Grid list of secondary services */}
          <div className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Other Commercial Work We Handle:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-gray-700 dark:text-gray-300 font-semibold">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                <span>Phase Converters & Motors</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                <span>Parking Lot & Exterior Lighting</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                <span>High-Voltage Troubleshooting</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                <span>EV Fleet Charger Installations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                <span>Dedicated Circuits & Machinery Hookups</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                <span>Emergency Backup Generators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card bg-gray-50 dark:bg-gray-950 p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 rounded-3xl">
            <div className="text-center mb-8">
              <span className="text-teal-600 dark:text-teal-400 font-bold uppercase text-xs tracking-wider">Start Your Project</span>
              <h2 className="text-2xl md:text-4xl font-extrabold mt-2 text-gray-900 dark:text-white">Commercial Proposal Request</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                Provide us details about your project scope, and our team will get in touch to schedule a site walk or request schematics.
              </p>
            </div>

            <form name="commercial-inquiry" method="post" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="commercial-inquiry" />
              {/* Honeypot */}
              <p style={{ display: "none" }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              {submitStatus === "success" && (
                <div className="rounded-xl bg-teal-100 dark:bg-teal-900/40 p-5 text-sm text-teal-800 dark:text-teal-200 border border-teal-200 dark:border-teal-800 font-sans font-bold">
                  ✓ Thank you! Your commercial inquiry has been received. Our estimating team will contact you shortly.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="rounded-xl bg-red-100 dark:bg-red-900/40 p-5 text-sm text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800 font-sans font-bold">
                  ✗ There was a problem submitting your form. Please verify fields or call us directly.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="comm-name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Contact Person Name
                  </label>
                  <input
                    id="comm-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full font-sans text-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="comm-company" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    id="comm-company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="input input-bordered w-full font-sans text-sm"
                    placeholder="e.g. Acme Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="comm-email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Work Email
                  </label>
                  <input
                    id="comm-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full font-sans text-sm"
                    placeholder="e.g. jdoe@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="comm-phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="comm-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input input-bordered w-full font-sans text-sm"
                    placeholder="e.g. (408) 555-0199"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="comm-desc" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Project Description
                </label>
                <textarea
                  id="comm-desc"
                  name="description"
                  rows={5}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full font-sans text-sm"
                  placeholder="Please describe the electrical scope, load requirements, or timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn w-full bg-teal-600 hover:bg-teal-500 border-none text-white font-bold py-3.5 rounded-full shadow-md text-base transition-transform duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting Request..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialPage;
