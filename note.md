# 主要学习

## 1. 路由如何动态生成菜单栏
We use route configuration and meta information (such as title and icon) to dynamically generate the sidebar menu.
This allows the menu to update automatically whenever new routes are added, without the need to manually modify the sidebar code.

## 2. 路由权限如何做
Route permission is handled using router navigation guards (beforeEach) to check whether the user is authenticated.

## 3. .登录token 使用store如何存放 
After a successful login, the authentication token is stored in a state management store (such as Pinia or Vuex) and optionally saved in localStorage as a backup.

## 4. keepalive的使用场景和如何使用 
keep-alive is used to cache components so that their state is preserved when navigating between pages.
