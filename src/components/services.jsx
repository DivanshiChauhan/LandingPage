import { motion } from "framer-motion";

const Services = ({ theme }) => {
  const services = [
    {
      title: "Managed Services",
      description:
        "Free up your internal resources to focus on the business by letting us handle day-to-day support services, management, and monitoring of your IT.",
    },
    {
      title: "IT Consulting & Advisory",
      description:
        "The right technology, implemented properly, can lead to significant gains in growth through effective management and monitoring.",
    },
    {
      title: "Cyber Security",
      description:
        "Our experts identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
    },
    {
      title: "Web Development",
      description:
        "Establish an impactful online presence and effectively reach your target audience with our web development services.",
    },
    {
      title: "Mobile Development",
      description:
        "We create customized mobile apps aligned with your brand and goals, leveraging expertise across various platforms.",
    },
    {
      title: "Cloud Services",
      description:
        "Find the right cloud solutions for your business needs and goals with our deep expertise in cloud technologies.",
    },
    {
      title: "NFT Development",
      description:
        "Stay ahead of the trend with our NFT development services—we've been building them since 2016.",
    },
    {
      title: "Software Development",
      description:
        "From custom CRMs to complex management systems, our software development services cover it all.",
    },
  ];

  return (
    <motion.section
      className="mt-20 px-6 transition-all"
      style={{
        fontFamily: '"Poppins", sans-serif',
        color: theme === "dark" ? "white" : "black",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-red-400 to-red-800 text-transparent bg-clip-text">
            Services &amp; Solutions
          </span>
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Take your company to new heights by investing in our reliable and efficient technology solutions.
        </p>
        <p 
  className={`mt-4 text-md max-w-3xl mx-auto ${
    theme === "dark" ? "text-gray-300" : "text-gray-700"
  }`}
>
  Finolity is your reliable partner for IT solutions, software development, and digital transformation. 
  Our goal is to streamline your business operations, enhance efficiency, and drive growth through innovative technology.
</p>
      </motion.div>

      <motion.div 
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`border p-6 rounded-lg shadow transition ${
              theme === "dark"
                ? "bg-neutral-900 text-white border-neutral-700 hover:shadow-red-700"
                : "bg-white text-black border-gray-300 hover:shadow-gray-400"
            }`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
            <motion.a
              href="#"
              className="mt-4 inline-block text-red-800 font-medium hover:underline"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Learn more
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.a
          href="#"
          className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-md shadow transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Get in touch
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Services;
