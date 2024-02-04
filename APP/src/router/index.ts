import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/connexion',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/inscription',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/trouver-un-job',
      name: 'find-job',
      component: () => import('../views/FindJobView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name : 'not-found',
      component: NotFoundView,
      meta: { status: 404 }
    }
  ]
})

export default router
