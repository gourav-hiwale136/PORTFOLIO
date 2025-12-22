import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 bg-gray-800 rounded-3xl shadow-lg hover:scale-105 transform transition w-full"
        >
          <h2 className="text-4xl font-bold text-teal-400 mb-6">Contact Me</h2>
          <p className="text-gray-300 mb-4">
            Reach out for collaboration or projects!
          </p>
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-2 text-gray-300">
              <Mail className="w-5 h-5 text-teal-400" />{" "}
              <a
                href="mailto:your-email@gmail.com"
                className="underline hover:text-teal-400">
                gauravhiwale136@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Github className="w-5 h-5 text-teal-400" />{" "}
              <a href="#" className="underline hover:text-teal-400">
                https://github.com/gourav-hiwale136
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Linkedin className="w-5 h-5 text-teal-400" />{" "}
              <a href="#" className="underline hover:text-teal-400">
                linkedin.com/in/Gourav Hiwale
              </a>
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:block w-full h-80 bg-gradient-to-br from-indigo-700 via-purple-800 to-indigo-600 rounded-3xl animate-bounce opacity-80"
        ></motion.div>
      </div>
    </section>
  );
};

export default Contact;
