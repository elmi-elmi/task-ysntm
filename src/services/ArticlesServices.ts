import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  articles() {
    return apiClient.get("/articles");
  },
};
