import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Login from "@/pages/login/index.vue";
import Count from "@/pages/count";
import NotFound from "@/pages/NotFound/index.vue";
export const initRouter = function () {
  const routes: RouteRecordRaw[] = [
    {
      path: "/",
      component: () => import("@/pages/Layout/index.vue"),
      redirect: "/home",
      name: "layout",
      children: [
        {
          path: "/home",
          component: () => import("@/pages/home"),
          name: "home",
        },
        { path: "/count", component: Count, name: "count" },
      ],
    },
    { path: "/login", component: Login, name: "login" },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  return router;
};
