import React, { useState } from "react";

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a task title!");
      return;
    }

    onAdd({ title, dueDate });

    setTitle("");
    setDueDate("");
  };
  return (
    <div className="p-6 mb-8 bg-white border border-gray-100 shadow-md rounded-xl">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Add New Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button
          type="submit"
          className="px-6 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
