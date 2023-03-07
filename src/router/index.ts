import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Login from "@/pages/login"
import Count from "@/pages/count"


const routes: RouteRecordRaw[] = [
    { path: '/', redirect: "/login" },
    { path: '/login', component: Login, name: "login" },
    { path: '/home', component: () => import("@/pages/home"), name: "home" },
    { path: '/count', component: Count, name: "count" },
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})  