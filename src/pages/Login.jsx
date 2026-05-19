import { useNavigate } from "react-router-dom"
import { FaEnvelope, FaLock, FaUserTie } from "react-icons/fa"

function Login() {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/dashboard")
  }

  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
      px-4
      py-10
    ">

      {/* Login Card */}
      <div className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        shadow-xl
        p-6
        sm:p-8
        md:p-10
      ">

        {/* Logo */}
        <div className="flex justify-center mb-5">

          <div className="
            bg-blue-100
            p-5
            rounded-full
          ">
            <FaUserTie
              className="
                text-4xl
                text-blue-600
              "
            />
          </div>

        </div>

        {/* Heading */}
        <h1 className="
          text-3xl
          sm:text-4xl
          font-bold
          text-center
          text-gray-800
          mb-2
        ">
          ATS Dashboard
        </h1>

        <p className="
          text-center
          text-gray-500
          mb-8
        ">
          Login to continue
        </p>

        {/* Email Input */}
        <div className="relative mb-5">

          <FaEnvelope
            className="
              absolute
              top-1/2
              left-4
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="email"
            placeholder="Enter Email"
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
            "
          />

        </div>

        {/* Password Input */}
        <div className="relative mb-6">

          <FaLock
            className="
              absolute
              top-1/2
              left-4
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="password"
            placeholder="Enter Password"
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
            "
          />

        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
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
          Login
        </button>

        {/* Footer */}
        <p className="
          text-center
          text-gray-400
          text-sm
          mt-6
        ">
          © 2026 ATS Dashboard
        </p>

      </div>

    </div>
  )
}

export default Login