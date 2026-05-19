import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const location = useLocation()

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <div className="
      bg-white
      shadow-md
      px-4
      sm:px-6
      py-4
      flex
      flex-col
      md:flex-row
      md:items-center
      md:justify-between
      gap-4
    ">

      {/* Logo */}
      <div>

        <h1 className="
          text-2xl
          font-bold
          text-gray-800
        ">
          ATS Dashboard
        </h1>

        <p className="
          text-gray-500
          text-sm
        ">
          Recruitment Management System
        </p>

      </div>

      {/* Navigation */}
      <div className="
        flex
        items-center
        gap-3
        flex-wrap
      ">

        <Link
          to="/dashboard"
          className={`
            px-4
            py-2
            rounded-xl
            font-medium
            transition-all
            duration-300

            ${
              location.pathname === "/dashboard"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          Dashboard
        </Link>

        <Link
          to="/jobs"
          className={`
            px-4
            py-2
            rounded-xl
            font-medium
            transition-all
            duration-300

            ${
              location.pathname === "/jobs"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          Jobs
        </Link>

        <Link
          to="/candidates"
          className={`
            px-4
            py-2
            rounded-xl
            font-medium
            transition-all
            duration-300

            ${
              location.pathname === "/candidates"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          Candidates
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-xl
            transition-all
            duration-300
          "
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default Navbar