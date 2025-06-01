import React from "react";

const services = [
  { title: "Bridal Booking", price: "₹5000", icon: "👰" },
  { title: "Facial", price: "₹800", icon: "💆‍♀️" },
  { title: "Nail Art", price: "₹600", icon: "💅" },
  { title: "Hair Styling", price: "₹1000", icon: "💇‍♀️" },
  { title: "Hair Color", price: "₹1200", icon: "🎨" },
  { title: "Threading", price: "₹100", icon: "🧵" },
  { title: "Makeup", price: "₹3000", icon: "💄" },
];

const ServiceList = ({ showAll = false }) => {
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {displayedServices.map((service, index) => (
        <div
          key={index}
          className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <div className="text-4xl mb-2">{service.icon}</div>
          <h3 className="text-xl font-semibold text-rose-600">{service.title}</h3>
          {showAll && <p className="text-gray-700 mt-1">{service.price}</p>}
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
