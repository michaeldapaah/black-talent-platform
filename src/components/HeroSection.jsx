import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-black text-white py-20 text-center w-full">
      <h1 className="text-4xl md:text-5xl font-bold">Discover Exceptional Black Talent</h1>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Connect with top professionals across industries ready to elevate your company's success.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold">Find Talent</button>
        <button className="border border-white px-6 py-2 rounded-lg font-semibold">Post a Job</button>
      </div>
    </div>
  );
};

export default HeroSection;
