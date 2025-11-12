import React from "react";
// motion removed for this section to avoid viewport stacking issues

// imagetools responsive imports - using as=url to get optimized URLs
import Pic1627Avif from "../assets/featured/4O1A1627.jpg?w=480;768;1200&format=avif&as=srcset";
import Pic1627Webp from "../assets/featured/4O1A1627.jpg?w=480;768;1200&format=webp&as=srcset";
import Pic1627Jpg from "../assets/featured/4O1A1627.jpg?w=768&format=jpg&as=url";

import Pic1577Avif from "../assets/featured/4O1A1577.jpg?w=480;768;1200&format=avif&as=srcset";
import Pic1577Webp from "../assets/featured/4O1A1577.jpg?w=480;768;1200&format=webp&as=srcset";
import Pic1577Jpg from "../assets/featured/4O1A1577.jpg?w=768&format=jpg&as=url";

import Pic1642Avif from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=480;768;1200&format=avif&as=srcset";
import Pic1642Webp from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=480;768;1200&format=webp&as=srcset";
import Pic1642Jpg from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=768&format=jpg&as=url";

import Pic1682Avif from "../assets/chargers/IMG-9290.jpg?w=480;768;1200&format=avif&as=srcset";
import Pic1682Webp from "../assets/chargers/IMG-9290.jpg?w=480;768;1200&format=webp&as=srcset";
import Pic1682Jpg from "../assets/chargers/IMG-9290.jpg?w=768&format=jpg&as=url";

import Pic1588Avif from "../assets/chargers/18031199-2b42-42d7-bdaf-8abba775fedc-1152x1536.jpg?w=480;768;1200&format=avif&as=srcset";
import Pic1588Webp from "../assets/chargers/18031199-2b42-42d7-bdaf-8abba775fedc-1152x1536.jpg?w=480;768;1200&format=webp&as=srcset";
import Pic1588Jpg from "../assets/chargers/18031199-2b42-42d7-bdaf-8abba775fedc-1152x1536.jpg?w=768&format=jpg&as=url";

import Pic1581Avif from "../assets/solar/Photo-Feb-17-10-40-48-AM.jpg?w=480;768;1200&format=avif&as=srcset";
import Pic1581Webp from "../assets/solar/Photo-Feb-17-10-40-48-AM.jpg?w=480;768;1200&format=webp&as=srcset";
import Pic1581Jpg from "../assets/solar/Photo-Feb-17-10-40-48-AM.jpg?w=768&format=jpg&as=url";

const services = [
  {
    name: "Commercial Services",
    sources: [
      { srcSet: Pic1627Avif, type: "image/avif" },
      { srcSet: Pic1627Webp, type: "image/webp" },
    ],
    img: { src: Pic1627Jpg },
    description:
      "Complete commercial tenant improvements, transformers, phase converters, commercial services and troubleshooting, exterior lighting, high-voltage lighting, and parking lot lighting.",
  },
  {
    name: "Integrated Electrification Systems",
    sources: [
      { srcSet: Pic1577Avif, type: "image/avif" },
      { srcSet: Pic1577Webp, type: "image/webp" },
    ],
    img: { src: Pic1577Jpg },
    description:
      "Smart electrical panels, solar integration, EV charging, energy storage systems, and micro-grids. Create energy-efficient spaces with modern technologies that maximize your property's energy potential.",
  },
  {
    name: "Smart Electrical Panels",
    sources: [
      { srcSet: Pic1642Avif, type: "image/avif" },
      { srcSet: Pic1642Webp, type: "image/webp" },
    ],
    img: { src: Pic1642Jpg },
    description:
      "Certified installer of Span Smart Panels and Leviton Smart Panels. Intelligently manage solar power, home batteries, and EV charging. Enable fast Level 2 charging and future bi-directional EV chargers.",
  },
  {
    name: "Energy Storage Systems",
    sources: [
      { srcSet: Pic1682Avif, type: "image/avif" },
      { srcSet: Pic1682Webp, type: "image/webp" },
    ],
    img: { src: Pic1682Jpg },
    description:
      "Battery backup systems integrated with smart panels. Reduce energy costs during peak hours, power your home during blackouts, and participate in Virtual Power Plant programs.",
  },
  {
    name: "EV Charging Solutions",
    sources: [
      { srcSet: Pic1588Avif, type: "image/avif" },
      { srcSet: Pic1588Webp, type: "image/webp" },
    ],
    img: { src: Pic1588Jpg },
    description:
      "Level 2 EV chargers for fast charging. Future bi-directional chargers will enable both charging your car and back-feeding energy to power your home during utility outages.",
  },
  {
    name: "Solar Integration",
    sources: [
      { srcSet: Pic1581Avif, type: "image/avif" },
      { srcSet: Pic1581Webp, type: "image/webp" },
    ],
    img: { src: Pic1581Jpg },
    description:
      "Partner with leading solar installers for seamless solar installations. We handle the electrical integration to ensure safe, reliable, and long-lasting solar power systems.",
  },
];
const Services = () => {
  return (
    <div
      id="services"
      className="mt-10 md:mt-24 scroll-mt-24 flex flex-col items-center justify-center md:px-20 px-4 relative z-10"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="z-10 font-merriweather text-center text-2xl font-semibold md:text-5xl">
          Our Services
        </h1>
        <span className="z-10 text-md font-merriweather mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">
          Uncover new paths, explore opportunities and chart your success with us.
        </span>
      </div>
      <div className="container mt-10 grid gap-8 p-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-full">
        {services.map((item, index) => (
            <div
              key={index}
              className="z-10 w-full max-w-2xl rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <h2 className="font-merriweather text-2xl font-black text-neutral-900">
                  {item.name}
                </h2>
                <p className="mt-4 text-sm font-merriweather font-medium leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
              <div className="w-full overflow-hidden rounded-b-2xl">
                <picture>
                  {item.sources.map((source, i) => (
                    <source key={i} srcSet={source.srcSet} type={source.type} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ))}
                  <img
                    src={item.img.src}
                    alt={item.name}
                    className="w-full h-48 md:h-56 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
