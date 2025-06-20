//
import { ExternalLink, Github } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const ProjectCard = ({ project }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div>
        <h3
          className={`text-xl font-bold mb-2 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {project.title}
        </h3>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${
                darkMode
                  ? "bg-blue-800 text-blue-200"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-sm hover:text-blue-500 ${
              darkMode
                ? "text-gray-200 dark:hover:text-blue-400"
                : "text-gray-700"
            }`}
          >
            <Github size={18} />
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-sm hover:text-blue-500 ${
              darkMode
                ? "text-gray-200 dark:hover:text-blue-400"
                : "text-gray-700"
            }`}
          >
            <ExternalLink size={18} />
            Live Site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
