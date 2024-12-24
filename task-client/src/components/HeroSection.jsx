import React from "react";
import FeaturesSection from "./FeaturesSection";

const HeroSection = () => {
  return (
    <header className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-10">
          <div className="text-purple-600 font-bold text-2xl">GoTask</div>
          <ul className="hidden md:flex space-x-8 text-gray-600">
            <li className="hover:text-purple-600 cursor-pointer"> Solution</li>
            <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
            <li className="hover:text-purple-600 cursor-pointer">Features</li>
            <li className="hover:text-purple-600 cursor-pointer">Blog</li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-purple-600">Log in</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
              Sign up
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Collaboration with the team <span className="text-purple-600">made easy</span>
            </h1>
            <p className="text-gray-600 mt-4">
              With this platform, you can find out the priority of your tasks so that your
              activities become efficient.
            </p>
            <div className="mt-6 flex items-center">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full max-w-sm px-4 py-2 border rounded-l-md focus:outline-none focus:ring focus:ring-purple-300"
              />
              <button className="bg-purple-600 text-white px-6 py-2 rounded-r-md">
                Start try free
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <img
              src="./src/assets/images/download.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
