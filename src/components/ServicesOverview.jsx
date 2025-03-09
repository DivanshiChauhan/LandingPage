import { motion } from "framer-motion";
import { DollarSign, Lightbulb, Briefcase, Layers } from "lucide-react";

const serviceIcons = {
  "Cost-effectiveness": <DollarSign size={40} className="text-red-500" />,
  "Innovative Technology": <Lightbulb size={40} className="text-blue-500" />,
  "Industry Expertise": <Briefcase size={40} className="text-green-500" />,
  Scalability: <Layers size={40} className="text-yellow-500" />,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ServicesOverview = ({ theme }) => {
  const services = [
    {
      title: "Cost-effectiveness",
      description:
        "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "Innovative Technology",
      description:
        "We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.",
    },
    {
      title: "Industry Expertise",
      description:
        "We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.",
    },
    {
      title: "Scalability",
      description:
        "Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.",
    },
  ];

  return (
    <section
      className="mt-20 px-6"
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`border p-6 rounded-lg shadow-lg flex flex-col items-start gap-4 transition-transform hover:scale-105 ${
              theme === "dark"
                ? "bg-neutral-900 border-neutral-700 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div>{serviceIcons[service.title]}</div>

            <h3 className="text-2xl font-bold">{service.title}</h3>

            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
