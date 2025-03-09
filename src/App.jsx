import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import PerformanceMetrics from "./components/PerformanceMetrics";
import ServicesOverview from "./components/ServicesOverview";
import Footer from "./components/Footer";
import AwardsSection from "./components/AwardsSection";
import Form from "./components/Form";
import { Element } from "react-scroll";
import Recognized from "./components/Recognized";
import Subfooter from "./components/Subfooter";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-all`}>
      <Navbar setTheme={setTheme} theme={theme} />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Element name="HeroSection">
          <HeroSection theme={theme} />
        </Element>
        <Element name="Services">
          <Services theme={theme} />
        </Element>
        <Element name="PerformanceMetrics">
          <PerformanceMetrics theme={theme} />
        </Element>
        <Element name="ServicesOverview">
          <ServicesOverview theme={theme} />
        </Element>
        <Element name="Recognized">
          <Recognized theme={theme} />
        </Element>
        <Element name="AwardsSection">
          <AwardsSection theme={theme} />
        </Element>
        <Element name="Form">
          <Form theme={theme} />
        </Element>
        <Subfooter theme={theme} />
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default App;
