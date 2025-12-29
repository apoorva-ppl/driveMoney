import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    api.get("/admin/users")
      .then((res) => setUsers(res.data))
      .catch(() => alert("Failed to fetch users"));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const changeRole = async (id, role) => {
    await api.put(`/admin/users/${id}/role`, { role });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete user?")) return;
    await api.delete(`/admin/users/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h2>Manage Users</h2>

      {users.map((u) => (
        <div
          key={u._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>Email: {u.email}</p>
          <p>Role: {u.role}</p>

          <button onClick={() => changeRole(u._id, "admin")}>
            Make Admin
          </button>

          <button onClick={() => changeRole(u._id, "user")}>
            Make User
          </button>

          <button onClick={() => deleteUser(u._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
