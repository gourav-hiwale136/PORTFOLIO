import { motion } from "framer-motion";
import { DiJavascript1, DiHtml5, DiCss3, DiGit } from "react-icons/di";
import { Monitor, Server, Database } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <DiJavascript1 className="text-yellow-400 w-10 h-10" />,
    },
    { name: "HTML", icon: <DiHtml5 className="text-orange-500 w-10 h-10" /> },
    { name: "CSS", icon: <DiCss3 className="text-blue-500 w-10 h-10" /> },
    {
      name: "Git & GitHub",
      icon: <DiGit className="text-red-500 w-10 h-10" />,
    },
    { name: "React", icon: <Monitor className="w-10 h-10 text-teal-400" /> },
    { name: "Node.js", icon: <Server className="w-10 h-10 text-green-400" /> },
    {
      name: "MongoDB",
      icon: <Database className="w-10 h-10 text-green-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Monitor className="w-10 h-10 text-indigo-400" />,
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center bg-gray-800 w-28 h-28 rounded-xl shadow-lg cursor-pointer"
          >
            <div className="mb-2">{skill.icon}</div>
            <p className="text-gray-300 text-center font-medium text-sm">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
