import AuthLayout from "../auth/AuthLayout"
import Input from "../auth/Input"

function Login() {
  return (
    <AuthLayout title="Welcome Back">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-[1.02] transition">
        Login
      </button>

      <p className="mt-6 text-center text-gray-400 text-sm">
        Don’t have an account? <span className="text-purple-400 cursor-pointer">Sign up</span>
      </p>
    </AuthLayout>
  )
}

export default Login

