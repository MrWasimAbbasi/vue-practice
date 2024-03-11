import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/reactivity.vue')
    },
    {
      path: '/communication',
      name: 'communication',
      component: () => import('../views/Communication.vue')
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('../views/Transition.vue')
    },
    {
      path: '/plugins',
      name: 'plugins',
      component: () => import('../views/plugins.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/Grid.vue')
    }
  ]
})

export default router
