import { useEffect, useState } from "react";
import api from "../api/axios";
import LogoutButton from "../components/LogoutButton";

// Chart imports
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const fetchStats = async () => {
    const res = await api.get("/admin/stats");
    setStats(res.data);
  };

  const fetchTransactions = async () => {
    const res = await api.get("/transactions/all");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchStats();
    fetchTransactions();
  }, []);

  const deleteTransaction = async (id) => {
    if (!window.confirm("Delete this transaction?")) return;
    await api.delete(`/transactions/${id}`);
    fetchTransactions();
  };

  const chartData = {
    labels: transactions.map((t) => t.user?.email || "Unknown"),
    datasets: [
      {
        label: "Earnings",
        data: transactions.map((t) => t.amount),
        backgroundColor: "rgba(99, 102, 241, 0.7)",
      },
    ],
  };

  if (!stats) return <p>Loading admin dashboard...</p>;

  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <LogoutButton />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800 p-4 rounded">
          <p>Total Users</p>
          <h3 className="text-2xl">{stats.totalUsers}</h3>
        </div>
        <div className="bg-slate-800 p-4 rounded">
          <p>Admins</p>
          <h3 className="text-2xl">{stats.admins}</h3>
        </div>
        <div className="bg-slate-800 p-4 rounded">
          <p>Users</p>
          <h3 className="text-2xl">{stats.users}</h3>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded mb-6 text-black">
        <h3 className="mb-2 font-semibold">Earnings Overview</h3>
        <Bar data={chartData} />
      </div>

      {/* Transactions */}
      <div className="bg-slate-900 p-4 rounded">
        <h3 className="text-xl mb-4">All Transactions</h3>

        {transactions.map((t) => (
          <div
            key={t._id}
            className="flex justify-between items-center border-b border-gray-600 py-2"
          >
            <div>
              <p className="text-sm">
                <span className="font-semibold">User:</span>{" "}
                {t.user?.email}
              </p>
              <p className="text-sm">
                {t.source} — ₹{t.amount}
              </p>
            </div>

            <button
              onClick={() => deleteTransaction(t._id)}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

