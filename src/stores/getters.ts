export default {
  userLoggedIn(state: any) {
    return !!state.user;
  },
  getArticleWithSlug: (state: any) => (slug: string) => {
    return state.articles.find((article: object) => article.slug === slug);
  },
};
