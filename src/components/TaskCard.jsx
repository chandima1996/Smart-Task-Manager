import React from "react";

function TaskCard({ id, title, status, dueDate, description, onDelete }) {
  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "In Progress") return "bg-blue-100 text-blue-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="flex items-center justify-between p-5 transition-shadow duration-300 bg-white border-l-4 border-blue-500 shadow-sm rounded-xl hover:shadow-md group">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        </div>

        <p className="flex items-center gap-1 text-sm text-gray-500">
          📅 Due: {dueDate ? new Date(dueDate).toDateString() : "No Date"}
        </p>
      </div>
      <p className="mb-6 leading-relaxed text-gray-600">{description}</p>
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
        <button className="px-4 py-2 text-sm font-medium text-gray-500 transition-colors rounded-lg hover:text-blue-600 hover:bg-blue-50">
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="p-2 text-gray-400 transition-colors rounded-full hover:text-red-500 hover:bg-red-50"
          title="Delete Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
