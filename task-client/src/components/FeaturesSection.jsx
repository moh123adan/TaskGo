import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Sawirka Midig */}
        <div className="relative">
          <img
           rc='./assets/images/girl.png'
            alt="Girl with Laptop"
            className="rounded-lg shadow-lg"
          />
          {/* Box Overlay */}
          <div className="absolute top-2/3 left-1/3 bg-white rounded-lg shadow-lg p-4 w-48 transform -translate-y-1/2 -translate-x-1/2">
            <p className="text-sm text-gray-600">Daily Progress</p>
            <div className="text-4xl font-bold text-purple-600">80%</div>
            <p className="text-xs text-gray-500">Tasks Completed</p>
          </div>
        </div>

        {/* Qoraalka Bidix */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Help you be productive with activities
          </h2>
          <p className="text-gray-600">
            The next step in managing an effective work team is to get to know
            the members of the work team individually. Getting to know them is
            not only on a professional level, but more on a personal level so
            that work relations will be better directed.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
 export default FeaturesSection;
