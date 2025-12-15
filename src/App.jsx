import React, { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editTask, setEditTask] = useState(null);

  const API_URL =
    "https://smart-task-manager-backend-sv8o.onrender.com/api/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo?.token;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL, config);

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

  const handleEditClick = (task) => {
    setEditTask(task);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, config);
      const remainingTasks = tasks.filter((task) => task._id !== id);
      setTasks(remainingTasks);
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const handleAddTask = async (newTaskData) => {
    try {
      const response = await axios.post(
        API_URL,
        {
          title: newTaskData.title,
          dueDate: newTaskData.dueDate,
          status: "Pending",
        },
        config
      );

      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const handleUpdateTask = async (id, updateData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updateData, config);

      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      setEditTask(null);
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 font-sans bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900">
              Task <span className="text-blue-600">Master</span>
            </h1>
            <p className="text-lg text-gray-500">
              Manage your daily goals efficiently.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-semibold text-white transition bg-red-500 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <AddTaskForm
          onAdd={handleAddTask}
          editTask={editTask}
          onUpdate={handleUpdateTask}
        />

        {/* task list view */}
        <div className="space-y-4">
          {isLoading && (
            <div className="py-10 text-center">
              <div className="w-10 h-10 mx-auto border-b-2 border-blue-600 rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-500">Loading tasks...</p>
            </div>
          )}
          {!isLoading && tasks.length === 0 && (
            <div className="py-12 text-center bg-white border border-gray-300 border-dashed rounded-xl">
              <p className="text-xl text-gray-400">
                ✨ No Tasks yet. Add one above!
              </p>
            </div>
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
                onEdit={() => handleEditClick(task)}
              />
            ))}
        </div>
        <p className="mt-12 text-sm text-center text-gray-400">
          ©2025 Task Master. Built with MERN stack.
        </p>
      </div>
    </div>
  );
}

export default App;
