import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Layout from '@/layout/Layout.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: '登录' }
  },

  {
    path: '/',
    component: Layout,
    redirect: '/sale',
    meta: { hideInBreadcrumb: true },
    children: [
      {
        path: 'sale',
        name: 'Sale',
        component: () => import('@/views/sale.vue'),
        meta: { title: '首页', requiresAuth: true }
      },

      {
        path: 'estate',
        name: 'Estate',
        component: () => import('@/views/estate.vue'),
        meta: { title: '楼盘管理', requiresAuth: true }
      },

      {
        path: 'house',
        name: 'House',
        meta: { title: '房源管理', requiresAuth: true },
        children: [
          {
            path: 'sale',
            name: 'HouseSale',
            component: () => import('@/views/housesale.vue'),
            meta: { title: '销售房源管理', requiresAuth: true }
          },
          {
            path: 'rent/bkk',
            name: 'HouseRentBkk',
            component: () => import('@/views/houseRentBkk.vue'),
            meta: { title: '曼谷分部租房', requiresAuth: true }
          },
          {
            path: 'rent/manage',
            name: 'HouseRentManage',
            component: () => import('@/views/houseRentManage.vue'),
            meta: { title: '曼谷托管租房', requiresAuth: true }
          },
          {
            path: 'rent/pattaya',
            name: 'HouseRentPattaya',
            component: () => import('@/views/houseRentPattaya.vue'),
            meta: { title: '芭提雅托管租房', requiresAuth: true }
          },
          {
            path: 'land',
            name: 'HouseLand',
            component: () => import('@/views/houseLand.vue'),
            meta: { title: '土地管理', requiresAuth: true }
          }
        ]
      },

      {
        path: 'homestay',
        name: 'Homestay',
        component: () => import('@/views/homestay.vue'),
        meta: { title: '民宿管理', requiresAuth: true }
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
