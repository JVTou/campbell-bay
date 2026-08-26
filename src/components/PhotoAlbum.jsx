import React, { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
// motion removed from this section to avoid viewport stacking issues

// imagetools optimized imports - Conduit (using optimized widths)
import C4590Src from "../assets/conduit/IMG_4590.jpg?w=1200&format=webp&as=url";
import C6534Src from "../assets/conduit/IMG_6534.jpg?w=1200&format=webp&as=url";
import C7219Src from "../assets/conduit/IMG_7219.jpg?w=1200&format=webp&as=url";
import C0747Src from "../assets/conduit/IMG-0747.jpg?w=1600&format=webp&as=url";
import C0750Src from "../assets/conduit/IMG-0750.jpg?w=1600&format=webp&as=url";
import CDiscussionSrc from "../assets/conduit/discussion.jpg?w=1200&format=webp&as=url";
import CBlueprintsSrc from "../assets/conduit/blueprints.jpg?w=1200&format=webp&as=url";
import CElectricianSrc from "../assets/conduit/electrician.jpg?w=1200&format=webp&as=url";

// imagetools optimized imports - Panels
import P4586Src from "../assets/panels/IMG_4586.jpg?w=1200&format=webp&as=url";
import P4587Src from "../assets/panels/IMG_4587.jpg?w=1200&format=webp&as=url";
import P4588Src from "../assets/panels/IMG_4588.jpg?w=1200&format=webp&as=url";
import P4591Src from "../assets/panels/IMG_4591.jpg?w=1200&format=webp&as=url";
import P4592Src from "../assets/panels/IMG_4592.jpg?w=1200&format=webp&as=url";
import P5858Src from "../assets/panels/IMG_5858.jpg?w=1200&format=webp&as=url";
import P5986Src from "../assets/panels/IMG_5986.jpg?w=1200&format=webp&as=url";
import P6503Src from "../assets/panels/IMG_6503.jpg?w=1200&format=webp&as=url";
import P7365Src from "../assets/panels/IMG_7365.jpg?w=1200&format=webp&as=url";
import P7428Src from "../assets/panels/IMG_7428.jpg?w=1200&format=webp&as=url";
import P7520Src from "../assets/panels/IMG_7520.jpg?w=1200&format=webp&as=url";
import P7792Src from "../assets/panels/IMG_7792.jpg?w=1200&format=webp&as=url";
import P7793Src from "../assets/panels/IMG_7793.jpg?w=1200&format=webp&as=url";
import P7794Src from "../assets/panels/IMG_7794.jpg?w=1200&format=webp&as=url";
import P7795Src from "../assets/panels/IMG_7795.jpg?w=1200&format=webp&as=url";
import P7797Src from "../assets/panels/IMG_7797.jpg?w=1200&format=webp&as=url";
import P7798Src from "../assets/panels/IMG_7798.jpg?w=1200&format=webp&as=url";
import P7799Src from "../assets/panels/IMG_7799.jpg?w=1200&format=webp&as=url";
import P7800Src from "../assets/panels/IMG_7800.jpg?w=1200&format=webp&as=url";
import P0754Src from "../assets/panels/IMG-0754.jpg?w=1600&format=webp&as=url";
import P2025Src from "../assets/panels/PHOTO-2025-11-11-14-15-31.jpg?w=1600&format=webp&as=url";

// imagetools optimized imports - Chargers
import CH9290Src from "../assets/chargers/IMG-9290.jpg?w=1600&format=webp&as=url";
import CH18031Src from "../assets/chargers/18031199-2b42-42d7-bdaf-8abba775fedc-1152x1536.jpg?w=1200&format=webp&as=url";
import CH89e3Src from "../assets/chargers/89e38164-0cf8-47bd-8192-21654cbe2467.jpg?w=1200&format=webp&as=url";

// imagetools optimized imports - Solar
import SOLAR1Src from "../assets/solar/Photo-Feb-17-10-40-48-AM.jpg?w=1600&format=webp&as=url";

// Photo data for each business line with optimized images
const businessPhotos = {
  commercial: [
    { src: C4590Src, width: 740, height: 1334 },
    { src: C6534Src, width: 740, height: 1334 },
    { src: C7219Src, width: 740, height: 1334 },
    { src: C0747Src, width: 3024, height: 4032 },
    { src: C0750Src, width: 4032, height: 3024 },
    { src: CDiscussionSrc, width: 682, height: 1024 },
    { src: CBlueprintsSrc, width: 682, height: 1024 },
    { src: CElectricianSrc, width: 682, height: 1024 },
  ],
  electrification: [
    { src: P4586Src, width: 750, height: 1334 },
    { src: P4587Src, width: 750, height: 1334 },
    { src: P4588Src, width: 750, height: 1334 },
    { src: P4591Src, width: 750, height: 1334 },
    { src: P4592Src, width: 750, height: 1334 },
    { src: P5858Src, width: 714, height: 960 },
    { src: P5986Src, width: 750, height: 1334 },
    { src: P6503Src, width: 750, height: 1334 },
    { src: P7365Src, width: 750, height: 1334 },
    { src: P7428Src, width: 750, height: 1334 },
    { src: P7520Src, width: 750, height: 1334 },
    { src: P7792Src, width: 750, height: 1334 },
    { src: P7793Src, width: 750, height: 1334 },
    { src: P7794Src, width: 750, height: 1334 },
    { src: P7795Src, width: 750, height: 1334 },
    { src: P7797Src, width: 750, height: 1334 },
    { src: P7798Src, width: 750, height: 1334 },
    { src: P7799Src, width: 750, height: 1334 },
    { src: P7800Src, width: 750, height: 1334 },
    { src: P0754Src, width: 3024, height: 4032 },
  ],
  smartPanels: [
    { src: P2025Src, width: 3024, height: 4032 },
  ],
  evCharging: [
    { src: CH9290Src, width: 3024, height: 4032 },
    { src: CH18031Src, width: 1152, height: 1536 },
    { src: CH89e3Src, width: 1200, height: 1600 },
  ],
  solar: [
    { src: SOLAR1Src, width: 4032, height: 3024 },
  ]
};

const businessLines = [
  {
    title: "Commercial Services", 
    subtitle: "Transformers, phase converters, commercial tenant improvements, commercial services and troubleshooting, exterior lighting, high-voltage lighting, and parking lot lighting.",
    icon: "/media/Conduit/IMG_4590.jpg",
    albumType: "commercial"
  },
  {
    title: "Integrated Electrification Systems",
    subtitle: "Smart electrical panels, solar integration, EV charging, energy storage systems, and micro-grids. Create energy-efficient spaces with modern technologies that maximize your property's energy potential.",
    icon: "/media/Panels/IMG_4586.jpg",
    albumType: "electrification"
  },
  {
    title: "Smart Electrical Panels",
    subtitle: "Certified installer of Span Smart Panels. Intelligently manage solar power, home batteries, and EV charging. Enable fast Level 2 charging and future bi-directional EV chargers.",
    icon: "/media/Panels/IMG_4587.jpg",
    albumType: "smartPanels"
  },
  {
    title: "EV Charging Solutions",
    subtitle: "Level 2 EV chargers for fast charging. Future bi-directional chargers will enable both charging your car and back-feeding energy to power your home during utility outages.",
    icon: "/media/Chargers/IMG-9290.jpg",
    albumType: "evCharging"
  },
  {
    title: "Solar Integration",
    subtitle: "Partner with leading solar installers for seamless solar installations. We handle the electrical integration to ensure safe, reliable, and long-lasting solar power systems.",
    icon: "/media/Solar/Photo-Feb-17-10-40-48-AM.jpg",
    albumType: "solar"
  }
];

// Cards UI removed in favor of masonry tiles + lightbox

export default function SecurityPhotoAlbum() {
  const [currentAlbumKey, setCurrentAlbumKey] = useState(null);
  const [index, setIndex] = useState(-1);

  const currentSlides = currentAlbumKey ? businessPhotos[currentAlbumKey] : [];

  return (
    <div
      className="mt-10 md:mt-24 scroll-mt-24 flex flex-col items-center justify-center px-4 md:px-8 relative z-10"
    >
      <h1
        id="projects"
        className="font-merriweather text-center text-2xl font-semibold md:text-5xl py-5 text-white"
      >
        Our Projects
      </h1>
      <div className="w-full max-w-6xl">
        {businessLines.map((business, i) => (
          <section
            key={business.title}
            className="mb-12"
          >
            <h2 className="font-merriweather text-xl md:text-3xl font-bold text-white mb-2">
              {business.title}
            </h2>
            <p className="text-sm md:text-base text-white/80 mb-4">
              {business.subtitle}
            </p>

            <MasonryPhotoAlbum
              photos={businessPhotos[business.albumType] || []}
              columns={(containerWidth) => {
                if (containerWidth < 640) return 2;
                if (containerWidth < 1024) return 3;
                return 4;
              }}
              spacing={8}
              sizes={{ size: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1024px" }}
              onClick={({ index }) => {
                setCurrentAlbumKey(business.albumType);
                setIndex(index);
              }}
            />
          </section>
        ))}
      </div>

      <Lightbox
        slides={currentSlides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
