import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"

function Stars({ rating }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ))}
      {half && <FaStarHalfAlt className="text-yellow-400 text-sm" />}
    </div>
  )
}

function Badge({ label }) {
  if (!label) return null
  const styles = {
    Popular: "bg-pink-500/90",
    New: "bg-emerald-500/90",
    Verified: "bg-blue-500/90",
  }
  return (
    <span
      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur ${styles[label]}`}
    >
      {label}
    </span>
  )
}

function BikeCard({ bike, onBook }) {
  return (
    <Link to={`/bike/${bike.id}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10
                   bg-white dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl
                   transition-colors duration-300"
      >
        {/* IMAGE */}
        <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
          <img
            src={bike.image}
            alt={bike.name}
            loading="lazy"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/600x400/111827/FFFFFF?text=Bike+Image"
            }}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
          />

          {/* Badge + Price */}
          <Badge label={bike.badge} />
          <span className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur">
            ₹{bike.price}/day
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-black dark:text-white leading-tight">
            {bike.name}
          </h3>

          {/* Location */}
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <FiMapPin />
            <span>{bike.location}</span>
          </div>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <Stars rating={bike.rating} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {bike.rating} ({bike.reviews})
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={(e) => {
              e.preventDefault()
              onBook()
            }}
            className="mt-4 w-full py-2 rounded-xl font-semibold
                       bg-gradient-to-r from-purple-500 to-blue-500
                       text-white hover:opacity-90 hover:scale-[1.02]
                       transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </motion.div>
    </Link>
  )
}

export default BikeCard




