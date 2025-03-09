import React, { useState } from "react";
import { motion } from "framer-motion"; 
import fcsLogo from "../assets/fcslogo.png";

const Subfooter = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      window.location.reload();
    } else {
      alert("Please accept the Privacy Policy before clicking Send.");
    }
  };

  return (
    <div className="relative bg-gray-950 text-white p-6 sm:p-12 flex flex-col sm:flex-row gap-8 justify-between items-center overflow-hidden mt-10 rounded-3xl">
      <div className="absolute inset-0 flex flex-wrap gap-4 justify-center items-center pointer-events-none">
        {Array.from({ length: 30 }).map((_, index) => {
          const randomSize = Math.floor(Math.random() * 20) + 8;
          const randomSpeed = Math.random() * 3 + 2;

          return (
            <motion.div
              key={index}
              className="bg-gray-400 rounded-full opacity-50 blur-sm"
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
              }}
              animate={{ scale: [1, 1.8, 1] }}
              transition={{
                duration: randomSpeed,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          );
        })}
      </div>

      <div className="w-full sm:w-2/3 relative z-10 p-6 sm:p-8 rounded-lg">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ul className="space-y-2">
            <li>Digital Strategy & Design</li>
            <li>Application Development and Management</li>
            <li>Cloud & Infrastructure</li>
            <li>Software-as-a-Service</li>
          </ul>
          <ul className="space-y-2">
            <li>Digital & Brand Marketing</li>
            <li>Generative AI & Business Intelligence</li>
            <li>Network Connectivity</li>
            <li>ERP Solutions</li>
          </ul>
        </div>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-4">Company</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ul className="space-y-2">
            <li>Events</li>
            <li>Why us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Partners & Certifications</li>
          </ul>
          <ul className="space-y-2">
            <li>Reviews & Awards</li>
            <li>Blog</li>
            <li>Case studies</li>
            <li>Events</li>
            <li>FAQ</li>
          </ul>
        </div>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-4">Subscribe</h2>
        <input
          type="text"
          placeholder="Don't miss out updates"
          className="w-full p-3 text-white bg-gray-800 border border-gray-600 mb-4 rounded-full"
        />
        <div className="flex items-start space-x-2 mb-4">
          <input type="checkbox" className="mt-1" onChange={handleCheckboxChange} />
          <span className="text-xs sm:text-sm">
            I agree to the Privacy Policy and give my permission to process my personal data
            for the purposes specified in the Privacy Policy.
          </span>
        </div>
        <button
          className={`px-6 py-3 w-full sm:w-auto text-white rounded-full ${
            isChecked ? "bg-red-600 hover:bg-red-700 active:bg-red-800" : "bg-gray-500"
          }`}
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
      <div className="w-full sm:w-1/3 flex justify-center items-center relative z-10 rounded-3xl p-6">
        <div className="flex flex-col items-center">
          <img src={fcsLogo} alt="FCS Logo" className="w-28 sm:w-40 mb-4" />
          <button className="mt-4 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 active:bg-red-800 w-full sm:w-auto">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
