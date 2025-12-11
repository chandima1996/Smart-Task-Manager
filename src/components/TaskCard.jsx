import React from "react";

function TaskCard({ id, title, status, dueDate, description, onDelete }) {
  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "In Progress") return "bg-blue-100 text-blue-700";
    return "bg-yellow-100 text-yellow-700";
  };
  console.log("Component id is" + id);
  return (
    <div className="p-6 mb-4 transition-all bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className="text-sm text-gray-400">{dueDate}</span>
        </div>

        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
            status
          )}`}
        >
          {status}
        </span>
      </div>
      <p className="mb-6 leading-relaxed text-gray-600">{description}</p>
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
        <button className="px-4 py-2 text-sm font-medium text-gray-500 transition-colors rounded-lg hover:text-blue-600 hover:bg-blue-50">
          Edit
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-red-500 transition-colors rounded-lg hover:text-red-600 hover:bg-red-50"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
