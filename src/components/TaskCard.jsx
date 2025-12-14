import React from "react";

function TaskCard({ id, title, status, dueDate, description, onDelete }) {
  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "In Progress") return "bg-blue-100 text-blue-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="flex items-center justify-between p-5 duration-300 bg-white border-l-4 border-blue-500 shadow-sm hover:shadow-md rounded-xl group">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
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
