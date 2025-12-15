import React, { useEffect, useState } from "react";

function AddTaskForm({ onAdd, editTask, onUpdate }) {
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editTask) {
      setNewTask(editTask.title);
      setDueDate(editTask.dueDate ? editTask.dueDate.split("T")[0] : "");
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    if (editTask) {
      onUpdate(editTask._id, { title: newTask, dueDate });
    } else {
      onAdd({ title: newTask, dueDate });
    }

    setNewTask("");
    setDueDate("");
  };
  return (
    <div className="p-6 mb-8 bg-white border border-gray-100 shadow-md rounded-xl">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">
        {editTask ? "Update Task" : "Add New Task"}
      </h2>
      <form className="flex flex-col gap-4 md:flex-row" onSubmit={handleSubmit}>
        <input
          type="text"
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What need to be done?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <input
          type="date"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button
          type="submit"
          className={`${
            editTask
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all`}
        >
          {editTask ? "Update" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
