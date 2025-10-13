import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { fadeIn, staggerContainer } from "../utils/motion";

// Photo data for each business line
const businessPhotos = {
  security: [
    { src: "/images/wireless/1.png", width: 1567, height: 781 },
    { src: "/images/wireless/2.jpg", width: 1920, height: 2560 },
    { src: "/images/wireless/3.jpg", width: 1920, height: 3413 },
    { src: "/images/wireless/4.jpg", width: 1920, height: 1305 },
    { src: "/images/wireless/5.jpg", width: 1920, height: 2561 },
    { src: "/images/wireless/6.jpg", width: 1920, height: 1440 },
    { src: "/images/wireless/7.jpg", width: 1920, height: 2560 },
    { src: "/images/wireless/8.jpg", width: 3072, height: 4080 },
    { src: "/images/wireless/9.jpg", width: 3072, height: 4080 },
  ],
  data: [
    { src: "/images/data/data1.jpg", width: 3072, height: 4080 },
    { src: "/images/data/data2.jpg", width: 3072, height: 4080 },
    { src: "/images/data/data3.jpg", width: 1920, height: 2560 },
    { src: "/images/data/data4.jpg", width: 1920, height: 2560 },
    { src: "/images/data/data5.jpg", width: 3264, height: 2448 },
  ],
  cctv: [
    { src: "/images/cctv/1.jpg", width: 1920, height: 2560 },
    { src: "/images/cctv/2.jpg", width: 1920, height: 3413 },
    { src: "/images/cctv/3.jpg", width: 1920, height: 2560 },
    { src: "/images/cctv/4.jpg", width: 1920, height: 3412 },
    { src: "/images/cctv/5.jpg", width: 1920, height: 2560 },
    { src: "/images/cctv/6.jpg", width: 1920, height: 2560 },
    { src: "/images/cctv/7.jpg", width: 1920, height: 2560 },
  ],
  consultation: [
    { src: "/images/consultation/alvaro-reyes-qWwpHwip31M-unsplash.jpg", width: 5184, height: 3456 },
    { src: "/images/consultation/benjamin-child-GWe0dlVD9e0-unsplash.jpg", width: 5184, height: 3456 },
    { src: "/images/consultation/charlesdeluvio-Lks7vei-eAg-unsplash.jpg", width: 5418, height: 3612 },
    { src: "/images/consultation/consultation1.jpg", width: 7360, height: 4912 },
    { src: "/images/consultation/headway-5QgIuuBxKwM-unsplash.jpg", width: 5472, height: 3648 },
    { src: "/images/consultation/priscilla-du-preez-nNMBa7Y1Ymk-unsplash.jpg", width: 3407, height: 5111 },
    { src: "/images/consultation/sean-pollock-PhYq704ffdA-unsplash.jpg", width: 6000, height: 4000 },
  ],
  it: [
    { src: "/images/IT/ilya-pavlov-OqtafYT5kTw-unsplash.jpg", width: 3543, height: 2365 },
    { src: "/images/IT/jainath-ponnala-9wWX_jwDHeM-unsplash.jpg", width: 6720, height: 4480 },
    { src: "/images/IT/markus-spiske-70Rir5vB96U-unsplash.jpg", width: 5760, height: 3840 },
    { src: "/images/IT/sammyayot254-knUZi7dzb58-unsplash.jpg", width: 2122, height: 2829 },
    { src: "/images/IT/sammyayot254-vIQDv6tUHYk-unsplash.jpg", width: 2828, height: 2122 },
    { src: "/images/IT/samuel-ramos-tYvZUVEve6s-unsplash.jpg", width: 6000, height: 4000 },
  ]
};

const businessLines = [
  {
    title: "Security Services",
    subtitle: "Comprehensive security solutions including access control, surveillance systems, and alarm monitoring to protect your business assets.",
    icon: "/images/featured/security.jpg",
    albumType: "security"
  },
  {
    title: "Data Infrastructure", 
    subtitle: "Robust data center solutions, network infrastructure, and data management systems to ensure reliable connectivity and data protection.",
    icon: "/images/featured/cableinfrastructure.jpeg",
    albumType: "data"
  },
  {
    title: "CCTV",
    subtitle: "Advanced video surveillance systems with high-definition cameras, remote monitoring, and intelligent analytics for complete security coverage.",
    icon: "/images/featured/security.jpg",
    albumType: "cctv"
  },
  {
    title: "Consultation Services",
    subtitle: "Expert technology consulting, system design, and project management to help you make informed decisions about your IT infrastructure.",
    icon: "/images/featured/consultation.jpg",
    albumType: "consultation"
  },
  {
    title: "IT Services",
    subtitle: "Complete IT solutions including hardware, software, network management, and technical support for modern businesses.",
    icon: "/images/featured/IT.jpg",
    albumType: "it"
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
                <h3 className="font-garamond text-2xl font-bold text-white mb-2">{title}</h3>
                <h4 className="font-garamond text-sm text-gray-200 leading-relaxed">{subtitle}</h4>
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
        className="font-garamond text-center text-2xl font-semibold md:text-5xl py-5"
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
