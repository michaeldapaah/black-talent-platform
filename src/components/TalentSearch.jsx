import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search, Globe, Linkedin } from "lucide-react";

const TalentSearch = () => {
  const [talent, setTalent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setTalent(response.data.users); // Correctly accessing user array
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredTalent = talent.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 ">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Find Your Next Team Member</h1>

      {/* Search Bar & Filters */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6 flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center bg-gray-700 rounded-lg px-4 py-2 flex-grow">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search by name, skill, or location..."
            className="w-full bg-transparent text-white outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select className="bg-gray-700 text-white p-2 rounded-lg outline-none">
          <option>Data Science</option>
          <option>Engineering</option>
          <option>Marketing</option>
        </select>

        <select className="bg-gray-700 text-white p-2 rounded-lg outline-none">
          <option>All Locations</option>
          <option>Remote</option>
          <option>USA</option>
        </select>

        <select className="bg-gray-700 text-white p-2 rounded-lg outline-none">
          <option>Remote</option>
          <option>Onsite</option>
        </select>
      </div>

      {/* Talent Card */}
      <div className="bg-gray-800 rounded-lg p-6">
        {filteredTalent.slice(0, 1).map((user) => (
          <div key={user.id} className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={user.image}
              alt={user.firstName}
              className="w-48 h-48 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
              <p className="text-blue-400">Data Scientist</p>
              <p className="text-gray-400">{user.address.city}, {user.address.state}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">Python</span>
                <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">Machine Learning</span>
                <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">SQL</span>
                <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">+1</span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4">
                <span className="bg-green-600 text-white px-3 py-1 text-sm rounded-lg">Remote</span>
                <div className="flex gap-4">
                  <Globe className="text-gray-400 w-5 h-5 cursor-pointer" />
                  <Linkedin className="text-gray-400 w-5 h-5 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentSearch;
