function Input(props) {
  return (
    <input
      {...props}
      className="w-full mb-4 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition"
    />
  );
}

export default Input;

