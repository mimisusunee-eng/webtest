import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '../layout/Layout.vue'
import Sale from '../views/sale.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'


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
          icon: 'Sell',
          requiresAuth: true
        }
      },

      {
        path: 'estate',
        component: () => import('../views/estate.vue'),
        meta: {
          title: '楼盘管理',
          icon: 'OfficeBuilding',
          requiresAuth: true
        }
      },

      {
        path: 'house/sale',
        component: () => import('../views/housesale.vue'),  
        meta: {
          title: '销售房源管理',
          requiresAuth: true
        }
      },

      {
        path: 'house/rent/bkk',
        component: () => import('../views/houseRentBkk.vue'),
        meta: {
          title: '曼谷分部租房',
          requiresAuth: true
        }
      },

      {
        path: 'house/rent/manage',
        component: () => import('../views/houseRentManage.vue'),
        meta: {
          title: '曼谷托管租房',
          requiresAuth: true
        }
      },

      {
        path: 'house/rent/pattaya',
        component: () => import('../views/houseRentPattaya.vue'),
        meta: {
          title: '芭提雅托管租房',
          requiresAuth: true
        }
      },

      {
         path: 'homestay',
        component: () => import('@/views/List.vue'),
        meta: { title: '民宿管理' }
      },

      {
         path: 'miniapp/manager',
        component: () => import('@/views/List.vue'),
        meta: { title: '大管家小程序' }
      },

      {
         path: 'agent-app/manager',
        component: () => import('@/views/List.vue'),
        meta: { title: '经纪人小程序' }
      },

      {
         path: 'business-school/course',
        component: () => import('@/views/List.vue'),
        meta: { title: '商学院' }
      },

      {
         path: 'video/list',
        component: () => import('@/views/List.vue'),
        meta: { title: '短视频管理' }
      },

      {
         path: 'system/user',
        component: () => import('@/views/List.vue'),
        meta: { title: '系统管理' }
      },

      {
        path: 'house/land',
        component: () => import('../views/houseLand.vue'),
        meta: {
          title: '土地管理',
          requiresAuth: true
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
  } else if (token && to.path === '/login') {
    next('/sale')
  } else {
    next()
  }
})

export default router
