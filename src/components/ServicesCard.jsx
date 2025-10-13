import React, { useEffect, useState, useRef } from "react";

const ServicesCard = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Preload the critical linesofbusiness image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "/images/featured/linesofbusiness.png";
  }, []);

  // Mouse movement handler for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [imageLoaded]);

  const businessServices = [
    {
      name: "Cabling & Infrastructure",
      description: "Structured cabling and network infrastructure",
      image: "/images/featured/cableinfrastructure.jpeg",
      link: "#services",
      left: 45,
      bottom: 60,
    },
    {
      name: "Wireless Solutions",
      description: "Enterprise WiFi and wireless access points",
      image: "/images/wireless/1.png",
      link: "#services",
      left: 29,
      bottom: 62,
    },
    {
      name: "Security Systems",
      description: "Advanced CCTV and surveillance solutions",
      image: "/images/security/1.jpg",
      link: "#services",
      left: 20,
      bottom: 45,
    },
    {
      name: "Audio Visual",
      description: "Professional sound and lighting systems",
      image: "/images/featured/audiovisual.jpg",
      link: "#services",
      left: 65,
      bottom: 65,
    },

  ];

  const renderCard = (item) => {
    return (
      <div className="group-hover:opacity-100 group-hover:visible group-hover:-mt-12 flex opacity-0 invisible transition-all duration-300 ease-in-out flex-row rounded-lg shadow-lg bg-base-100 text-primary z-50 absolute cursor-pointer p-2 min-w-64 max-w-80 -ml-32 -mt-8 border border-base-300">
        <img className="w-24 h-24 object-cover rounded flex-shrink-0" src={item.image} alt={item.name} />
        <div className="flex flex-col justify-between p-2 flex-1 text-left">
          <div className="text-lg font-semibold leading-tight text-base-content text-left">{item.name}</div>
          <div className="text-sm text-base-content/70 my-1 leading-tight text-left">{item.description}</div>
          <a 
            className="btn btn-neutral btn-sm rounded-full font-garamond shadow-md no-underline inline-flex items-center justify-center self-start hover:scale-105 hover:shadow-lg hover:bg-primary hover:text-primary-content transition-all duration-200" 
            href={item.link}
          >
            learn more
          </a>
        </div>
      </div>
    );
  };

  const renderPins = () => {
    const parallaxTransform = `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`;
    
    return businessServices.map((item, index) => {
      return (
        <div
          key={index}
          className="absolute group z-20"
          style={{ 
            left: `${item.left}%`, 
            bottom: `${item.bottom}%`,
            transform: parallaxTransform,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="bg-primary/90 text-primary-content text-sm w-6 h-6 z-30 absolute rounded-full cursor-pointer shadow-lg animate-pulse flex items-center justify-center font-medium border-2 border-primary-content/20 hover:bg-primary hover:text-primary-content hover:scale-110 transition-all duration-200">
            +
          </div>
          {renderCard(item)}
        </div>
      );
    });
  };

  const renderImage = () => {
    const parallaxTransform = `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`;
    
    return (
      <div 
        ref={containerRef}
        className="relative inline-block max-w-3xl overflow-hidden rounded-lg"
        style={{ perspective: '1000px' }}
      >
        {renderPins()}
        {imageLoaded ? (
          <img
            className="opacity-100 max-w-full rounded-lg z-10 transition-all duration-300 ease-out"
            src="/images/featured/linesofbusiness.png"
            alt="Veritas Business Solutions"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            style={{ 
              transform: parallaxTransform,
              transformStyle: 'preserve-3d'
            }}
          />
        ) : (
          <div className="w-full h-64 bg-base-200 rounded-lg flex items-center justify-center z-10">
            <div className="loading loading-spinner loading-lg text-primary"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="m-2 text-center">
      {renderImage()}
    </div>
  );
};

export default ServicesCard;
