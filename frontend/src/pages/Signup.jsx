import AuthLayout from "../auth/AuthLayout"
import Input from "../auth/Input"

function Signup() {
  return (
    <AuthLayout title="Create Account">
      <Input type="text" placeholder="Full Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-[1.02] transition">
        Sign Up
      </button>

      <p className="mt-6 text-center text-gray-400 text-sm">
        Already have an account? <span className="text-purple-400 cursor-pointer">Login</span>
      </p>
    </AuthLayout>
  )
}

export default Signup

