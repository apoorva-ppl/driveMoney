import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../auth/AuthLayout";
import Input from "../auth/Input";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault(); // 🔥 THIS IS CRITICAL

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        { name, email, password }
      );

      alert("Signup successful! Please login.");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSignup}>
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-center text-gray-400 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-purple-400">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Signup;



