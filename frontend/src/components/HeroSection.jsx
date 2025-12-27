import { motion } from "framer-motion"

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-50 text-black dark:bg-black dark:text-white
">

      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-40 animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-40 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Ride Smart. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Earn Effortlessly.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          A premium bike rental & earning platform built for speed, trust, and style.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-110 transition-all duration-300">
            Explore Bikes
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-300">
            List Your Bike
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection

