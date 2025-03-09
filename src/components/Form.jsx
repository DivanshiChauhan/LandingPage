const Form = () => {
  return (
    <section
      className="mt-20 px-6 text-black flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10"
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-16 items-stretch">

        <div className="w-full lg:w-5/12 p-8 bg-gradient-to-r from-gray-600 to-[#F5DEB3] text-white rounded-lg shadow-lg flex flex-col justify-between h-full flex-grow">
          <h2 className="text-3xl font-bold">Partner with Us for Comprehensive IT</h2>
          <p className="mt-2 text-lg">
            We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
          </p>
          <p className="mt-4 font-bold text-lg">Call us at: 0612-2500-971</p>

          <h3 className="mt-4 text-xl font-bold">Your benefits:</h3>
          <ul className="mt-2 space-y-1">
            {["Client-oriented", "Independent", "Competent", "Results-driven", "Problem-solving", "Transparent"].map((item, index) => (
              <li key={index} className="flex items-center"><span className="text-[#4f442f]">✔</span> {item}</li>
            ))}
          </ul>

          <h3 className="mt-4 text-xl font-bold">What happens next?</h3>
          <ol className="mt-2 space-y-1">
            {["We schedule a call at your convenience", "We do a discovery and consulting meeting", "We prepare a proposal"].map((step, index) => (
              <li key={index}>{index + 1}️⃣ {step}</li>
            ))}
          </ol>
        </div>

        <div className="w-full lg:w-5/12 p-8 bg-gradient-to-r from-gray-600 to-red-600 text-white rounded-lg shadow-lg flex flex-col justify-between h-full flex-grow">
          <h2 className="text-2xl font-bold">Schedule a Free Consultation</h2>
          <form className="mt-4 space-y-4 flex flex-col flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full p-3 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />
              <input type="text" placeholder="Last Name" className="w-full p-3 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />
            </div>

            <input type="text" placeholder="Company / Organization" className="w-full p-3 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />
            <input type="email" placeholder="Company Email" className="w-full p-3 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />
            <input type="text" placeholder="Phone" className="w-full p-3 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />

            <select className="w-full p-3 border rounded bg-gradient-to-r from-gray-600 to-red-600 text-white focus:outline-none">
              <option value="" className="text-white" selected disabled>How can we help you?</option>
              {["Managed Services", "IT Consulting and Advisory", "Cyber Security", "Web Development", "Mobile Development", "Cloud Services", "Others"].map((option, index) => (
                <option key={index} className="text-black">{option}</option>
              ))}
            </select>

            <textarea 
              placeholder="To better assist you, please describe how we can help you." 
              className="w-full p-3 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none flex-grow"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Form;
