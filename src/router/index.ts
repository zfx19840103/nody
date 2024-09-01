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
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../components/login.vue'),
    meta: { title: 'login' }
  },
  {
    path: "/manage",
    name: "manage",
    component: () => import('../components/manage.vue'),
    meta: { title:'manage' }
  },
];
const router = createRouter({
      history,
      routes
})
export default router
