import { useState } from "react"
import api from "../api/axios"
import AuthLayout from "../auth/AuthLayout"
import Input from "../auth/Input"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    const res = await api.post("/auth/login", {
      email,
      password,
    })

    localStorage.setItem("accessToken", res.data.accessToken)
    alert("Login successful")
  }

  return (
    <AuthLayout title="Welcome Back">
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-[1.02] transition"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-gray-400 text-sm">
        Don’t have an account?{" "}
        <span className="text-purple-400 cursor-pointer">
          Sign Up
        </span>
      </p>
    </AuthLayout>
  )
}

export default Login

