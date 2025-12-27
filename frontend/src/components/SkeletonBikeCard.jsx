const SkeletonBikeCard = () => {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10
                 bg-white dark:bg-white/5 backdrop-blur-xl shadow-md
                 animate-pulse transition-colors duration-300"
    >
      {/* Image */}
      <div className="h-48 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="h-5 w-3/4 rounded bg-gray-300 dark:bg-gray-700" />
        <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-700" />
        <div className="h-11 w-full rounded-xl bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  )
}

export default SkeletonBikeCard

