import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '../layout/Layout.vue'
import Sale from '../views/sale.vue'

const routes = [
  {
    path: '/login',
    component: Login,
    meta: { title: 'เข้าสู่ระบบ' }
  },

  {
    path: '/',
    component: Layout,
    redirect: '/sale',
    meta: { title: '房源管理' },
    children: [
      {
        path: 'sale',
        component: Sale,
        meta: {
          title: '销售房源管理',
          icon: 'Sell'
        }
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
  } else {
    next()
  }
})

export default router
