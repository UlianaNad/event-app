import axios from "axios";

export const eventsApi = axios.create({
  baseURL: "http://localhost:3000/api/",
});