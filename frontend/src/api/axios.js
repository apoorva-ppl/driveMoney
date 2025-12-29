import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
   withCredentials: true,
});

// Attach access token to every request
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auto refresh access token if expired
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const res = await axios.post(
          "http://localhost:5001/api/auth/refresh",
          { refreshToken }
        );

        localStorage.setItem("accessToken", res.data.accessToken);

        originalRequest.headers.Authorization =
          `Bearer ${res.data.accessToken}`;

        return api(originalRequest);
      } catch (err) {
        // Refresh failed → logout
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
