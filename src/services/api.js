import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3000/api",
});

export default api;
