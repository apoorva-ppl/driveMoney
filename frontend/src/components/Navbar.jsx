import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/70 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide text-black dark:text-white">
          Drive-Earn
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">

          <Link className="text-black dark:text-white hover:opacity-80" to="/">
            Home
          </Link>

          <Link className="text-black dark:text-white hover:opacity-80" to="/login">
            Login
          </Link>

          {/* Signup CTA */}
          <Link
            to="/signup"
            className="px-5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition"
          >
            Signup
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-11 h-6 flex items-center rounded-full px-1 transition-colors duration-300
              ${theme === "dark" ? "bg-gray-600" : "bg-gray-300"}`}
          >
            <span
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300
                ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


