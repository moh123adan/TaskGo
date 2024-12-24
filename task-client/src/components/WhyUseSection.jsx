import React from "react";
import Features from "./Features";

const WhyUseSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Why use task management tool?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-purple-600">Manage Tasks</h4>
            <p className="mt-2 text-gray-600">
              Organize and assign tasks efficiently to boost team productivity.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-purple-600">Knowledge</h4>
            <p className="mt-2 text-gray-600">
              Get insights to improve overall workflow and performance.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-purple-600">Productivity</h4>
            <p className="mt-2 text-gray-600">
              Stay focused and get more done with better tools.
            </p>
          </div>
        </div>
      </div>
      <Features/>
    </section>
  );
};

export default WhyUseSection;
