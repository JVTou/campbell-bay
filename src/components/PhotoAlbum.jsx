import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { fadeIn, staggerContainer } from "../utils/motion";

// Photo data for each business line using actual project photos
const businessPhotos = {
  residential: [
    { src: "/media/Lighting/IMG_4589.jpg", width: 1920, height: 2560 },
    { src: "/media/Lighting/IMG_5725.heic", width: 1920, height: 2560 },
    { src: "/media/Lighting/IMG_5764.jpg", width: 1920, height: 2560 },
    { src: "/media/Lighting/IMG_5936.heic", width: 1920, height: 2560 },
    { src: "/media/Lighting/IMG-0753.jpg", width: 1920, height: 2560 },
    { src: "/media/Lighting/2BEDA6BE-999F-4CF1-9DF1-81A9E74DC20D.jpg", width: 1920, height: 2560 },
    { src: "/media/Lighting/94C3AAE3-6FD4-446D-85E6-52EBE378EED8.jpg", width: 1920, height: 2560 },
    { src: "/media/Lighting/B522ACA7-FCFD-4BCE-AB48-C8767CD6BE0F.jpg", width: 1920, height: 2560 },
    { src: "/media/Lighting/F22C4C04-AD45-49D1-AF4F-BE6C551E329F.jpg", width: 1920, height: 2560 },
  ],
  commercial: [
    { src: "/media/Conduit/IMG_4590.jpg", width: 1920, height: 2560 },
    { src: "/media/Conduit/IMG_6534.jpg", width: 1920, height: 2560 },
    { src: "/media/Conduit/IMG_7219.jpg", width: 1920, height: 2560 },
    { src: "/media/Conduit/IMG-0747.jpg", width: 1920, height: 2560 },
    { src: "/media/Conduit/IMG-0750.jpg", width: 1920, height: 2560 },
  ],
  electrification: [
    { src: "/media/Electrical Panels/IMG_4586.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_4587.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_4588.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_4591.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_4592.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_5858.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_5986.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_6503.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7365.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7428.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7520.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7792.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7793.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7794.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7795.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7797.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7798.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7799.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7800.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG-0754.jpg", width: 1920, height: 2560 },
  ],
  smartPanels: [
    { src: "/media/Electrical Panels/IMG_4586.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_4587.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_4588.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_4591.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_4592.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_5858.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_5986.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_6503.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7365.jpg", width: 1920, height: 2560 },
    { src: "/media/Electrical Panels/IMG_7428.jpg", width: 1920, height: 2560 },
  ],
  evCharging: [
    { src: "/media/EV chargers/IMG-9290.jpg", width: 1920, height: 2560 },
    { src: "/media/EV chargers/18031199-2b42-42d7-bdaf-8abba775fedc-1152x1536.jpg", width: 1152, height: 1536 },
    { src: "/media/EV chargers/89e38164-0cf8-47bd-8192-21654cbe2467.jpg", width: 1920, height: 2560 },
  ],
  solar: [
    { src: "/media/Solar/Photo-Feb-17-10-40-48-AM.jpg", width: 1920, height: 2560 },
  ]
};

const businessLines = [
  {
    title: "Residential Services",
    subtitle: "Electrical panel upgrades, smart house features, whole house rewires, emergency power systems, generator installs, battery backup installs, recessed lighting, and low-voltage wiring.",
    icon: "/media/Lighting/IMG_4589.jpg",
    albumType: "residential"
  },
  {
    title: "Commercial Services", 
    subtitle: "Transformers, phase converters, commercial tenant improvements, commercial services and troubleshooting, exterior lighting, high-voltage lighting, and parking lot lighting.",
    icon: "/media/Conduit/IMG_4590.jpg",
    albumType: "commercial"
  },
  {
    title: "Integrated Electrification Systems",
    subtitle: "Smart electrical panels, solar integration, EV charging, energy storage systems, and micro-grids. Create energy-efficient spaces with modern technologies that maximize your property's energy potential.",
    icon: "/media/Electrical Panels/IMG_4586.jpg",
    albumType: "electrification"
  },
  {
    title: "Smart Electrical Panels",
    subtitle: "Certified installer of Span Smart Panels. Intelligently manage solar power, home batteries, and EV charging. Enable fast Level 2 charging and future bi-directional EV chargers.",
    icon: "/media/Electrical Panels/IMG_4587.jpg",
    albumType: "smartPanels"
  },
  {
    title: "EV Charging Solutions",
    subtitle: "Level 2 EV chargers for fast charging. Future bi-directional chargers will enable both charging your car and back-feeding energy to power your home during utility outages.",
    icon: "/media/EV chargers/IMG-9290.jpg",
    albumType: "evCharging"
  },
  {
    title: "Solar Integration",
    subtitle: "Partner with leading solar installers for seamless solar installations. We handle the electrical integration to ensure safe, reliable, and long-lasting solar power systems.",
    icon: "/media/Solar/Photo-Feb-17-10-40-48-AM.jpg",
    albumType: "solar"
  }
];

class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      mouseX: 0,
      mouseY: 0,
      touching: false,
      touchStartTime: 0,
      startX: 0,
      startY: 0,
    };
  }

  handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.setState({ mouseX: x, mouseY: y });
  }

  handleMouseEnter = () => {
    this.setState({ hover: true });
  }

  handleMouseLeave = () => {
    this.setState({ hover: false });
  }

  handleClick = () => {
    // Call the parent's onCardClick function with the album type
    if (this.props.onCardClick) {
      this.props.onCardClick(this.props.albumType);
    }
  }

  handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    this.setState({
      touching: true,
      touchStartTime: Date.now(),
      startX: touch.clientX,
      startY: touch.clientY,
      mouseX: x,
      mouseY: y,
      hover: true
    });
  }

  handleTouchMove = (e) => {
    if (!this.state.touching) return;

    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    this.setState({ mouseX: x, mouseY: y });
  }

  handleTouchEnd = (e) => {
    if (!this.state.touching) return;

    const touch = e.changedTouches[0];
    const touchDuration = Date.now() - this.state.touchStartTime;
    const moved = Math.abs(this.state.startX - touch.clientX) > 10 || Math.abs(this.state.startY - touch.clientY) > 10;

    if (touchDuration < 500 && !moved) {
      this.handleClick();
    }
    this.setState({ touching: false, hover: false });
  }

  render() {
    const { title, subtitle, icon } = this.props;
    const { mouseX, mouseY, hover } = this.state;
    const cardStyle = {
      '--mouse-x': `${mouseX}px`,
      '--mouse-y': `${mouseY}px`,
      transform: hover ? 'translateY(-10px)' : 'none',
    };

    return (
      <div
        className="business-card"
        style={cardStyle}
        onMouseMove={this.handleMouseMove}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className="business-card-content">
          <div className="business-card-info-wrapper">
            <div className="business-card-info">
              <div className="business-card-info-title">
                <h3 className="font-merriweather text-2xl font-bold text-white mb-2">{title}</h3>
                <h4 className="font-merriweather text-sm text-gray-200 leading-relaxed">{subtitle}</h4>
              </div>
            </div>
          </div>
          <div className="business-card-image">
            <img src={icon} alt={title} className="w-full h-full object-cover opacity-20" />
          </div>
        </div>
      </div>
    );
  }
}

export default function SecurityPhotoAlbum() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (albumType) => {
    const photos = businessPhotos[albumType] || [];
    setCurrentPhotos(photos);
    setCurrentIndex(0);
    setLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
    setCurrentPhotos([]);
    setCurrentIndex(0);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-10 flex flex-col items-center justify-center md:mt-20"
    >
      <motion.h1
        variants={fadeIn("up", "tween", 0.2, 1)}
        id="projects"
        className="font-merriweather text-center text-2xl font-semibold md:text-5xl py-5"
      >
        Our Projects
      </motion.h1>
      <motion.div 
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="business-cards-container"
      >
        {businessLines.map((business, index) => (
          <BusinessCard
            key={index}
            title={business.title}
            subtitle={business.subtitle}
            icon={business.icon}
            albumType={business.albumType}
            onCardClick={handleCardClick}
          />
        ))}
      </motion.div>
      
      <Lightbox
        open={lightboxOpen}
        close={handleLightboxClose}
        slides={currentPhotos}
        index={currentIndex}
        on={{ view: ({ index }) => setCurrentIndex(index) }}
        plugins={[Thumbnails]}
      />
    </motion.div>
  );
}
