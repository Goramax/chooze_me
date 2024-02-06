import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import RegisterViewVue from '@/views/RegisterView.vue'

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
      component: RegisterViewVue
    },
    {
      path: '/trouver-un-job',
      name: 'find-job',
      component: () => import('../views/FindJobView.vue')
    },
    {
      path: '/aide-juridique',
      name: 'legal-help',
      component: () => import('../views/LegalAssistView.vue')
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../views/MessagesView.vue')
    },
    {
      path: '/annonce/:id',
      name: 'job',
      component: () => import('../views/JobDetailView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: { status: 404 }
    }
  ]
})

export default router
