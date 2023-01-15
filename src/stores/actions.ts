import { SET_ARTICLES } from "@/stores/types";

import articlesServices from "@/services/ArticlesServices";
export default {
  getArticles({ commit }) {
    articlesServices.articles().then((res) => {
      console.log(res.data);
      commit(SET_ARTICLES, res.data.articles);
    });
  },
};
