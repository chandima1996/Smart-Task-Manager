import React from "react";

function TaskCard({
  id,
  title,
  status,
  dueDate,
  description,
  onDelete,
  onEdit,
}) {
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
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="p-2 text-gray-400 transition-colors rounded-full hover:text-blue-500 hover:bg-blue-50"
          title="Edit Task"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(id)}
          className="p-2 text-gray-400 transition-colors rounded-full hover:text-red-500 hover:bg-red-50"
          title="Delete Task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
