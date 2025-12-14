import React, { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://smart-task-manager-backend-sv8o.onrender.com";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("API Response", response.data);

      if (Array.isArray(response.data)) {
        setTasks(response.data);
      } else {
        console.error("Data is not array!");
        setTasks([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tasks", error);
      setTasks([]);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      const remainingTasks = tasks.filter((task) => task._id !== id);
      setTasks(remainingTasks);
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const handleAddTask = async (newTaskData) => {
    try {
      const response = await axios.post(API_URL, {
        title: newTaskData.title,
        dueDate: newTaskData.dueDate,
        status: "Pending",
      });

      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
          <p className="mt-2 text-gray-500">
            Connected to the MongoDB Atlas 🚀
          </p>
        </div>

        <AddTaskForm onAdd={handleAddTask} />

        {/* task list view */}
        <div className="space-y-4">
          {isLoading && (
            <p className="text-center">Loading tasks from database...</p>
          )}
          {!isLoading && tasks.length === 0 && (
            <p className="py-10 text-center text-gray-500">
              No tasks found. Start by adding one!
            </p>
          )}
          {Array.isArray(tasks) &&
            tasks.map((task) => (
              <TaskCard
                key={task._id}
                id={task._id}
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
