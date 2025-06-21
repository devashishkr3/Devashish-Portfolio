//simple footer

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`w-full py-6 mt-12 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Name & Year */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Center - Quick Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right - Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com/devashishkr3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/devashishkr3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:dk3127197@gmail.com" className="hover:text-blue-500">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
