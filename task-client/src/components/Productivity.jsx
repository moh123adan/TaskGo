import React from "react";

function Productivity() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-800">Help you be productive with activities</h3>
          <p className="text-gray-600 mt-4">
            This tool helps teams achieve their goals by simplifying work management and providing valuable insights.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md mt-4">Learn more</button>
        </div>
        <img src="/images/productivity.png" alt="Productivity" className="rounded-lg shadow-md" />
      </div>
    </section>
  );
}

export default Productivity;
