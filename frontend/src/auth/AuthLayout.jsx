import { motion } from "framer-motion"

function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px] opacity-40" />
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px] opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          {title}
        </h2>

        {children}
      </motion.div>
    </div>
  )
}

export default AuthLayout
