import { useState } from "react";
import Customers from "./components/Customers";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialGame from "./components/SocialGame";
import VirtualGP from "./components/VirtualGP";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Social from "./components/Socail";




function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <VirtualGP />
      <Gallery />
      <SocialGame />
      <Booking />
      {/* <VIP /> */}
      <Customers />
      <Contact />
      <Social  />
      <Footer />
    </div>
  );
}

export default App;
