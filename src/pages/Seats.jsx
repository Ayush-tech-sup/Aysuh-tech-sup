// src/pages/Seats.jsx
import React, { useState } from "react";

const courses = [
  { id: 1, name: "Bridal Makeup Course", total: 10, filled: 7 },
  { id: 2, name: "Hair Styling Course", total: 8, filled: 4 },
  { id: 3, name: "Nail Art Course", total: 6, filled: 6 },
  { id: 4, name: "Skin & Facial Course", total: 5, filled: 2 },
];

const Seats = () => {
  const [form, setForm] = useState({ name: "", phone: "", course: "" });

  const availableCourses = courses.filter(c => c.total > c.filled);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered!\nName: ${form.name}\nCourse: ${form.course}`);
    setForm({ name: "", phone: "", course: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center text-rose-700 mb-6">
        Seats Availability - Beauty Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map(course => {
          const available = course.total - course.filled;
          return (
            <div
              key={course.id}
              className={`p-4 rounded-xl shadow-lg border ${
                available === 0 ? "bg-gray-200" : "bg-pink-100"
              }`}
            >
              <h3 className="text-xl font-semibold">{course.name}</h3>
              <p>Total Seats: {course.total}</p>
              <p>Filled Seats: {course.filled}</p>
              <p className="font-bold text-rose-600">
                Available: {available === 0 ? "Full" : available}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-white shadow-xl p-6 rounded-xl">
        <h3 className="text-2xl text-rose-600 font-bold mb-4 text-center">
          Course Registration Form
        </h3>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <select
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Course</option>
            {availableCourses.map((c) => (
              <option key={c.id}>{c.name}</option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Seats;
