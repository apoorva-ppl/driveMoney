import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/auth/profile")
      .then((res) => setUser(res.data.user))
      .catch(() => alert("Not authorized"));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
