import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Booking from "./pages/Booking";
import Seats from "./pages/Seats";
import GalleryPage from "./pages/GalleryPage";
import FeedbackPage from "./pages/FeedbackPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <Gallery />
              <Testimonials />
            </>
          }
        /> */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
