import { useEffect } from "react";
import api from "../api/axios";

export default function Admin() {
  useEffect(() => {
    api.get("/auth/admin")
      .then((res) => alert(res.data.message))
      .catch(() => alert("Admin access only"));
  }, []);

  return <h2>Admin Dashboard</h2>;
}
