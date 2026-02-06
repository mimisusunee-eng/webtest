<template>
  <el-container class="layout">
    <el-aside width="200px" class="sidebar">
      <div class="logo">TPTP</div>
      <el-menu router default-active="/">
        <el-menu-item index="/">
          销售房源管理
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">
        销售房源管理
      </el-header>

      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout {
  height: 100vh;
}

.sidebar {
  background: #001529;
  color: #fff;
}

.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  color: white;
}

.header {
  background: white;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.main {
  background: #f5f7fa;
  padding: 15px;
}
</style>
