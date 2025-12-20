import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll"; // For smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center text-gray-900 font-bold text-lg">
            GH
          </div>
          <span className="hidden md:inline text-xl font-semibold text-teal-400">
            Full Stack Dev
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer font-medium text-gray-300 hover:text-teal-400 transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 flex flex-col items-center py-4 space-y-4">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-300 hover:text-teal-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
