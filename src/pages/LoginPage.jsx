import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "https://smart-task-manager-backend-sv8o.onrender.com/api/users/login",
        { email, password }
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/");
      window.location.reload();
    } catch (error) {
      setError("Something went wrong!", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-lg rounded-xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Welcome back ✋
        </h2>

        {error && (
          <div className="p-3 mb-4 text-sm text-center text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?
          <span className="text-blue-600 cursor-pointer hover:underline">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
