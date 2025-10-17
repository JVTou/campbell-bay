import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
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
      <LogoClouds />
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
