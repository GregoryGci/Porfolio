/**
 * PROJECTS COMPONENT
 *
 * Section des projets du portfolio
 */
import { motion } from "framer-motion"; // eslint-disable-line

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tudolist",
      description:
        "A simple and efficient task management application.",
      tech: ["HTML", "CSS vanilla", "JavaScript"],
      image: "/assets/images/tudo-app.jpg",
      url: "https://gregorygci.github.io/-TodoApp/",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Modern weather application with detailed forecasts",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      image: "/assets/images/weather-app.jpg",
      url: "https://waetherapp.netlify.app/",
    },
    {
      id: 3,
      title: "Prisme App",
      description: "AI-powered surveillance application with intelligent monitoring and real-time alerts",
      tech: ["ReactNative", "TypeScript", "ExpoGo"],
      image: "/assets/images/Veilleia-app.jpg",
      url: "https://github.com/GregoryGci/prisme-app",
    },
  ];

  return (
    <section className="py-20 px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
            Projects
          </h2>
          <p className="text-gray-400 text-lg font-display">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 overflow-hidden block cursor-pointer"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
            >
              {/* Image de fond au hover */}
              {project.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Contenu par-dessus */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3 font-mono group-hover:opacity-0 transition-opacity duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 font-display group-hover:opacity-0 transition-opacity duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/80 text-white text-sm rounded font-semibold shadow-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
