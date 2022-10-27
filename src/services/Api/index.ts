import axios from "axios";

export const api = axios.create({
  baseURL: "https://amazon-api.sellead.com/",
  timeout: 5000,
});
