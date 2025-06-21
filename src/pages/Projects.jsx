//Project Showcase on the web page
import React from "react";
import { useContext } from "react";
import { projects } from "../data/project";
import ProjectCard from "../components/ProjectCard";
import { ThemeContext } from "../context/ThemeContext";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h2
        className={`text-3xl font-bold text-center mb-10 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        My Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
