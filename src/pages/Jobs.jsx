import Navbar from "../components/Navbar"

import { useNavigate } from "react-router-dom"

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaUsers,
  FaSearch
} from "react-icons/fa"

import { useState } from "react"

function Jobs() {

  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Pune, India",
      openings: 4,
      type: "Full Time",
      experience: "2+ Years",
      salary: "₹6 LPA - ₹10 LPA",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "REST API"
      ],
      description:
        "We are looking for a skilled Frontend Developer with strong React.js knowledge to build responsive and scalable web applications."
    },

    {
      id: 2,
      title: "React Developer",
      company: "Infosys",
      location: "Mumbai, India",
      openings: 2,
      type: "Remote",
      experience: "3+ Years",
      salary: "₹8 LPA - ₹12 LPA",
      skills: [
        "React",
        "Redux",
        "TypeScript",
        "GitHub"
      ],
      description:
        "Join our development team to create modern React applications and improve user experience across enterprise platforms."
    },

    {
      id: 3,
      title: "UI/UX Designer",
      company: "Google",
      location: "Bangalore, India",
      openings: 3,
      type: "Hybrid",
      experience: "1+ Years",
      salary: "₹10 LPA - ₹18 LPA",
      skills: [
        "Figma",
        "Adobe XD",
        "Wireframing",
        "UI Design"
      ],
      description:
        "Design user-friendly interfaces and create engaging experiences for web and mobile applications."
    },

    {
      id: 4,
      title: "Backend Developer",
      company: "TCS",
      location: "Hyderabad, India",
      openings: 5,
      type: "Full Time",
      experience: "2+ Years",
      salary: "₹5 LPA - ₹9 LPA",
      skills: [
        "Java",
        "Spring Boot",
        "MySQL",
        "REST API"
      ],
      description:
        "Develop scalable backend services and APIs using Java and Spring Boot technologies."
    }
  ]

  // Search Filter
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="
        p-4
        sm:p-6
        lg:p-8
      ">

        {/* Heading */}
        <div className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
          mb-8
        ">

          <div>

            <h1 className="
              text-3xl
              font-bold
              text-gray-800
            ">
              Job Listings
            </h1>

            <p className="text-gray-500">
              Manage available job openings
            </p>

          </div>

          {/* Search */}
          <div className="
            relative
            w-full
            md:w-80
          ">

            <FaSearch
              className="
                absolute
                top-1/2
                left-4
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                border
                border-gray-300
                pl-12
                pr-4
                py-3
                rounded-xl
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-200
                bg-white
              "
            />

          </div>

        </div>

        {/* Job Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (

              <div
                key={job.id}
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                {/* Top */}
                <div className="
                  flex
                  items-start
                  justify-between
                  mb-5
                ">

                  <div className="
                    bg-blue-100
                    p-4
                    rounded-2xl
                  ">

                    <FaBriefcase
                      className="
                        text-2xl
                        text-blue-600
                      "
                    />

                  </div>

                  <span className="
                    bg-green-100
                    text-green-700
                    text-sm
                    px-3
                    py-1
                    rounded-full
                  ">
                    {job.type}
                  </span>

                </div>

                {/* Content */}
                <h2 className="
                  text-2xl
                  font-bold
                  text-gray-800
                  mb-2
                ">
                  {job.title}
                </h2>

                <p className="
                  text-gray-500
                  mb-5
                ">
                  {job.company}
                </p>

                {/* Location */}
                <div className="
                  flex
                  items-center
                  gap-3
                  text-gray-600
                  mb-3
                ">

                  <FaMapMarkerAlt />

                  <span>{job.location}</span>

                </div>

                {/* Openings */}
                <div className="
                  flex
                  items-center
                  gap-3
                  text-gray-600
                  mb-6
                ">

                  <FaUsers />

                  <span>{job.openings} Openings</span>

                </div>

                {/* Button */}
                <button
                  onClick={() =>
                    navigate("/job-details", {
                      state: job
                    })
                  }
                  className="
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  View Details
                </button>

              </div>

            ))

          ) : (

            <div className="
              col-span-full
              text-center
              py-10
              text-gray-500
              text-xl
              font-medium
            ">
              No Jobs Found
            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default Jobs