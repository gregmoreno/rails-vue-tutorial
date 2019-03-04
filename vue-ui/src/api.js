import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:3000";

// `baseURL` is prepended to URLs passed to axios
axios.defaults.baseURL = API_URL;

// POST with JSON content type
axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
  getEvents() {
    return axios.get("/events");
  },
};