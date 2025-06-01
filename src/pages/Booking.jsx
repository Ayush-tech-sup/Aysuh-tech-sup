// src/pages/Booking.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed!\nName: ${name}\nService: ${service}\nDate: ${selectedDate}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-center text-rose-600 mb-6">Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          className="border p-2 rounded"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Select Service</option>
          <option>Bridal Makeup</option>
          <option>Facial</option>
          <option>Nail Art</option>
          <option>Hair Styling</option>
          <option>Threading</option>
        </select>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select Date & Time"
          showTimeSelect
          dateFormat="Pp"
          className="border p-2 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
