import React, { useState, useEffect } from "react";
import profilesData from "../data/profiles";
import ProfileCard from "./ProfileCard";
import AdminPanel from "./AdminPanel";

const ProfileList = () => {
  const [profiles, setProfiles] = useState(profilesData);

  // Function to add or update profiles
  const handleSaveProfile = (newProfile) => {
    setProfiles((prev) =>
      newProfile.id
        ? prev.map((p) => (p.id === newProfile.id ? newProfile : p)) // Edit
        : [...prev, { ...newProfile, id: prev.length + 1 }] // Add New
    );
  };

  // Function to delete profiles
  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile Management</h1>

      {/* Pass profiles and functions to AdminPanel */}
      <AdminPanel profiles={profiles} onSave={handleSaveProfile} />

      {/* Display Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
