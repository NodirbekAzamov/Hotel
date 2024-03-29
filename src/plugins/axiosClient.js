import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://hotel-backend.1kb.uz/api",
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

export default axiosClient;