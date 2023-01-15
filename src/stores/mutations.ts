import { SET_ARTICLES, SET_USER_DATA, CLEAR_USER_DATA } from "./types";
import axios from "axios";

export default {
  [SET_ARTICLES](state, payload) {
    state.articles = payload;
  },
  [SET_USER_DATA](state, payload) {
    state.user = payload;
    localStorage.setItem("user", JSON.stringify(payload));
  },
  [CLEAR_USER_DATA]() {
    localStorage.removeItem("user");
    location.reload();
  },
};
