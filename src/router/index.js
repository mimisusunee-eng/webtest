import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Layout from '@/layout/Layout.vue'
import Sale from '../views/sale.vue'
import homestay from '@/views/homestay.vue'


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
        component: () => import('@/views/sale.vue'),
        meta: { requiresAuth: true }
      },

      {
        path: 'estate',
        component: () => import('@/views/estate.vue'),
        meta: { requiresAuth: true }
      },

      {
        path: 'house/sale',
        component: () => import('@/views/housesale.vue'),
        meta: { requiresAuth: true }
      },

      {
        path: 'house/rent/bkk',
        component: () => import('@/views/houseRentBkk.vue'),
        meta: { requiresAuth: true }
      },

      {
        path: 'house/rent/manage',
        component: () => import('@/views/houseRentManage.vue'),
        meta: { requiresAuth: true }
      },

      {
        path: 'house/rent/pattaya',
        component: () => import('@/views/houseRentPattaya.vue'),
        meta: { requiresAuth: true }
      },

      {
        path: 'house/land',
        component: () => import('@/views/houseLand.vue'),
        meta: { requiresAuth: true }
      },

      {
        path: 'homestay',
        component: () => import('@/views/homestay.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (!token && to.path !== '/login') {
    next('/login')
  } else if (token && to.path === '/login') {
    next('/sale')
  } else {
    next()
  }
})

export default router
