import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '../layout/Layout.vue'
import Sale from '../views/sale.vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/sale',
    children: [
      {
        path: 'sale',
        component: Sale
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
