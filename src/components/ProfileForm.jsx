import React, { useState, useEffect } from "react";

const ProfileForm = ({ onSave, profile }) => {
  const [formData, setFormData] = useState({ name: "", description: "", image: "", location: { lat: "", lng: "" } });

  // जब Profile एडिट हो, तो डेटा अपडेट करें
  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "lat" || name === "lng") {
      setFormData((prev) => ({
        ...prev,
        location: { ...prev.location, [name]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ name: "", description: "", image: "", location: { lat: "", lng: "" } }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded mb-4">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="block w-full p-2 mb-2 border rounded" required />
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="block w-full p-2 mb-2 border rounded" required />
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="block w-full p-2 mb-2 border rounded" />
      <input type="text" name="lat" value={formData.location.lat} onChange={handleChange} placeholder="Latitude" className="block w-full p-2 mb-2 border rounded" required />
      <input type="text" name="lng" value={formData.location.lng} onChange={handleChange} placeholder="Longitude" className="block w-full p-2 mb-2 border rounded" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{profile ? "Update" : "Add"} Profile</button>
    </form>
  );
};

export default ProfileForm;
