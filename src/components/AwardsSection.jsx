const AwardsSection = () => {
  return (
    <section
      className="mt-20 px-6 text-white"
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
        <div className="w-full lg:w-5/12 p-8 bg-gradient-to-r from-red-600 to-gray-600 rounded-lg shadow-lg flex flex-col justify-between h-96">
          <div className="space-y-4 w-full">
            <h2 className="text-3xl font-bold text-white">Organizations recognized our work</h2>
            <div className="space-y-2 text-sm text-white">
              <p className="text-lg text-white font-bold">Forbes</p><p>Forbes Member Council 2022</p>
              <p className="text-lg text-white font-bold">Clutch</p>
              <p>Top App Development Company in India 2023</p>
              <p className="text-lg text-white font-bold">Google</p>
              <p>Developers Certified Agency</p>
            </div>
          </div>
          <button className="mt-5 py-2 bg-white text-red-600 font-bold rounded hover:bg-gray-200 transition">
            View More Awards
          </button>
        </div>
         <div className="w-full lg:w-5/12 p-8 bg-gradient-to-r from-[#F5DEB3] to-gray-600 rounded-lg shadow-lg flex items-center h-96">
          <div className="text-black w-full">
            <p className="text-lg">
              View more awards: Finolity has been recognized as a Leader in the 2022 Yourstory®
            </p>
            <a href="#" className="text-red-700 font-medium hover:underline">
              View the report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
