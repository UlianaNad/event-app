import axios from "axios";

export const eventsApi = axios.create({
  baseURL: "https://65a930ca219bfa371868b9c0.mockapi.io/",
});