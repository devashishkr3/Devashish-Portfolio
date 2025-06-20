// src/pages/Contact.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center mb-12">
          Have a question, a project, or just want to say hello? Feel free to
          reach out to me.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              className={`w-full p-3 rounded-lg outline-none ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              }`}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className={`w-full p-3 rounded-lg outline-none ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              }`}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="5"
              className={`w-full p-3 rounded-lg outline-none resize-none ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              }`}
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
