import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin h-10 w-10 border-t-4 border-blue-600 rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;
