<template>
  <el-container class="layout">
    <!-- Sidebar -->
    <el-aside width="210px" class="sidebar">
      <div class="logo">TPTP 后台系统</div>

      <el-menu
        router
        background-color="#001529"
        text-color="#bfcbd9"
        active-text-color="#409eff"
        default-active="/list"
      >
        <el-menu-item index="/list">
          <el-icon><Menu /></el-icon>
          <span>房源管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- Main -->
    <el-container>
      <el-header class="header">
        <div class="breadcrumb">
          首页 / 房源管理
        </div>

        <div class="user">
          管理员
        </div>
      </el-header>

      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { Menu } from '@element-plus/icons-vue'
</script>

<style scoped>
.layout {
  height: 100vh;
}

.sidebar {
  background: #001529;
}

.logo {
  height: 60px;
  line-height: 60px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.header {
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.breadcrumb {
  font-size: 14px;
  color: #666;
}

.user {
  font-size: 14px;
  color: #333;
}

.main {
  background: #f5f7fa;
  padding: 15px;
}
</style>
