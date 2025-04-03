import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">🚀 Welcome to Profile Display</h1>
      <p className="text-lg text-gray-200 max-w-lg mb-6 animate-slide-in">
        Discover amazing profiles! Click below to explore users and learn more about them.
      </p>
      <Link to="/profiles">
        <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
          View Profiles
        </button>
      </Link>
    </div>
  );
};

export default Home;
