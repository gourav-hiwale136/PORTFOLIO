import { motion } from "framer-motion";

const About = () => {
  const strengths = [
    "Hardworking",
    "Quick Learner",
    "Self-Motivated",
    "Problem Solver",
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* About Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-teal-400 mb-6">About Me</h2>
          <p className="text-gray-300 mb-4">
            I’m a pharmacy graduate turned self-taught full-stack developer. I
            love building web applications that are scalable, interactive, and
            visually appealing.
          </p>
          <p className="text-gray-300 mb-4">
            My journey as a self-taught developer has made me disciplined,
            persistent, and eager to learn new technologies.
          </p>
        </motion.div>

        {/* Strengths */}
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          {strengths.map((strength, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg text-center cursor-pointer"
            >
              <p className="font-semibold text-teal-400 text-lg">{strength}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
