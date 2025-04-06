// components/Footer.jsx
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-gray-400 px-6 py-10 mt-16 bg-black mr-8 ml-8 rounded-lg">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          <h1 className="text-white text-2xl font-bold">
            Black <span className="text-blue-500">Talent</span>
          </h1>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
          <p className="text-sm">&copy; 2025 <span className="text-white">BlackTalent</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
