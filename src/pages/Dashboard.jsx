import Navbar from "../components/Navbar"

import { useNavigate } from "react-router-dom"

import {
  FaUsers,
  FaUserCheck,
  FaClock,
  FaBriefcase,
  FaArrowUp,
  FaPlus,
  FaCalendarCheck
} from "react-icons/fa"

function Dashboard() {

  const navigate = useNavigate()

  const cards = [
    {
      title: "Total Candidates",
      value: 120,
      icon: <FaUsers />,
      color: "from-blue-500 to-blue-700",
      progress: "75%",
      route: "/candidates"
    },

    {
      title: "Selected",
      value: 45,
      icon: <FaUserCheck />,
      color: "from-green-500 to-green-700",
      progress: "60%"
    },

    {
      title: "Pending",
      value: 30,
      icon: <FaClock />,
      color: "from-yellow-400 to-orange-500",
      progress: "40%"
    },

    {
      title: "Total Jobs",
      value: 12,
      icon: <FaBriefcase />,
      color: "from-purple-500 to-purple-700",
      progress: "85%",
      route: "/jobs"
    }
  ]

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

        {/* Welcome Section */}
        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6
          mb-8
        ">

          <div>

            <h2 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-gray-800
              mb-2
            ">
              Welcome Admin 👋
            </h2>

            <p className="text-gray-500">
              Manage candidates, jobs and recruitment activities
            </p>

          </div>

          {/* Quick Actions */}
          <div className="
            flex
            flex-wrap
            gap-3
          ">
          </div>

        </div>

        {/* Dashboard Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        ">

          {cards.map((card, index) => (

            <div
              key={index}
              onClick={() =>
                card.route && navigate(card.route)
              }
              className={`
                bg-gradient-to-r
                ${card.color}
                rounded-3xl
                p-6
                text-white
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                cursor-pointer
              `}
            >

              {/* Card Top */}
              <div className="
                flex
                items-center
                justify-between
                mb-5
              ">

                <div className="
                  text-5xl
                  opacity-80
                ">
                  {card.icon}
                </div>

                <div className="
                  bg-white/20
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  flex
                  items-center
                  gap-1
                ">

                  <FaArrowUp />

                  Live

                </div>

              </div>

              {/* Card Content */}
              <h3 className="
                text-lg
                font-medium
                mb-2
              ">
                {card.title}
              </h3>

              <p className="
                text-4xl
                font-bold
                mb-4
              ">
                {card.value}
              </p>

              {/* Progress Bar */}
              <div className="
                w-full
                bg-white/20
                h-2
                rounded-full
              ">

                <div
                  className="
                    bg-white
                    h-2
                    rounded-full
                  "
                  style={{
                    width: card.progress
                  }}
                ></div>

              </div>

            </div>

          ))}

        </div>

        {/* Analytics Section */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
          mt-10
        ">

          {/* Hiring Stats */}
          <div className="
            bg-white
            rounded-3xl
            shadow-md
            p-6
          ">

            <h3 className="
              text-xl
              font-bold
              text-gray-800
              mb-5
            ">
              Hiring Analytics
            </h3>

            <div className="space-y-5">

              <div>

                <div className="
                  flex
                  justify-between
                  mb-2
                ">

                  <span className="text-gray-600">
                    Monthly Hiring
                  </span>

                  <span className="font-semibold">
                    70%
                  </span>

                </div>

                <div className="
                  w-full
                  bg-gray-200
                  h-3
                  rounded-full
                ">

                  <div className="
                    bg-blue-600
                    h-3
                    rounded-full
                    w-[70%]
                  "></div>

                </div>

              </div>

              <div>

                <div className="
                  flex
                  justify-between
                  mb-2
                ">

                  <span className="text-gray-600">
                    Interviews Scheduled
                  </span>

                  <span className="font-semibold">
                    55%
                  </span>

                </div>

                <div className="
                  w-full
                  bg-gray-200
                  h-3
                  rounded-full
                ">

                  <div className="
                    bg-green-600
                    h-3
                    rounded-full
                    w-[55%]
                  "></div>

                </div>

              </div>

            </div>

          </div>

          {/* Recent Activity */}
          <div className="
            lg:col-span-2
            bg-white
            rounded-3xl
            shadow-md
            p-6
          ">

            <h3 className="
              text-2xl
              font-bold
              text-gray-800
              mb-5
            ">
              Recent Activity
            </h3>

            <div className="space-y-5">

              {/* Activity */}
              <div className="
                flex
                items-start
                justify-between
                border-b
                pb-4
              ">

                <div className="
                  flex
                  items-start
                  gap-4
                ">

                  <div className="
                    bg-blue-100
                    p-3
                    rounded-xl
                  ">

                    <FaUsers className="text-blue-600" />

                  </div>

                  <div>

                    <p className="
                      text-gray-800
                      font-medium
                    ">
                      New candidate applied for Frontend Developer
                    </p>

                    <p className="
                      text-sm
                      text-gray-400
                    ">
                      Rahul Sharma submitted application
                    </p>

                  </div>

                </div>

                <span className="
                  text-sm
                  text-gray-400
                ">
                  2 mins ago
                </span>

              </div>

              {/* Activity */}
              <div className="
                flex
                items-start
                justify-between
                border-b
                pb-4
              ">

                <div className="
                  flex
                  items-start
                  gap-4
                ">

                  <div className="
                    bg-green-100
                    p-3
                    rounded-xl
                  ">

                    <FaCalendarCheck className="text-green-600" />

                  </div>

                  <div>

                    <p className="
                      text-gray-800
                      font-medium
                    ">
                      Interview scheduled with Priya Patil
                    </p>

                    <p className="
                      text-sm
                      text-gray-400
                    ">
                      UI/UX Designer interview tomorrow
                    </p>

                  </div>

                </div>

                <span className="
                  text-sm
                  text-gray-400
                ">
                  1 hour ago
                </span>

              </div>

              {/* Activity */}
              <div className="
                flex
                items-start
                justify-between
              ">

                <div className="
                  flex
                  items-start
                  gap-4
                ">

                  <div className="
                    bg-purple-100
                    p-3
                    rounded-xl
                  ">

                    <FaBriefcase className="text-purple-600" />

                  </div>

                  <div>

                    <p className="
                      text-gray-800
                      font-medium
                    ">
                      Backend Developer position opened
                    </p>

                    <p className="
                      text-sm
                      text-gray-400
                    ">
                      New hiring requirement added
                    </p>

                  </div>

                </div>

                <span className="
                  text-sm
                  text-gray-400
                ">
                  Today
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard