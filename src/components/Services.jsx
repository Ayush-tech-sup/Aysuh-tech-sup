import React from "react";
import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-rose-600 mb-6">Our Services</h2>
      <ServiceList showAll={false} />
    </div>
  );
};

export default Services;

// import React from "react";

// const Services = () => {
//   const services = [
//     "Bridal Booking",
//     "Facial",
//     "Nail Art",
//     "Hair Styling",
//     "Hair Color",
//     "Threading",
//     "Makeup",
//   ];

//   return (
//     <div className="py-10 bg-white text-center">
//       <h2 className="text-3xl font-bold text-rose-600 mb-6">Our Services</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
//         {services.map((service, index) => (
//           <div key={index} className="bg-pink-50 p-4 rounded-xl shadow">
//             {service}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
