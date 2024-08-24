import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import('../components/index.vue'),
    meta: { title: 'index' }
  },
  {
    path: "/projectList",
    name: "projectList",
    component: () => import('../components/projectList.vue'),
    meta: { title: 'projectList' }
  }
];
const router = createRouter({
      history,
      routes
})
export default router
