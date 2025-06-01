import React from "react";

const Testimonials = () => {
  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-rose-600 mb-6">Customer Feedback</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <video controls className="w-72 rounded-lg shadow">
          <source src="/videos/Mehandi.mp4" type="video/mp4" />
        </video>
        <video controls className="w-72 rounded-lg shadow">
          <source src="/videos/Acadmy_Video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Testimonials;