import React, { useState } from "react";

const ProfileFilter = ({ onFilter }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search profiles..."
      value={search}
      onChange={handleSearch}
      className="p-2 border rounded w-full mb-4"
    />
  );
};

export default ProfileFilter;
