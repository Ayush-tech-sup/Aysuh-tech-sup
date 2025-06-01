import React from "react";

const Gallery = () => {
  return (
    <div className="bg-pink-50 py-10">
      <h2 className="text-center text-3xl font-bold text-rose-600 mb-6">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
        <img src="/images/Mehandi.webp" alt="Work" className="rounded-xl shadow-md" />
        <img src="/images/Hand Menhandi.webp" alt="Work" className="rounded-xl shadow-md" />
        <img src="/images/Mehandi3.webp" alt="Work" className="rounded-xl shadow-md" />
      </div>
    </div>
  );
};

export default Gallery;