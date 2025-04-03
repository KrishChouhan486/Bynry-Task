import React from "react";
import { useParams, Link } from "react-router-dom";
import profiles from "../data/profiles";

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <div className="text-center text-red-500">Profile not found!</div>;
  }

  return (
    <div className="p-6 text-center">
      <img src={profile.image} alt={profile.name} className="w-32 h-32 mx-auto rounded-full" />
      <h2 className="text-xl font-bold mt-2">{profile.name}</h2>
      <p className="text-gray-600">{profile.description}</p>
      <p><strong>Location:</strong> {profile.location.lat}, {profile.location.lng}</p>
      <Link to="/profiles" className="text-blue-600 mt-4 block">Back to Profiles</Link>
    </div>
  );
};

export default ProfileDetails;
