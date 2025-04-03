import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-center p-6">
      {/* Heading with Animation */}
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">🌟 About Us</h1>

      {/* Description */}
      <p className="text-lg text-gray-200 max-w-2xl mb-6 animate-slide-in">
        Welcome to <span className="font-semibold">Profile Display App</span> – a modern platform to explore and 
        manage user profiles seamlessly. Our app is designed to provide an intuitive and interactive experience 
        for viewing user details with features like location-based mapping, real-time updates, and a user-friendly 
        admin panel.
      </p>

      {/* Key Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">🚀 Seamless Profile Browsing</h2>
          <p className="text-gray-700">Effortlessly browse through different user profiles with our clean UI.</p>
        </div>

        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">📍 Interactive Map Integration</h2>
          <p className="text-gray-700">View user locations on a real-time interactive map.</p>
        </div>

        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">🔧 Admin Panel</h2>
          <p className="text-gray-700">Easily add, edit, or delete profiles through a powerful admin dashboard.</p>
        </div>

        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">📱 Fully Responsive</h2>
          <p className="text-gray-700">Access the app from any device, including mobile, tablet, or desktop.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
