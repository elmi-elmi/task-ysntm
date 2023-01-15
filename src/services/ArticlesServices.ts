import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  articles(query) {
    const limit = query?.limit || 10;
    const offset = query?.offset || 0;
    return apiClient.get(`/articles?offset=${offset}&limit=${limit}`);
  },
};
