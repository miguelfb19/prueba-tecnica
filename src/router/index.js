import { createRouter, createWebHistory } from 'vue-router'
import Form from '@/components/Form.vue'
import HomeView from '@/views/HomeView.vue'
import Data from '@/components/Data.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    },

    
  ]
})

export default router
