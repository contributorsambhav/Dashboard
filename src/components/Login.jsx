import React from "react";
import { FaUser, FaLock } from "react-icons/fa"; // Importing icons

export default function Login() {
  return (
    <div className="flex w-[100vw] h-[92vh] items-center justify-center bg-gray-900">
      <form className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-lg font-bold mb-6 text-white">Login</h2>

        {/* Username/Email Field */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-300" htmlFor="username">
            Email/Username
          </label>
          <div className="flex items-center border border-gray-700 rounded bg-gray-700 text-white">
            <FaUser className="text-gray-400 ml-3" /> {/* User Icon */}
            <input
              type="text"
              id="username"
              className="w-full p-2 bg-transparent focus:outline-none text-white"
              placeholder="Enter your email or username"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-300" htmlFor="password">
            Password
          </label>
          <div className="flex items-center border border-gray-700 rounded bg-gray-700 text-white">
            <FaLock className="text-gray-400 ml-3" /> {/* Lock Icon */}
            <input
              type="password"
              id="password"
              className="w-full p-2 bg-transparent focus:outline-none text-white"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        {/* Signup and Forgot Password Links */}
        <p className="mt-4 text-center">
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
}
