import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/article/:slug",
      name: "article",
      component: () => import("@/views/ArticleView.vue"),
      meta: { reqAuth: false },
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
      meta: { reqAuth: false },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SingupView.vue"),
    },
    // {
    //   path: "/404/:resource",
    //   name: "404Resource",
    //   component: () => import("../views/AboutView.vue"),
    //   props: true,
    //   meta: { reqAuth: true },
    // },
    {
      path: "/500",
      name: "networkError",
      component: () => import("@/views/NetworkErrorView.vue"),
      meta: { reqAuth: false },
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: () => import("@/views/NotFoundView.vue"),
      meta: { reqAuth: false },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.meta.reqAuth && !loggedIn) next("/login");
  if ((to.fullPath === "/login" || to.fullPath === "/register") && loggedIn)
    next("/");
  next();
});

export default router;
