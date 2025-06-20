// // src/pages/About.jsx
// import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// const About = () => {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <section
//       className={`min-h-screen px-6 py-16 md:px-20 transition-colors duration-300 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">
//           About Me
//         </h2>
//         <p className="text-lg leading-relaxed mb-4">
//           Hi, I'm{" "}
//           <span className="font-semibold text-blue-500">Devashish Kumar</span> —
//           a passionate MERN Stack Developer and Backend Developer based in
//           Patna. I specialize in building secure, scalable, and high-performance
//           applications using technologies like <strong>Node.js</strong>,{" "}
//           <strong>Express.js</strong>,<strong>MongoDB</strong>,{" "}
//           <strong>SQL</strong>, and <strong>React</strong>.
//         </p>
//         <p className="text-lg leading-relaxed mb-4">
//           I’m deeply interested in backend architecture and system design. I've
//           built projects like a School Management System, Hotel Booking App, and
//           currently working on a Real-Time Food Delivery App with live order
//           tracking using <strong>Socket.io</strong>.
//         </p>
//         <p className="text-lg leading-relaxed mb-4">
//           My strengths include clean code practices, secure authentication
//           systems, and seamless user experiences. I’m also skilled with{" "}
//           <strong>Git & GitHub</strong>, and UI libraries like{" "}
//           <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong>.
//         </p>
//         <p className="text-lg leading-relaxed">
//           I’m currently pursuing my{" "}
//           <strong>BCA from Patliputra University (TPS College)</strong>, and I’m
//           committed to building efficient, user-focused digital solutions.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;

// src/pages/About.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen px-6 py-16 md:px-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-500">
          About Me
        </h2>

        {/* Introduction */}
        <p className="text-lg leading-relaxed mb-4">
          I'm{" "}
          <span className="text-blue-500 font-semibold">Devashish Kumar</span>,
          a passionate <strong>MERN Stack Developer</strong> and{" "}
          <strong>Backend Specialist</strong> based in Patna, India. I love
          crafting reliable, scalable, and efficient web solutions.
        </p>

        {/* Summary */}
        <p className="text-lg leading-relaxed mb-4">
          With a strong foundation in <strong>Node.js</strong>,{" "}
          <strong>Express.js</strong>, <strong>React</strong>, and{" "}
          <strong>MongoDB</strong>, I specialize in building full-stack
          applications that solve real-world problems. My backend expertise
          ensures secure and optimized APIs, while my frontend work focuses on
          user-friendly, responsive interfaces.
        </p>

        {/* Skills */}
        <div className="mt-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-base">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
              "PostgreSQL",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "GitHub",
            ].map((skill, index) => (
              <li
                key={index}
                className={`px-4 py-2 rounded-lg shadow text-center ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Current Status */}
        <p className="text-lg leading-relaxed mb-4">
          I'm currently pursuing my{" "}
          <strong>Bachelor of Computer Applications (BCA)</strong> from TPS
          College, Patliputra University. Apart from academics, I’m continuously
          improving my system design and backend architecture skills.
        </p>

        {/* Passion */}
        <p className="text-lg leading-relaxed">
          I thrive in environments where I can solve challenging problems,
          optimize systems, and create impactful tech solutions. My goal is to
          contribute to products that improve lives and make technology
          accessible, secure, and scalable.
        </p>
      </div>
    </section>
  );
};

export default About;
