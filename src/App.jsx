import React from "react";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
          <p className="mt-2 text-gray-500">
            Manage your daily goals efficiently
          </p>
        </div>

        {/* task list view */}
        <div className="space-y-4">
          <TaskCard
            title="Setup React Environment"
            status="Completed"
            dueDate="Created: 2 hours ago"
            description="Install Node.js, Setup Vite Project and configure Tailwind CSS successfully"
          />
          <TaskCard
            title="Learn Props & Components"
            status="In Progress"
            dueDate="Due: Tomorrow"
            description="Understand how to pass data from parent to child components using Props."
          />
          <TaskCard
            title="Build Login Form"
            status="Pending"
            dueDate="Due: Next Week"
            description="Create a responsive login form with validation using React Hook Form."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
