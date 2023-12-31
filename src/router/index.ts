import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: About
    }
  ]
})

export default router
