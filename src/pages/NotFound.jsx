import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline mt-4 block">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
