import React from "react";

function TaskCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 mb-4">
      {/* title and status badge */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            Learn react and tailwind
          </h3>
          <span className="text-sm text-gray-400">Created: 10 min ago</span>
        </div>

        {/* status badge */}
        <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
          In Progress
        </span>
      </div>

      {/* description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        Complete the basic setup of the project using Vite, setup Tailwind CSS
        and learn Git branching strategies
      </p>

      {/* footer */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
        <button className="text-sm px-4 py-2 text-gray-500 hover:text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
          Edit
        </button>
        <button className="text-sm px-4 py-2 text-red-500 hover:text-red-700 font-medium hover:bg-red-50 rounded-lg transition-colors">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
