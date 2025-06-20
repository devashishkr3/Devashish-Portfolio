//Navbar
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const getLinkClasses = (isActive) =>
    `text-base font-medium transition duration-200 ${
      isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
    }`;

  return (
    <nav
      className={`w-full sticky top-0 z-50 shadow ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-tight">
          <span className="text-blue-500">{"<"}</span>YourName
          <span className="text-blue-500">{"/>"}</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => getLinkClasses(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className={`md:hidden px-6 pb-4 space-y-4 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={toggleDarkMode}
            className="mt-2 flex items-center gap-2 text-base"
          >
            {darkMode ? (
              <>
                <Sun size={18} />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={18} />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
