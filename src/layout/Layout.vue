<template>
  <el-container class="layout">
    <el-aside
       :width="isCollapse ? '0px' : '220px'"
       class="sidebar"
       :class="sidebar"
    >
      <div class="logo">
        <img src="@/assets/logo.png" />
        <span>TPTP泰国大管家</span>
      </div>

      <el-menu
        :router="true"
        :default-active="$route.path"
        :collapse="isCollapse"
        class="el-menu-vertical"
        background-color="#061c33"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <el-menu-item index="/">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>

  <el-menu-item index="/estate">
    <el-icon><OfficeBuilding /></el-icon>
    <span>楼盘管理</span>
  </el-menu-item>

  <el-sub-menu index="/house">
    <template #title>
      <el-icon><HomeFilled /></el-icon>
      <span>房源管理</span>
    </template>

    <el-menu-item index="/house/sale">
      <el-icon><Sell /></el-icon>
      <span>销售房源管理</span>
    </el-menu-item>

    <el-menu-item index="/house/rent/bkk">
      <el-icon><Key /></el-icon>
      <span>曼谷分部租房</span>
    </el-menu-item>

    <el-menu-item index="/house/rent/manage">
      <el-icon><Key /></el-icon>
      <span>曼谷托管租房</span>
    </el-menu-item>

    <el-menu-item index="/house/rent/pattaya">
      <el-icon><Key /></el-icon>
      <span>芭提雅托管租房</span>
    </el-menu-item>

    <el-menu-item index="/house/land">
      <el-icon><Location /></el-icon>
      <span>土地管理</span>
    </el-menu-item>
  </el-sub-menu>

    <el-menu-item index="/homestay">   
      <el-icon><User /></el-icon>
      <span>民宿管理</span>
    </el-menu-item>

    <el-sub-menu index="/miniapp">
    <template #title>
      <el-icon><Platform /></el-icon>
      <span>大管家小程序</span>
    </template>
  </el-sub-menu>

    <el-sub-menu index="/agent-app">
     <template #title>
      <el-icon><UserFilled /></el-icon>
      <span>经纪人小程序</span>
     </template>
    </el-sub-menu>

    <el-sub-menu index="/business-school">
     <template #title>
      <el-icon><School /></el-icon>
      <span>商学院</span>
     </template>
    </el-sub-menu>

    <el-sub-menu index="/video">
     <template #title>
      <el-icon><VideoCamera /></el-icon>
      <span>短视频管理</span>
     </template>
    </el-sub-menu>

    <el-sub-menu index="/system">
     <template #title>
      <el-icon><Setting /></el-icon>
      <span>系统管理</span>
     </template>
    </el-sub-menu>
  </el-menu>
</el-aside>

    <!-- MAIN -->
    <el-container>
      <el-header class="header">
        <div class="top-bar">
          <div class="left">
            <el-icon class="collapse" @click="toggleSidebar">
              <Fold />
            </el-icon>
            <Breadcrumb />
          </div>

        <div class="right">
          <el-icon><FullScreen /></el-icon>

<el-dropdown>
  <span class="user-trigger">
    <div
      class="avatar-circle"
      :style="{ backgroundColor: avatarColor }"
    >
      {{ avatarText }}
    </div>

    <span class="username">{{ username }}</span>

    <el-icon><ArrowDown /></el-icon>
  </span>

  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item @click="handleLogout">
        退出登录
      </el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>


     </div>

       </div>

        <div class="tab-bar">
         <div class="tab-item">首页</div>
         <div class="tab-item">楼盘管理</div>
         <div class="tab-item active">销售房源管理</div>
        </div>
    </el-header>

       <el-main class="main">
         <router-view />

      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {
  House,
  OfficeBuilding,
  HomeFilled,
  Sell,
  Key,
  Location,
  User,
  Platform,
  UserFilled,
  School,
  VideoCamera,
  Setting,
  Fold,
  FullScreen,
  ArrowDown  
  
} from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, onMounted, computed } from 'vue'

const router = useRouter()

const sidebar = ref(false)

const isCollapse = ref(false)

const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value
}


onMounted(() => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.replace('/login')
  }
})

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  router.push('/login')
}

const avatarText = computed(() => {
  return username.value.charAt(0).toUpperCase()
})

const colors = [
  '#409eff',
  '#67c23a',
  '#e6a23c',
  '#f56c6c',
  '#909399',
  '#8e44ad',
  '#16a085',
  '#d35400'
]

const avatarColor = computed(() => {
  let sum = 0
  for (let i = 0; i < username.value.length; i++) {
    sum += username.value.charCodeAt(i)
  }
  return colors[sum % colors.length]
})


const username = ref('')

onMounted(() => {
  username.value = localStorage.getItem('username') || ''
})


</script>

<style scoped>
.layout {
  height: 100vh;
  overflow: hidden;
  font-family: 'Comfortaa', sans-serif;
  font-size: 14px;
}

.layout > .el-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar {
  background: linear-gradient(180deg, #061c33, #03111f);
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.logo img {
  height: 32px;
  margin-right: 8px;
}
.logo span {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.el-menu {
  border: none;
}
.el-menu-item,
.el-sub-menu__title {
  height: 46px;
  line-height: 46px;
  font-size: 14px;
}
.el-menu-item.is-active {
  background: #409EFF !important;
  color: #fff !important;
}

.header {
  padding: 0;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  background: #fff;
  border-bottom: 1px solid #ebeef5;
  box-shadow: none;   
  height: auto;
}

.top-bar {
  height: 64px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  position: relative;
  z-index: 2;
}

.tab-bar {
  height: 48px;
  padding: 0 20px;
  margin-bottom: 0;
  border-top: none;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fafafa;
  position: relative;
  z-index: auto;
}

.tab-item {
  height: 30px;
  line-height: 30px;
  padding: 0 14px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  color: #606266;
  font-size: 13px;
  font-weight: 600;
  transition: all .2s;
}

.tab-item:hover {
  color: #409eff;
  border-color: #409eff;
}

.tab-item.active {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
  box-shadow: 0 2px 6px rgba(64,158,255,.35);
}

.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #333;
  padding: 6px 12px;
  line-height: 26px;
  background: #f6f8fc;
  border-radius: 6px;
}

.main-title {
  font-weight: 700;
}

.separator {
  margin: 0 6px;
  color: #888;
}

.sub-title {
  font-weight: 500;
  color: #888;
}

.tabs {
  height: 44px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid #f0f0f0;
}

.left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  background: #409eff;
}

.username {
  font-size: 13px;
  color: #333;
}

.main {
  background: #f5f7fa;
  padding: 15px;
  flex: 1;
  overflow-y: auto;
  padding-top: 15px;
}

:deep(.btn-add) {
  background: #409eff !important;
  border-color: #409eff !important;
  color: #fff !important;
}

:deep(.btn-add:hover) {
  background: #66b1ff !important;
  border-color: #66b1ff !important;
}

.search-card {
  margin-bottom: 14px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,.05);
}

.el-container {
  height: 100%;
}

.user-box {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.avatar-circle {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-box,
.el-dropdown-link {
  outline: none !important;
  border: none !important;
}

.user-box:focus,
.user-box:focus-visible,
.el-dropdown:focus,
.el-dropdown:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}

.user-box:hover {
  background: rgba(64,158,255,.08);
}

.sidebar {
  transition: width .2s ease;
}

.el-menu {
  transition: all .2s ease;
}

.collapse {
  cursor: pointer;
  font-size: 18px;
}


</style>