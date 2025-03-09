import { Link } from "react-scroll";
import logo from "../assets/logointelion.png";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`flex justify-between items-center px-10 pt-6 md:px-20 transition-all ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <Link to="HeroSection" smooth={true} duration={500} offset={-50}>
        <img src={logo} alt="Intelion Logo" className="h-10 cursor-pointer" />
      </Link>

      <ul className="flex gap-6 font-semibold">
        <li>
          <Link to="HeroSection" smooth={true} duration={500} offset={-50}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Services" smooth={true} duration={500} offset={-50}>
            Services & Solutions
          </Link>
        </li>
        <li>
          <Link to="Form" smooth={true} duration={500} offset={-50}>
            Contact
          </Link>
        </li>
      </ul>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-black dark:text-white transition-all"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
