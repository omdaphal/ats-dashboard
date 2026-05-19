import {
  FaArrowLeft,
  FaBriefcase,
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaMoneyBillWave,
  FaLaptopCode
} from "react-icons/fa"

import {
  useNavigate,
  useLocation
} from "react-router-dom"

function JobDetails() {

  const navigate = useNavigate()

  const location = useLocation()

  const job = location.state

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
        onClick={() => navigate("/jobs")}
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
            md:justify-between
            gap-6
          ">

            {/* Left */}
            <div className="
              flex
              items-center
              gap-5
            ">

              <div className="
                bg-white/20
                p-5
                rounded-2xl
              ">

                <FaBriefcase className="text-4xl" />

              </div>

              <div>

                <h1 className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  mb-2
                ">
                  {job.title}
                </h1>

                <p className="
                  text-lg
                  opacity-90
                ">
                  {job.company}
                </p>

              </div>

            </div>

            {/* Type */}
            <span className="
              bg-white
              text-blue-700
              px-5
              py-2
              rounded-full
              font-semibold
              text-sm
              w-fit
            ">
              {job.type}
            </span>

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
              Job Information
            </h2>

            <div className="space-y-5">

              {/* Location */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <FaMapMarkerAlt className="text-blue-600" />

                <span className="text-gray-700">
                  {job.location}
                </span>

              </div>

              {/* Openings */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <FaUsers className="text-blue-600" />

                <span className="text-gray-700">
                  {job.openings} Openings
                </span>

              </div>

              {/* Experience */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <FaClock className="text-blue-600" />

                <span className="text-gray-700">
                  {job.experience}
                </span>

              </div>

              {/* Salary */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <FaMoneyBillWave className="text-blue-600" />

                <span className="text-gray-700">
                  {job.salary}
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div>

            {/* Skills */}
            <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mb-5
            ">
              Required Skills
            </h2>

            <div className="
              flex
              flex-wrap
              gap-3
              mb-8
            ">

              {job.skills.map((skill, index) => (

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

            {/* Description */}
            <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mb-5
            ">
              Job Description
            </h2>

            <div className="
              bg-gray-50
              p-6
              rounded-2xl
            ">

              <div className="
                flex
                items-start
                gap-4
              ">

                <FaLaptopCode
                  className="
                    text-blue-600
                    text-2xl
                    mt-1
                  "
                />

                <p className="
                  text-gray-600
                  leading-7
                ">
                  {job.description}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default JobDetails