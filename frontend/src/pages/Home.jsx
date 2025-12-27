import { useState, useEffect } from "react"
import Hero from "../components/HeroSection"
import BikeCard from "../components/BikeCard"
import SkeletonBikeCard from "../components/SkeletonBikeCard"
import EmptyState from "../components/EmptyState"
import PaymentModal from "../components/PaymentModal"
import { bikes } from "../data/bikes"

function Home() {
  // UI State
  const [search, setSearch] = useState("")
  const [city, setCity] = useState("All")
  const [loading, setLoading] = useState(true)

  //  Payment Modal State
  const [openPayment, setOpenPayment] = useState(false)
  const [selectedBike, setSelectedBike] = useState(null)

  //  Skeleton loading demo
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  //  Filtered bikes
  const filteredBikes = bikes
    .filter((bike) =>
      bike.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((bike) =>
      city === "All" ? true : bike.location === city
    )

  return (
    <>
      {/* 🌟 HERO SECTION (controls its own glow + bg) */}
      <Hero />

      {/* 🚲 LISTING SECTION */}
      <section className="relative z-10 min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white transition-colors pt-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          
          {/* 🔍 SEARCH + FILTER */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <input
              type="text"
              placeholder="Search bikes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-gray-900
                         border border-black/10 dark:border-white/10"
            />

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white dark:bg-gray-900
                         border border-black/10 dark:border-white/10"
            >
              <option value="All">All Cities</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>

          {/* 🚲 BIKE GRID */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <SkeletonBikeCard key={i} />
              ))
            ) : filteredBikes.length === 0 ? (
              <EmptyState
                title="No bikes found"
                description="Try changing the city or search term."
                actionLabel="Reset filters"
                onAction={() => {
                  setSearch("")
                  setCity("All")
                }}
              />
            ) : (
              filteredBikes.map((bike) => (
                <BikeCard
                  key={bike.id}
                  bike={bike}
                  onBook={() => {
                    setSelectedBike(bike)
                    setOpenPayment(true)
                  }}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/*  PAYMENT MODAL */}
      <PaymentModal
        isOpen={openPayment}
        bike={selectedBike}
        onClose={() => setOpenPayment(false)}
      />
    </>
  )
}

export default Home




