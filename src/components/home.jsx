import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
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
            src="images/h1.jpg"
            alt="Woman using AR experience"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center  mx-auto p-4">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/home-banner.jpg"
              alt="Jewelry Model"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>

          {/* Right Side - Stats */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 space-y-6">
            {[
              { percentage: "30%", text: "increase in sales conversion." },
              { percentage: "37%", text: "reduction in return rates." },
              { percentage: "160%", text: "increase in customer engagements." },
              { percentage: "10%", text: "increase in add to cart ratio." },
            ].map((stat, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4">
                <h2 className="text-4xl font-bold text-purple-600">
                  {stat.percentage}
                </h2>
                <p className="text-gray-600">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
