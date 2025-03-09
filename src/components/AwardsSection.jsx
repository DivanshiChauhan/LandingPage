const AwardsSection = () => {
  return (
    <section className="mt-20 px-6 text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center items-stretch w-full max-w-7xl mx-auto">
        
        <div className="w-full lg:w-5/12 p-8 sm:p-12 bg-gradient-to-r from-red-600 to-gray-600 rounded-lg shadow-lg flex flex-col justify-between h-full flex-grow min-h-[28rem]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left">
            Organizations Recognized Our Work
          </h2>
          <div className="space-y-6 text-lg sm:text-xl">
            {[
              { name: "Forbes", detail: "Forbes Member Council 2022" },
              { name: "Clutch", detail: "Top App Development Company in India 2023" },
              { name: "Google", detail: "Developers Certified Agency" }
            ].map((award, index) => (
              <div key={index}>
                <p className="text-xl font-bold">{award.name}</p>
                <p>{award.detail}</p>
              </div>
            ))}
          </div>
          <button className="mt-5 py-3 px-6 w-full sm:w-auto bg-white text-red-600 font-bold rounded-lg hover:bg-red-700 hover:text-white transition duration-300">
            View More Awards
          </button>
        </div>

        <div className="w-full lg:w-5/12 p-8 sm:p-12 bg-gradient-to-r from-[#F5DEB3] to-gray-600 rounded-lg shadow-lg flex items-center h-full flex-grow min-h-[28rem]">
          <div className="text-black text-center lg:text-left">
            <p className="text-lg sm:text-xl">
              Finolity has been recognized as a Leader in the 2022 YourStory®.
            </p>
            <a href="#" className="text-red-700 font-medium hover:text-red-900 hover:underline transition duration-300 text-lg">
              View the Report
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AwardsSection;
