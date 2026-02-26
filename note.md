# 主要学习

This project is developed using Vue 3 + Vite to practice real-world frontend development workflows. The main goal is to understand and implement key concepts such as: Vue Router , Dynamic Sidebar Menu , Route Permission Control , State Management using Pinia , keep-alive caching , Responsive Layout , Mock API usage and Git & GitHub workflow .
This project simulates an admin management system with login authentication, dynamic menus, and list pages with pagination.

## 1. 路由如何动态生成菜单栏
  We use route configuration and meta information (such as title and icon) to dynamically generate the sidebar menu.
  This allows the menu to update automatically whenever new routes are added, without the need to manually modify the sidebar code.
  The advantage is When we add a  new route , The menu will update automatically.You don't need to modify the sidebar code yourself.

1. router/index.js
  const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'sale',
        meta: { title: '首页' }
      },
      {
        path: 'estate',
        meta: { title: '楼盘管理' }
      },
      {
        path: 'house',
        meta: { title: '房源管理' },
        children: [
          {
            path: 'sale',
            meta: { title: '销售房源管理' }
          }
        ]
      }
    ]
  }
]

2. layout/Layout.vue
<el-menu>
  <el-menu-item index="/">
  <el-menu-item index="/estate">
  <el-sub-menu index="/house">
    <el-menu-item index="/house/sale">

In short, the concept of Dynamic Sidebar Menu from Router is:
Using router + metadata to automatically create a sidebar menu.
Add a new route → the menu is added automatically → no need to rewrite the sidebar.

## 2. 路由权限如何做
  Route permission is handled using router navigation guards (beforeEach) to check whether the user is authenticated.
  The concept is ; If you're not logged in, you'll be redirected to the login page. If you're logged in, you can then access other pages.

1. router/index.js
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

In short, the concept of Route Permission (controlling access rights to each page):
Use router.beforeEach to check if someone is logged in.
If not → force them to the /login page.


## 3. .登录token 使用store如何存放 
  After a successful login, the authentication token is stored in a state management store (such as Pinia or Vuex) and optionally saved in localStorage as a backup.
  The benefit is that the token is used for authentication, or the data doesn't disappear when the page is refreshed.

1. In Layout.vue
onMounted(() => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.replace('/login')
  }
})

In short, the concept of the Store (Pinia) is to store tokens:
After logging in → the token is stored in the Pinia store
and synced with localStorage
so that data is not lost when the page is refreshed.


## 4. keepalive的使用场景和如何使用 
  keep-alive is used to cache components so that their state is preserved when navigating between pages.
  For example: List + search + pagination page , Returns to the previous page and remains in the same position and No need to reload.

1. Layout.vue
<el-main class="main">
  <keep-alive>
    <router-view />
  </keep-alive>
</el-main>


In short, the Store (Pinia) concept stores the token.
After logging in → the token is stored in the Pinia store and synced with localStorage so that the token doesn't disappear when the page is refreshed and the login status remains.


Summary :
This project helps practice building a real-world Vue admin system from scratch, covering routing, authentication, state management, UI layout, performance optimization, and modern frontend engineering workflows.
It provides a solid foundation for developing scalable and maintainable frontend applications.