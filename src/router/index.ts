import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import('../components/home.vue'),
    meta: { title: 'home' }
  },
  {
    path: "/area",
    name: "area",
    component: () => import('../components/area.vue'),
    meta: { title: 'area' }
  },
];
const router = createRouter({
      history,
      routes
})
export default router
