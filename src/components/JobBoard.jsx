import React from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobData = [
  {
    title: "Senior UX Designer",
    company: "TechGlobal",
    location: "New York, NY",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "We are looking for a Senior UX Designer to join our product team and help create exceptional user experiences.",
    image: "/images/logo1.png", // Replace with actual paths
  },
  {
    title: "Full Stack Developer",
    company: "InnovateSoft",
    location: "Remote",
    salary: "$90,000 - $120,000",
    type: "Contract",
    posted: "1 week ago",
    description:
      "Join our engineering team to build modern web applications using React, Node.js, and cloud technologies.",
    image: "/images/logo2.png",
  },
  {
    title: "Product Manager",
    company: "GrowthLabs",
    location: "Chicago, IL",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "Lead product development from concept to launch, working closely with design and engineering teams.",
    image: "/images/logo3.png",
  },
  {
    title: "Data Scientist",
    company: "DataDriven",
    location: "Austin, TX",
    salary: "$130,000 - $160,000",
    type: "Full-time",
    posted: "1 day ago",
    description:
      "Analyze complex datasets and build machine learning models to drive business insights and decision-making.",
    image: "/images/logo4.png",
  },
];

const JobBoard = () => {
  return (
    <div className="bg-black m-9 rounded-lg text-white py-12 px-0 md:px-20">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <Briefcase className="text-blue-500" />
        Latest Job Opportunities
      </h2>

      <div className="space-y-6">
        {jobData.map((job, index) => (
          <div key={index} className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                src={job.image}
                alt="company logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-blue-400">{job.company}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
              <p className="flex items-center gap-1">
                <MapPin size={16} /> {job.location}
              </p>
              <p className="flex items-center gap-1">
                <Briefcase size={16} /> {job.type}
              </p>
              <p className="flex items-center gap-1">
                <Clock size={16} /> Posted {job.posted}
              </p>
              <p className="flex items-center gap-1"> {job.salary}</p>
            </div>

            <p className="text-sm text-gray-300">{job.description}</p>

            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-fit">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Browse All Jobs
        </button>
      </div>
    </div>
  );
};

export default JobBoard;
