import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import BikeDetails from "./pages/BikeDetails"

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

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}



export default App
