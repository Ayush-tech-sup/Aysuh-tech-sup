// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-rose-700 mb-6">Contact Us</h2>

      <div className="space-y-4 text-lg">
        <p><strong>Phone:</strong> <a href="tel:+918787276068" className="text-blue-600 hover:underline">+91 87872 76068</a></p>
        <p><strong>Email:</strong> <a href="mailto:info@shreeradhebeauty.com" className="text-blue-600 hover:underline">info@shreeradhebeauty.com</a></p>
        <p><strong>Location:</strong> Shree Radhe Beauty Parlour, Near Tambeshwar RD, Awas Vikas, Fatehpur Uttar Pradesh 212601, India.</p>

        {/* Google Map Embed */}
        <iframe
          title="Google Map"
          className="w-full h-60 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.999999!2d80.999999!3d26.850000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x000000000000000%3AShree+Radhe+Beauty+Parlour!5e0!3m2!1sen!2sin!4v000000000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* WhatsApp Button */}
        <div className="mt-6">
          <a
  href="https://wa.me/918787276068?text=Hello%20Neha%20ji%2C%20I%20want%20to%20inquire%20about%20bridal%20booking."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-lg font-medium transition"
>
  {/* WhatsApp Logo SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12.04 2.003c-5.49 0-9.96 4.472-9.96 9.961 0 1.757.458 3.49 1.329 5.003l-1.379 5.05 5.17-1.357c1.455.795 3.09 1.216 4.83 1.216 5.49 0 9.96-4.472 9.96-9.961s-4.47-9.961-9.96-9.961zm0 18.102c-1.476 0-2.912-.396-4.17-1.145l-.297-.174-3.068.805.827-2.992-.19-.308c-.81-1.318-1.237-2.837-1.237-4.374 0-4.493 3.654-8.147 8.146-8.147s8.146 3.654 8.146 8.147-3.653 8.148-8.147 8.148zm4.668-6.165c-.255-.127-1.507-.743-1.741-.828-.234-.086-.405-.127-.576.127-.17.254-.662.828-.813 1-.149.17-.298.191-.552.064-.255-.127-1.077-.396-2.052-1.26-.759-.676-1.27-1.51-1.42-1.765-.149-.255-.017-.392.111-.518.113-.112.254-.298.381-.446.128-.149.17-.255.255-.425.085-.17.043-.319-.021-.446-.064-.127-.576-1.392-.789-1.905-.208-.497-.42-.429-.576-.437l-.491-.009c-.17 0-.446.064-.679.319-.234.255-.89.869-.89 2.117 0 1.248.912 2.454 1.039 2.623.127.17 1.794 2.743 4.354 3.844.609.262 1.084.418 1.454.535.611.194 1.167.166 1.605.101.49-.073 1.507-.616 1.722-1.212.213-.596.213-1.107.149-1.212-.064-.106-.234-.17-.49-.298z" />
  </svg>
  WhatsApp Us
</a>
{/* Instagram Button */}
<div className="mt-4">
  <a
    href="https://www.instagram.com/tayush_tripathi?igsh=dmkwZjh3aXN6MG51"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white py-2 px-4 rounded-full text-lg font-medium transition"
  >
    {/* Instagram Logo SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.77.131 4.548.366 3.5 1.414 2.452 2.462 2.217 3.684 2.158 4.966.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.059 1.282.294 2.504 1.342 3.552 1.048 1.048 2.27 1.283 3.552 1.342C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.504-.294 3.552-1.342 1.048-1.048 1.283-2.27 1.342-3.552.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.282-.294-2.504-1.342-3.552C19.452 2.452 18.23 2.217 16.948 2.158 15.668 2.1 15.259 2.087 12 2.087zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
    </svg>
    Follow on Instagram
  </a>
</div>


        </div>
      </div>
    </div>
  );
};

export default Contact;
