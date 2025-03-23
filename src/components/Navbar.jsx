import { useState } from "react";
import { Sun, User } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Black <span className="text-blue-500">Talent</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-blue-500 cursor-pointer">Talent</li>
          <li className="hover:text-blue-500 cursor-pointer">Jobs</li>
          <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <User className="w-5 h-5 cursor-pointer" />
          <button onClick={() => setDarkMode(!darkMode)}>
            <Sun className="w-5 h-5 text-yellow-500 cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
