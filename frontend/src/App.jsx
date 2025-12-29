import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import BikeDetails from "./pages/BikeDetails"
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bike/:id" element={<BikeDetails />} />
          <Route
  path="/admin/dashboard"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>

<Route
  path="/admin/users"
  element={
    <AdminRoute>
      <AdminUsers />
    </AdminRoute>
  }
/>

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}



export default App
