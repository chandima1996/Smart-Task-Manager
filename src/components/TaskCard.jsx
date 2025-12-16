import React from "react";
import { FaCalendarAlt, FaEdit, FaFlag, FaTag, FaTrash } from "react-icons/fa";

function TaskCard({
  id,
  title,
  status,
  dueDate,
  priority,
  category,
  onDelete,
  onEdit,
}) {
  const getPriorityColor = (p) => {
    if (p === "High") return "bg-red-100 text-red-800 border-red-200";
    if (p === "Medium")
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    if (p === "Low") return "bg-green-100 text-green-800 border-green-200";
    return "bg-gray-100 text-gray-800";
  };
  return (
    <div className="p-5 transition-shadow bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md">
      <div className="flex items-start justify-between ">
        <div className="flex-1">
          <h3
            className={`text-lg font-bold mb-2 ${
              status === "Completed"
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border  ${getPriorityColor(
                priority
              )}`}
            >
              <FaFlag size={10} />
              {priority}
            </span>

            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
              <FaTag size={10} />
              {category}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaCalendarAlt className="mr-2" />
            {dueDate ? new Date(dueDate).toLocaleDateString() : "No Date"}
          </div>
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={onEdit}
            className="p-2 text-blue-600 transition bg-blue-100 rounded-lg hover:bg-blue-200"
          >
            <FaEdit />
          </button>
          <button
            className="p-2 text-red-600 transition bg-red-100 rounded-lg hover:bg-red-200"
            onClick={() => onDelete(id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
