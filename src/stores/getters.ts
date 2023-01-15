export default {
  userLoggedIn(state: object) {
    return !!state.user;
  },
  getArticleWithSlug: (state: any) => (slug: string) => {
    return state.articles.find((article: object) => article.slug === slug);
  },
};
