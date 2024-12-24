import React from "react";

const DecorativeShapes = () => {
  return (
    <div className="absolute -z-10 top-0 left-0 w-full h-full">
      <div className="bg-purple-200 rounded-full w-96 h-96 absolute -top-20 -left-20 opacity-50"></div>
      <div className="bg-blue-200 rounded-full w-80 h-80 absolute top-40 right-10 opacity-50"></div>
    </div>
  );
};

export default DecorativeShapes;
