import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";

const Home = () => {
  return (
    <>
      <Hero />
      <Navbar/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop/>
    </>
  );
};

export default Home;
