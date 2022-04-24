import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Parceiros',
    component: () => import(/* webpackChunkName: "404Page" */ '../views/404Page.vue')
  },
  {
    path: '/fac',
    name: 'Contatos',
    component: () => import(/* webpackChunkName: "404Page" */ '../views/404Page.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: () => import(/* webpackChunkName: "404Page" */ '../views/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
