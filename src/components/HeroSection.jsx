import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/herosection.jpg";

const HeroSection = ({ theme }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`flex flex-col items-center text-center mt-6 lg:mt-20 px-4 transition-all ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide font-bold">
        We manage your IT, so you can manage your business.
      </h1>
      <p className={`mt-6 text-lg max-w-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Take charge of your business continuity with innovative IT solutions.
      </p>
      <div className="flex flex-wrap justify-center my-8 gap-4">
        <motion.a
          href="#"
          className="bg-gradient-to-r from-red-400 to-red-800 text-white py-3 px-5 rounded-md shadow-md hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        >
          Schedule a Free Consultation
        </motion.a>
        <motion.a
          href="#"
          className={`py-3 px-5 border border-gray-400 rounded-md transition ${
            theme === "dark" ? "hover:bg-gray-800 text-white" : "hover:bg-gray-300 text-black"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        >
          Services
        </motion.a>
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-5xl mt-10 rounded-lg overflow-hidden shadow-lg"
        animate={{
          scale: isClicked ? 1.05 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: "easeInOut",
        }}
        onClick={() => setIsClicked(!isClicked)}
      >
        <motion.img
          className="w-full md:full rounded-lg cursor-pointer"
          src={image}
          alt="Hero Section"
          whileHover={{ scale: 1.2}}
          transition={{ type: "keyframes", duration: 0.2, ease:"easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
