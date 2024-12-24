import React from "react";

function TaskPreviewSection() {
  const tasks = [
    { title: "Design Homepage", status: "Completed" },
    { title: "Write Documentation", status: "In Progress" },
    { title: "Setup Backend", status: "Pending" },
  ];

  return (
    <section id="tasks" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Task Previews</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tasks.map((task, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">{task.title}</h4>
              <p className="text-gray-600">{task.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaskPreviewSection;
