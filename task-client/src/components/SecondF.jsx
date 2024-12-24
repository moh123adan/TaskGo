import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl p-6 bg-white shadow-md rounded-lg">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our features that help you be more efficient
          </h1>
          <p className="text-gray-600 mb-6">
            Can delegate tasks to the right people according to their abilities
            to ensure the team is working productively.
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700">
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Background Shapes */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-400 rounded-full transform translate-x-[-50%] translate-y-[-50%]" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-500 rounded-full transform translate-x-[50%] translate-y-[50%]" />
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-green-500 rounded-full" />

          {/* Card */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 z-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Create New Card
            </h2>
            <input
              type="text"
              placeholder="What is the task?"
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring focus:ring-purple-300"
            />
            <div className="flex items-center justify-between mb-4">
              <span className="px-4 py-2 bg-purple-200 text-purple-800 rounded-md">
                UI Design
              </span>
              <span className="text-gray-600">Jessica</span>
            </div>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;