import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen px-8 lg:px-16 py-12 bg-white">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900">
          AR/AI Experiences for <br />
          <span className="text-purple-600">Reduced Returns</span>
        </h1>
        <p className="text-gray-400 mt-4">Watch mirrAR in action</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center max-w-md">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800">
            Submit
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
        <img
          src="https://i.pinimg.com/474x/41/79/4d/41794d66e7cb8b5abbe0b98dbb635d25.jpg"
          alt="Woman using AR experience"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
