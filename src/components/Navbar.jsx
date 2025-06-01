import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="bg-white shadow">
    //   <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    //     <div className="text-2xl font-bold text-rose-600">YourBrand</div>
    //     <div className="space-x-4">
    //       <Link to="/" className="text-gray-700 hover:text-rose-600"> Home </Link>
    //       <Link to="/services" className="text-gray-700 hover:text-rose-600"> Services </Link>
    //       <Link to="/Booking" className="text-gray-700 hover:text-rose-600"> Booking </Link>
    //       <Link to="/Seats" className="text-gray-700 hover:text-rose-600"> Seats </Link>
    //       <Link to="/Gallery" className="text-gray-700 hover:text-rose-600"> Gallery </Link>
    //       <Link to="/feedback" className="text-gray-700 hover:text-rose-600"> feedback </Link>
    //       <Link to="/About" className="text-gray-700 hover:text-rose-600"> About </Link>
    //       <Link to="/Contact" className="text-gray-700 hover:text-rose-600"> Contact </Link>
    //  </div>
    //   </div>
    // </nav>

    <nav className="bg-pink-100 text-rose-700 py-4 shadow-md">
      <ul className="flex justify-center gap-6 font-semibold text-lg">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/seats">Seats</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
