import React, { useState, useEffect } from "react";
import profilesData from "../data/profiles";
import ProfileForm from "./ProfileForm";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [editingProfile, setEditingProfile] = useState(null);

  // Add or Update Profile
  const handleSaveProfile = (newProfile) => {
    setProfiles((prev) =>
      newProfile.id
        ? prev.map((p) => (p.id === newProfile.id ? newProfile : p)) // Edit
        : [...prev, { ...newProfile, id: prev.length + 1 }] // Add New
    );
    setEditingProfile(null);
  };

  // Delete Profile
  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Profile Form for Adding / Editing */}
      <ProfileForm onSave={handleSaveProfile} profile={editingProfile} key={editingProfile?.id || "new"} />

      {/* Profile List in Admin Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div key={profile.id} className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-bold">{profile.name}</h2>
            <p>{profile.description}</p>
            <button onClick={() => setEditingProfile(profile)} className="bg-yellow-500 text-white px-3 py-1 m-1 rounded">
              Edit
            </button>
            <button onClick={() => handleDelete(profile.id)} className="bg-red-500 text-white px-3 py-1 m-1 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
