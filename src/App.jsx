import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
import Map from "./components/Map";
import NavBar from "./components/NavBar";
import PhotoAlbum from "./components/PhotoAlbum";
import Services from "./components/Services";
import About from "./components/About";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="relative font-garamond">
      <NavBar />
      <Hero />
      <LogoClouds />
      <Services />
      <Testimonial />
      <About />
      <Map />
      <Contact />
      <PhotoAlbum />
      <Footer />
    </div>
  );
}

export default App;
