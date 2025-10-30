// Optimized logo imports with vite-imagetools
import LevitonLogo from "../assets/logo/leviton.png?w=200&format=webp&as=url";
import SquareDLogo from "../assets/logo/square-d.webp?w=200&format=webp&as=url";
import FranklinLogo from "../assets/logo/franklin.png?w=200&format=webp&as=url";
import LutronLogo from "../assets/logo/lutron.png?w=200&format=webp&as=url";
import SiemensLogo from "../assets/logo/siemens.svg"; // SVG doesn't need optimization
import GeneracLogo from "../assets/logo/generac.png?w=200&format=webp&as=url";
import SpanLogo from "../assets/logo/span.png?w=200&format=webp&as=url";
import TeslaLogo from "../assets/logo/tesla-powerwall.png?w=200&format=webp&as=url";

// Simple utility function to get logo data
export const getLogos = () => {
  const logoData = [
    {
      src: LevitonLogo,
      alt: 'Leviton',
      filename: 'leviton.png'
    },
    {
      src: SquareDLogo,
      alt: 'Square D',
      filename: 'square-d.webp'
    },
    {
      src: FranklinLogo,
      alt: 'Franklin',
      filename: 'franklin.png'
    },
    {
      src: LutronLogo,
      alt: 'Lutron',
      filename: 'lutron.png'
    },
    {
      src: SiemensLogo,
      alt: 'Siemens',
      filename: 'siemens.svg'
    },
    {
      src: GeneracLogo,
      alt: 'Generac',
      filename: 'generac.png'
    },
    {
      src: SpanLogo,
      alt: 'Span',
      filename: 'span.png'
    },
    {
      src: TeslaLogo,
      alt: 'Tesla Powerwall Certified Installer',
      filename: 'tesla-powerwall.png'
    }
  ];

  return logoData;
};
