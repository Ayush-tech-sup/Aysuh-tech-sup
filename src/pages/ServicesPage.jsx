import React from "react";
import ServiceList from "../components/ServiceList";

const ServicesPage = () => {
  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-rose-600 mb-6">All Services</h2>
      <ServiceList showAll={true} />
    </div>
  );
};

export default ServicesPage;
