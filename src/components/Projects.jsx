import { motion } from "framer-motion";

const projects = [
  { title: "Task Manager", desc: "CRUD App with Auth", github: "#", live: "#" },
  {
    title: "E-commerce Mini App",
    desc: "Cart & Products",
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    desc: "Real-time weather app using API",
    github: "#",
    live: "#",
  },
  {
    title:"A healthcare platform to book appointments, manage patients, and connect doctors.",
    desc: "Healthcare web platform",
    github: "https://github.com/gourav-hiwale136/Mediconnect",
    live: "https://mediconnectweb-xi.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative group bg-gray-800 rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.desc}</p>
            </div>
            <div className="absolute inset-0 bg-black/60 flex flex-col sm:flex-row items-center justify-center opacity-0 group-hover:opacity-100 transition gap-3">
              <a
                href={project.github}
                className="px-4 py-2 bg-teal-500 rounded-full font-semibold hover:bg-teal-400 w-32 text-center"
              >
                GitHub
              </a>
              <a
                href={project.live}
                className="px-4 py-2 bg-indigo-500 rounded-full font-semibold hover:bg-indigo-400 w-32 text-center"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
