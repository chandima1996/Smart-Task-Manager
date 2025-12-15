import React, { useEffect, useState } from "react";

function AddTaskForm({ onAdd, editTask, onUpdate }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDueDate(editTask.dueDate ? editTask.dueDate.split("T")[0] : "");
      setPriority(editTask.priority || "Medium");
      setCategory(editTask.category || "Work");
    } else {
      setTitle("");
      setDueDate("");
      setPriority("Medium");
      setCategory("Work");
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const taskData = { title, dueDate, priority, category };

    if (editTask) {
      onUpdate(editTask._id, taskData);
    } else {
      onAdd(taskData);
    }

    setTitle("");
    setDueDate("");
    setPriority("Medium");
    setCategory("Work");
  };
  return (
    <div className="p-6 mb-8 bg-white border border-gray-100 shadow-md rounded-xl">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">
        {editTask ? "Update Task" : "Add New Task"}
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="date"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>

          <select
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
        <button
          type="submit"
          className={`w-full ${
            editTask
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          }text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all`}
        >
          {editTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
