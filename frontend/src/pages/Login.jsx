function Login() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 mb-3"
      />
      <button className="w-full bg-black text-white p-2">
        Login
      </button>
    </div>
  )
}

export default Login
