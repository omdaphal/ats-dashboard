import Navbar from "../components/Navbar"

import { useNavigate } from "react-router-dom"

import {
  FaSearch,
  FaEye
} from "react-icons/fa"

import { useState } from "react"

function Candidates() {

  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  const candidates = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      score: 85,
      status: "Selected",
      experience: "2 Years",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
      location: "Pune, India",
      education: "B.Tech Computer Engineering",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "GitHub"
      ]
    },

    {
      id: 2,
      name: "Priya Patil",
      role: "UI/UX Designer",
      score: 72,
      status: "Interview",
      experience: "1 Year",
      email: "priya@gmail.com",
      phone: "+91 9876501234",
      location: "Mumbai, India",
      education: "B.Des UI/UX",
      skills: [
        "Figma",
        "Adobe XD",
        "UI Design",
        "Wireframing"
      ]
    },

    {
      id: 3,
      name: "Amit Joshi",
      role: "React Developer",
      score: 91,
      status: "Selected",
      experience: "3 Years",
      email: "amit@gmail.com",
      phone: "+91 9988776655",
      location: "Bangalore, India",
      education: "B.Tech IT",
      skills: [
        "React",
        "Redux",
        "JavaScript",
        "API Integration"
      ]
    },

    {
      id: 4,
      name: "Sneha More",
      role: "Backend Developer",
      score: 65,
      status: "Pending",
      experience: "Fresher",
      email: "sneha@gmail.com",
      phone: "+91 9871234567",
      location: "Hyderabad, India",
      education: "MCA",
      skills: [
        "Java",
        "Spring Boot",
        "MySQL",
        "REST API"
      ]
    }
  ]

  // Search Filter
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(search.toLowerCase()) ||
    candidate.role.toLowerCase().includes(search.toLowerCase())
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

        {/* Header */}
        <div className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
          mb-8
        ">

          {/* Title */}
          <div>

            <h1 className="
              text-3xl
              font-bold
              text-gray-800
            ">
              Candidates
            </h1>

            <p className="text-gray-500">
              Manage candidate applications
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
              placeholder="Search candidates..."
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

        {/* Candidate Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">

          {filteredCandidates.length > 0 ? (

            filteredCandidates.map((candidate) => (

              <div
                key={candidate.id}
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

                {/* Profile Section */}
                <div className="
                  flex
                  items-center
                  gap-4
                  mb-5
                ">

                  <img
                    src={`https://i.pravatar.cc/150?img=${candidate.id + 10}`}
                    alt="profile"
                    className="
                      w-16
                      h-16
                      rounded-full
                      object-cover
                    "
                  />

                  <div>

                    <h2 className="
                      text-xl
                      font-bold
                      text-gray-800
                    ">
                      {candidate.name}
                    </h2>

                    <p className="text-gray-500">
                      {candidate.role}
                    </p>

                  </div>

                </div>

                {/* Details */}
                <div className="
                  space-y-3
                  mb-6
                ">

                  {/* Experience */}
                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <span className="text-gray-500">
                      Experience
                    </span>

                    <span className="
                      font-semibold
                      text-gray-700
                    ">
                      {candidate.experience}
                    </span>

                  </div>

                  {/* Score */}
                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <span className="text-gray-500">
                      Score
                    </span>

                    <span className="
                      font-bold
                      text-blue-600
                    ">
                      {candidate.score}%
                    </span>

                  </div>

                  {/* Status */}
                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <span className="text-gray-500">
                      Status
                    </span>

                    <span className={`
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium

                      ${
                        candidate.status === "Selected"
                          ? "bg-green-100 text-green-700"
                          : candidate.status === "Interview"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}>
                      {candidate.status}
                    </span>

                  </div>

                </div>

                {/* Button */}
                <button
                  onClick={() =>
                    navigate("/candidate-details", {
                      state: candidate
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
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >

                  <FaEye />

                  View Profile

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
              No Candidates Found
            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default Candidates