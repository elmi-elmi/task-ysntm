import { SET_ARTICLES } from "@/stores/types";

import articlesServices from "@/services/ArticlesServices";
import accountServices from "@/services/AccountServices";
export default {
  getArticles({ commit }, payload) {
    articlesServices.articles(payload).then((res) => {
      commit(SET_ARTICLES, res.data.articles);
    });
  },
  /**
   * POST request to services
   * sign up with new email and password
   * then add user to state
   *
   * @param credentials are email and password
   * @return promise contain response from backend
   */
  register({ commit }, credentials) {
    return accountServices
      .register(credentials)
      .then(({ data }) => commit("SET_USER_DATA", data))
      .catch((e) => {
        throw e;
      });
  },

  /**
   * POST request to services
   * new login with new email and password
   * then add user to state
   *
   * @param credentials are email and password
   * @return promise contain response from backend
   */
  login({ commit }, credentials) {
    return accountServices
      .login(credentials)
      .then(({ data }) => commit("SET_USER_DATA", data))
      .catch((e) => {
        throw e;
      });
  },

  logout({ commit }) {
    commit("CLEAR_USER_DATA");
  },
};
