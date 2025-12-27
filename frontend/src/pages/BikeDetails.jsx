import { useParams } from "react-router-dom"
import { useState } from "react"
import PaymentModal from "../components/PaymentModal"
import { bikes } from "../data/bikes"

function BikeDetails() {
  const { id } = useParams()
  const bike = bikes.find((b) => b.id === Number(id))

  const [openPayment, setOpenPayment] = useState(false)

  if (!bike) {
    return <div className="p-20 text-center">Bike not found</div>
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        
        {/* IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src={bike.image}
            alt={bike.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            {bike.name}
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            📍 {bike.location}
          </p>

          <p className="mt-6 text-2xl font-semibold">
            ₹{bike.price} / day
          </p>

          <ul className="mt-6 space-y-2">
            {bike.features.map((feature, i) => (
              <li
                key={i}
                className="px-4 py-2 rounded-lg bg-white dark:bg-white/10 border border-black/10 dark:border-white/10"
              >
                ✔ {feature}
              </li>
            ))}
          </ul>

          {/* BOOK BUTTON */}
          <button
            onClick={() => setOpenPayment(true)}
            className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition"
          >
            Book Now
          </button>
         
          
        </div>
      </div>

      {/* PAYMENT MODAL — MUST BE HERE */}
      <PaymentModal
        isOpen={openPayment}
        onClose={() => setOpenPayment(false)}
        bike={bike}
      />
    </section>
  )
}

export default BikeDetails

