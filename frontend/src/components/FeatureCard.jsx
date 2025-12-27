function FeatureCard({ title, desc }) {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-white hover:scale-[1.03] hover:bg-white/20 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300">{desc}</p>
    </div>
  )
}

export default FeatureCard
