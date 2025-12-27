import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function PaymentModal({ isOpen, onClose, bike }) {
  const [days, setDays] = useState(1)
  const [status, setStatus] = useState("idle")
  // idle | processing | success

  if (!bike) return null

  const subtotal = bike.price * days
  const serviceFee = Math.round(subtotal * 0.05)
  const total = subtotal + serviceFee

  /*  ESC KEY CLOSE — INSIDE COMPONENT */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen])

  const handlePay = () => {
    setStatus("processing")

    // Simulate payment gateway delay
    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  const handleClose = () => {
    setStatus("idle")
    setDays(1)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
          onClick={handleClose}                // 👈 OUTSIDE CLICK CLOSE
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()} // 👈 STOP INSIDE CLICK
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-md rounded-2xl bg-white dark:bg-black text-black dark:text-white p-6 border border-black/10 dark:border-white/10"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {status === "success" ? "Payment Successful" : "Checkout"}
              </h3>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-black dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            {status === "success" ? (
              /* SUCCESS STATE */
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-2xl font-semibold mb-2">
                  Booking Confirmed!
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Your bike has been successfully booked.
                </p>

                <button
                  onClick={handleClose}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                {/* BIKE INFO */}
                <div className="mb-4">
                  <p className="font-medium">{bike.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ₹{bike.price} / day
                  </p>
                </div>

                {/* DAYS SELECT */}
                <div className="mb-6">
                  <label className="block text-sm mb-2">
                    Duration (days)
                  </label>
                  <select
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    disabled={status === "processing"}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 border border-black/10 dark:border-white/10"
                  >
                    {[1, 2, 3, 4, 5, 7].map((d) => (
                      <option key={d} value={d}>
                        {d} day{d > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PRICE BREAKDOWN */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Service fee</span>
                    <span>₹{serviceFee}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                {/* PAY BUTTON */}
                <button
                  onClick={handlePay}
                  disabled={status === "processing"}
                  className="w-full py-3 rounded-xl font-semibold text-white
                             bg-gradient-to-r from-purple-500 to-blue-500
                             hover:opacity-90 transition
                             disabled:opacity-60"
                >
                  {status === "processing" ? "Processing..." : "Pay Now"}
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PaymentModal


