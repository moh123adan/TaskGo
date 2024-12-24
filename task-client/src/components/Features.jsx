import React from "react";
import FeatureCard from "../components/FeatureCard";
import DecorativeShapes from "../components/DecorativeShapes";
import { Inbox, Brain, BarChart2, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Inbox className="w-6 h-6 text-blue-600" />,
      title: "Manage tasks",
      description: "Managing your tasks and projects more efficiently will increase your productivity.",
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "Knowledge",
      description: "You can see insights and easily manage tasks and projects.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
      title: "Productivity",
      description: "With this tool, you can be more productive.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Collaboration",
      description: "Collaborating with your team is very helpful in daily activities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why use a task management tool
            </h2>
            <p className="text-gray-600 mb-8">
              Be productive and prioritize your work with this tool.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
            <DecorativeShapes />
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
