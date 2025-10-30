import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PhotoAlbum from "./components/PhotoAlbum";
import Services from "./components/Services";
import AboutMapSection from "./components/AboutMapSection";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="relative font-merriweather overflow-x-hidden">
      <NavBar />
      <Hero />
      <Services />
      <Testimonial />
      <AboutMapSection />
      <Contact />
      <PhotoAlbum />
      <Footer />
    </div>
  );
}

export default App;
