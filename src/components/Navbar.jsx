import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="text-lg font-bold">My App</div>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/profiles" className="mx-2">Profiles</Link>
        <Link to="/about" className="mx-2">About</Link>
        <Link to="/admin" className="mx-2 font-bold">Admin</Link> {/* Admin Link */}
      </div>
    </nav>
  );
};

export default Navbar;
