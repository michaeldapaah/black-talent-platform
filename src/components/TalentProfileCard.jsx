import React, { useState, useEffect } from "react";
import axios from "axios";

const TalentProfileCard = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {profiles.map((profile) => (
        <div key={profile.id} className="bg-white p-4 shadow rounded-lg">
          <img
            src={profile.avatar}
            alt={profile.first_name}
            className="w-16 h-16 rounded-full mx-auto"
          />
          <h2 className="text-lg font-semibold text-center mt-2">
            {profile.first_name} {profile.last_name}
          </h2>
          <p className="text-gray-500 text-center">{profile.employment.title}</p>
          <p className="text-gray-400 text-center">{profile.address.city}</p>
        </div>
      ))}
    </div>
  );
};

export default TalentProfileCard;
