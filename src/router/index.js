import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '../layout/Layout.vue'
import List from '../views/List.vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/list',
    children: [
      {
        path: 'list',
        component: List
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
