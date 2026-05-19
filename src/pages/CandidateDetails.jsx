import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaArrowLeft
} from "react-icons/fa"

import {
  useNavigate,
  useLocation
} from "react-router-dom"

function CandidateDetails() {

  const navigate = useNavigate()

  const location = useLocation()

  const candidate = location.state

  return (
    <div className="
      min-h-screen
      bg-gray-100
      p-4
      sm:p-6
      lg:p-8
    ">

      {/* Back Button */}
      <button
        onClick={() => navigate("/candidates")}
        className="
          flex
          items-center
          gap-2
          mb-6
          bg-white
          px-4
          py-3
          rounded-xl
          shadow-md
          hover:bg-gray-100
          transition-all
          duration-300
        "
      >

        <FaArrowLeft />

        Back

      </button>

      {/* Main Card */}
      <div className="
        bg-white
        rounded-3xl
        shadow-lg
        overflow-hidden
      ">

        {/* Top Section */}
        <div className="
          bg-gradient-to-r
          from-blue-600
          to-indigo-700
          p-6
          sm:p-8
          text-white
        ">

          <div className="
            flex
            flex-col
            md:flex-row
            md:items-center
            gap-6
          ">

            {/* Profile Image */}
            <img
              src={`https://i.pravatar.cc/300?img=${candidate.id + 10}`}
              alt="profile"
              className="
                w-28
                h-28
                rounded-full
                border-4
                border-white
                object-cover
              "
            />

            {/* Candidate Info */}
            <div>

              <h1 className="
                text-3xl
                sm:text-4xl
                font-bold
                mb-2
              ">
                {candidate.name}
              </h1>

              <p className="
                text-lg
                opacity-90
                mb-4
              ">
                {candidate.role}
              </p>

              <span className={`
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold

                ${
                  candidate.status === "Selected"
                    ? "bg-green-400 text-black"
                    : candidate.status === "Interview"
                    ? "bg-yellow-300 text-black"
                    : "bg-red-400 text-white"
                }
              `}>
                {candidate.status}
              </span>

            </div>

          </div>

        </div>

        {/* Details Section */}
        <div className="
          p-6
          sm:p-8
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
        ">

          {/* Left Side */}
          <div>

            <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mb-6
            ">
              Candidate Information
            </h2>

            <div className="space-y-5">

              {/* Email */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <FaEnvelope className="text-blue-600" />

                <span className="text-gray-700">
                  {candidate.email}
                </span>

              </div>

              {/* Phone */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <FaPhone className="text-blue-600" />

                <span className="text-gray-700">
                  {candidate.phone}
                </span>

              </div>

              {/* Location */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <FaMapMarkerAlt className="text-blue-600" />

                <span className="text-gray-700">
                  {candidate.location}
                </span>

              </div>

              {/* Experience */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <FaBriefcase className="text-blue-600" />

                <span className="text-gray-700">
                  {candidate.experience}
                </span>

              </div>

              {/* Education */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <FaGraduationCap className="text-blue-600" />

                <span className="text-gray-700">
                  {candidate.education}
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mb-6
            ">
              Candidate Score
            </h2>

            {/* Score Card */}
            <div className="
              bg-blue-50
              rounded-3xl
              p-6
              mb-8
            ">

              <div className="
                flex
                items-center
                justify-between
                mb-4
              ">

                <span className="
                  text-lg
                  font-medium
                  text-gray-700
                ">
                  ATS Score
                </span>

                <span className="
                  text-3xl
                  font-bold
                  text-blue-600
                ">
                  {candidate.score}%
                </span>

              </div>

              {/* Progress Bar */}
              <div className="
                w-full
                bg-gray-200
                rounded-full
                h-4
              ">

                <div
                  className="
                    bg-blue-600
                    h-4
                    rounded-full
                  "
                  style={{
                    width: `${candidate.score}%`
                  }}
                ></div>

              </div>

            </div>

            {/* Skills */}
            <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mb-5
            ">
              Skills
            </h2>

            <div className="
              flex
              flex-wrap
              gap-3
            ">

              {candidate.skills.map((skill, index) => (

                <span
                  key={index}
                  className="
                    bg-blue-100
                    text-blue-700
                    px-4
                    py-2
                    rounded-full
                    font-medium
                  "
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CandidateDetails