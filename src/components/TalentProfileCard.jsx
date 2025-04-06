import React, { useState, useEffect } from "react";
import axios from "axios";

const TalentProfileCard = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users") // Using structured API
      .then((response) => {
        setProfiles(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=" bg-dark py-10 px-6 ">
    <div className="bg-black text-white py-10 px-8 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Top Talent</h2>
        <a href="#" className="text-blue-400">View all →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        {profiles.slice(0, 4).map((profile) => (
          <div key={profile.id} className="bg-gray-900 px-4 py-10 rounded-lg shadow-lg">
            <img
              src={profile.image}
              alt={profile.firstName}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h2 className="text-lg font-semibold text-center mt-3">
              {profile.firstName} {profile.lastName}
            </h2>
            <p className="text-blue-400 text-center">{profile.company.title}</p>
            <p className="text-gray-400 text-center">{profile.address.city}</p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {profile.company.department && (
                <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">{profile.company.department}</span>
                
              )}
            </div>

            {/* Employment Type */}
            <div className="mt-4">
              <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm  flex justify-center items-center mx-10">{profile.company.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TalentProfileCard;
