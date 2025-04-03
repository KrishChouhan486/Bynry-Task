import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import profilesData from "../data/profiles";
import ProfileFilter from "../components/ProfileFilter";
import LoadingSpinner from "../components/LoadingSpinner";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProfiles(profilesData);
      setFilteredProfiles(profilesData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleFilter = (query) => {
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="p-6">
      <ProfileFilter onFilter={handleFilter} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Profiles;
