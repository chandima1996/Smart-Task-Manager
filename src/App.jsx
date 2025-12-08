import React from "react";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
          <p className="text-gray-500 mt-2">
            Manage your daily goals efficiently
          </p>
        </div>

        {/* task list view */}
        <div className="space-y-4">
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
}

export default App;
