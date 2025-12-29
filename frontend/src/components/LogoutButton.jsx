import api from "../api/axios";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      // ignore backend error
    } finally {
      // clear tokens anyway
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      window.location.href = "/login";
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
