// import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import profilePic from "../assets/profile.jpg"; // apna image daalna na bhoolna

// const Home = () => {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <section
//       className={`w-full py-12 md:py-20 ${
//         darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Left Side Text */}
//         <div className="flex-1">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Hey, I'm <span className="text-blue-500">Your Name</span>
//           </h1>
//           <p
//             className={`mt-4 text-lg md:text-xl ${
//               darkMode ? "text-gray-300" : "text-gray-800"
//             }`}
//           >
//             I'm a passionate <strong>Full Stack Developer</strong> who loves
//             building beautiful and functional web applications.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-4">
//             <a
//               href="#projects"
//               className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
//             >
//               View Projects
//             </a>
//             <a
//               href="#contact"
//               className={`px-6 py-3 rounded-md border ${
//                 darkMode
//                   ? "border-white text-white hover:bg-white hover:text-black"
//                   : "border-black text-black hover:bg-black hover:text-white"
//               } transition`}
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <img
//             src={profilePic}
//             alt="Profile"
//             className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-500"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import profilePic from "../assets/profile.jpg";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`w-full py-12 md:py-20 ${
        darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hey, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <p
            className={`mt-4 text-lg md:text-xl ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            I'm a passionate <strong>Full Stack Developer</strong>.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-md border ${
                darkMode
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              } transition`}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={profilePic}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-500"
          />
        </div>
      </div>

      {/* Sections */}
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </section>
  );
};

export default Home;
