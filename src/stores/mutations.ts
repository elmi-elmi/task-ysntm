import { SET_ARTICLES } from "./types";

export default {
  [SET_ARTICLES](state, payload) {
    state.articles = payload;
  },
};
