import reclogo from "../assets/reclogo1.png"; 
const Recognized = ({ theme }) => {
  return (
    <section
      className="mt-20 px-6 flex flex-col md:flex-row items-center justify-between gap-10"
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <div className="max-w-lg w-full">
        <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
          Recognized by the best
        </h2>
        <p className={`mt-4 text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in
          post-contract fees and fines.
        </p>
      </div>
      <div className="flex justify-center w-full max-w-2xl">
        <img
          src={reclogo}
          alt="Recognized Logos"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Recognized;
