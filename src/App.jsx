import React, { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("smartTasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [
        {
          id: 1,
          title: "Master react props",
          status: "Completed",
          dueDate: "Yesterday",
          description:
            "Understand how to pass data between components effectively using Props.",
        },
        {
          id: 2,
          title: "Learn array Mapping",
          status: "In Progress",
          dueDate: "Today",
          description:
            "Use .map() function to render a list of components dynamically",
        },
        {
          id: 3,
          title: "Build backend API",
          status: "Pending",
          dueDate: "Next Week",
          description:
            "Setup Node.js and Express to serve real data from MongoDB",
        },
        {
          id: 4,
          title: "Practice Git Workflow",
          status: "Pending",
          dueDate: "Tommorrow",
          description:
            "Learn branching, committing, and pushing code to Github.",
        },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("smartTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  const handleAddTask = (newTaskData) => {
    const newTask = {
      id: Date.now(),
      title: newTaskData.title,
      status: "Pending",
      dueDate: newTaskData.dueDate || "No Date",
      description: "New Task Added Manually",
    };

    setTasks([...tasks, newTask]);
    console.log(tasks);
  };
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Personal Tasks ({tasks.length})
          </h1>
          <p className="mt-2 text-gray-500">
            Manage your daily goals efficiently
          </p>
        </div>

        <AddTaskForm onAdd={handleAddTask} />

        {/* task list view */}
        <div className="space-y-4">
          {tasks.length === 0 && (
            <p className="py-10 text-center text-gray-500">
              No tasks found. Good job 🏆
            </p>
          )}
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.status}
              dueDate={task.dueDate}
              description={task.description}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
