const Form = () => {
  return (
    <section
      className="mt-20 px-6 text-black flex flex-col lg:flex-row items-center justify-center gap-10"
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <div className="w-full lg:w-5/12 p-8 bg-gradient-to-r from-gray-600 to-[#F5DEB3] text-white rounded-lg shadow-lg flex flex-col justify-center h-auto lg:h-[600px]">
        <h2 className="text-3xl font-bold">Partner with Us for Comprehensive IT</h2>
        <p className="mt-2 text-lg">
          We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
        </p>
        <p className="mt-4 font-bold text-lg">Call us at: 0612-2500-971</p>
        <h3 className="mt-4 text-xl font-bold">Your benefits:</h3>
        <ul className="mt-2 space-y-1">
          <li className="flex items-center"><span className="text-[#4f442f]">✔</span> Client-oriented</li>
          <li className="flex items-center"><span className="text-[#4f442f]">✔</span> Independent</li>
          <li className="flex items-center"><span className="text-[#4f442f]">✔</span> Competent</li>
          <li className="flex items-center"><span className="text-[#4f442f]">✔</span> Results-driven</li>
          <li className="flex items-center"><span className="text-[#4f442f]">✔</span> Problem-solving</li>
          <li className="flex items-center"><span className="text-[#4f442f]">✔</span> Transparent</li>
        </ul>
        <h3 className="mt-4 text-xl font-bold">What happens next?</h3>
        <ol className="mt-2 space-y-1">
          <li>1️⃣ We schedule a call at your convenience</li>
          <li>2️⃣ We do a discovery and consulting meeting</li>
          <li>3️⃣ We prepare a proposal</li>
        </ol>
      </div>

      <div className="w-full lg:w-5/12 p-8 bg-gradient-to-r from-gray-600 to-red-600 text-white rounded-lg shadow-lg flex flex-col justify-center h-auto lg:h-[600px]">
        <h2 className="text-2xl font-bold">Schedule a Free Consultation</h2>
        <form className="mt-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />
            <input type="text" placeholder="Last Name" className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />
          </div>
          <input type="text" placeholder="Company / Organization" className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />
          <input type="email" placeholder="Company Email" className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />
          <input type="text" placeholder="Phone" className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none" />
          
          <select className="w-full p-2 border rounded bg-gradient-to-r from-gray-600 to-red-600 text-white focus:outline-none">
            <option value="" className="text-white" selected disabled>How can we help you?</option>
            <option className="text-white">Managed Services</option>
            <option className="text-white">IT Consulting and Advisory</option>
            <option className="text-white">Cyber Security</option>
            <option className="text-white">Web Development</option>
            <option className="text-white">Mobile Development</option>
            <option className="text-white">Cloud Services</option>
            <option className="text-white">Others</option>
          </select>

          <textarea 
            placeholder="To better assist you, please describe how we can help you." 
            className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300 focus:outline-none">
          </textarea>

          <button
            type="submit"
            className="w-full py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
