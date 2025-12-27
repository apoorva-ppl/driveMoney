function EmptyState({
  title = "Nothing here",
  description = "Try adjusting your filters or search.",
  actionLabel,
  onAction,
}) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center text-center py-20">
      <div className="text-6xl mb-4">🧐</div>

      <h3 className="text-2xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
        {description}
      </p>

      {actionLabel && (
        <button
          onClick={onAction}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default EmptyState
