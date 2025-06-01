// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

// const Home = () => {
  function Home() {
  return (
    <>
    
      <HeroSection />
      <Services />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;
