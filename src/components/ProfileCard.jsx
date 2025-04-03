import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const MapComponent = React.lazy(() => import("./MapComponent"));

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-all hover:shadow-xl">
      {/* Profile Image */}
      <img
        src={profile.image}
        alt={profile.name}
        className="w-24 h-24 mx-auto rounded-full object-cover"
      />

      {/* Profile Name & Description */}
      <h2 className="text-lg font-bold mt-2">{profile.name}</h2>
      <p className="text-gray-600">{profile.description}</p>

      {/* View Details Link */}
      <Link to={`/profiles/${profile.id}`} className="text-blue-600 mt-2 block">
        View Details
      </Link>

      {/* Show/Hide Map Button */}
      {profile.location ? (
        <button
          onClick={() => setShowMap(!showMap)}
          className={`mt-3 px-4 py-2 rounded-lg text-white transition ${
            showMap ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {showMap ? "Hide Map" : "Show Location"}
        </button>
      ) : (
        <p className="text-red-500 mt-3">Location not available</p>
      )}

      {/* Lazy Loaded Map Component */}
      {showMap && profile.location && (
        <Suspense fallback={<LoadingSpinner />}>
          <MapComponent location={profile.location} name={profile.name} />
        </Suspense>
      )}
    </div>
  );
};

export default ProfileCard;
