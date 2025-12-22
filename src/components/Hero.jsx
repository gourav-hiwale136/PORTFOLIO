import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-700 text-white pt-24"
    >
      {/* Text Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-teal-400">
          Hi, I’m Gourav
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-lg">
          Full Stack Web Developer. I build interactive and scalable web
          applications using React, Node.js, and MongoDB.
        </p>
        <a
          href="#projects"
          className="inline-block bg-teal-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition w-full md:w-auto text-center mt-4 hover:bg-teal-400"
        >
          See My Work
        </a>
      </motion.div>

      {/* Decorative Circle */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center"
      >
        <div className="w-48 md:w-96 h-48 md:h-96 rounded-full bg-gradient-to-br from-teal-400 via-indigo-500 to-purple-500 opacity-70 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
