import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; 
import logo from "../assets/logointelion.png";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`flex justify-between items-center px-6 md:px-20 py-4 transition-all ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } relative`}
    >
      <Link to="HeroSection" smooth={true} duration={500} offset={-50}>
        <img
          src={logo}
          alt="Intelion Logo"
          className="h-10 cursor-pointer"
        />
      </Link>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX size={24} className={`${theme === "dark" ? "text-white" : "text-black"}`} />
          ) : (
            <FiMenu size={24} className={`${theme === "dark" ? "text-white" : "text-black"}`} />
          )}
        </button>
      </div>

      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto p-5 md:p-0 transition-all ${
          isOpen ? "flex flex-col items-center z-50 space-y-4 md:space-y-0" : "hidden md:flex"
        } ${
          theme === "dark"
            ? "bg-black text-white md:bg-transparent"
            : "bg-white text-black md:bg-transparent"
        } shadow-md md:shadow-none md:flex-row md:gap-8`}
      >
        <li>
          <Link
            to="HeroSection"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="Services"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setIsOpen(false)}
          >
            Services & Solutions
          </Link>
        </li>
        <li>
          <Link
            to="Form"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>

        <li className="md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </li>
      </ul>

      <button
        onClick={toggleTheme}
        className={`hidden md:block p-2 rounded-full transition-all ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-300 text-black"
        }`}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
