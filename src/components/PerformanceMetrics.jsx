import { motion } from "framer-motion";
import image2 from "../assets/image2.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const PerformanceMetrics = ({ theme }) => {
  const metrics = [
    { title: "Reviewed on Clutch", value: "⭐⭐⭐⭐⭐ (5/5)" },
    { title: "2K+ Reviews", value: "" },
    { title: "08 Years", value: "Proven Track Record" },
    { title: "98%", value: "Customer Satisfaction" },
    { title: "470+", value: "Projects Completed" },
    { title: "3 Mins", value: "Average Answer Time" },
  ];

  return (
    <motion.section
      className="mt-20 px-6 flex flex-col md:flex-row items-stretch justify-between gap-10"
      style={{ fontFamily: '"Poppins", sans-serif' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="max-w-lg w-full h-full flex flex-col justify-between">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className={`p-6 border rounded-lg shadow text-center flex flex-col justify-center transition-all ${
                theme === "dark"
                  ? "bg-neutral-900 border-neutral-700 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold">{metric.title}</h3>
              {metric.value && <p className="mt-2 text-lg">{metric.value}</p>}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src={image2}
          alt="Performance Metrics"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default PerformanceMetrics;
