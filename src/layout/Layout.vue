<template>
  <el-container class="layout">
    <!-- SIDEBAR -->
    <el-aside width="220px" class="sidebar">
      <div class="logo">
        <img src="@/assets/logo.png" />
        <span>TPTP泰国大管家</span>
      </div>

      <el-menu
        default-active="3-1"
        class="el-menu-vertical"
        background-color="#061c33"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <el-menu-item index="1">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>

        <el-menu-item index="2">
          <el-icon><OfficeBuilding /></el-icon>
          <span>楼盘管理</span>
        </el-menu-item>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><HomeFilled /></el-icon>
            <span>房源管理</span>
          </template>

          <el-menu-item index="3-1">
            <el-icon><Sell /></el-icon>
            <span>销售房源管理</span>
          </el-menu-item>

          <el-menu-item index="3-2">
            <el-icon><Key /></el-icon>
            <span>曼谷分部租房</span>
          </el-menu-item>

          <el-menu-item index="3-3">
            <el-icon><Key /></el-icon>
            <span>曼谷托管租房</span>
          </el-menu-item>

          <el-menu-item index="3-4">
            <el-icon><Key /></el-icon>
            <span>芭提雅托管租房</span>
          </el-menu-item>

          <el-menu-item index="3-5">
            <el-icon><Location /></el-icon>
            <span>土地管理</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="4">
          <el-icon><User /></el-icon>
          <span>民宿管理</span>
        </el-menu-item>

        <el-sub-menu index="5">
          <template #title>
            <el-icon><Platform/></el-icon>
            <span>大管家小程序</span>
          </template>
        </el-sub-menu>

        <el-sub-menu index="6">
          <template #title>
            <el-icon><UserFilled/></el-icon>
            <span>经纪人小程序</span>
          </template>
        </el-sub-menu>

        <el-sub-menu index="7">
          <template #title>
            <el-icon><School /></el-icon>
            <span>商学院</span>
          </template>
        </el-sub-menu>

        <el-sub-menu index="8">
          <template #title>
            <el-icon><VideoCamera /></el-icon>
            <span>短视频管理</span>
          </template>
        </el-sub-menu>

        <el-sub-menu index="9">
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
            <el-icon class="collapse"><Fold /></el-icon>
            <span class="breadcrumb">
              <span class="main-title">房源管理</span>
              <span class="separator"> / </span>
              <span class="sub-title">销售房源管理</span>
            </span>
          </div>

        <div class="right">
          <el-icon><FullScreen /></el-icon>
          <el-avatar size="small" class="avatar">U</el-avatar>
          <span class="username">xuyouyou</span>
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
        <div class="filter-bar">
          <el-row :gutter="12">
            <el-col :span="4">
              <el-select placeholder="地区" clearable />
            </el-col>

            <el-col :span="4">
              <el-select placeholder="房源类型" clearable />
            </el-col>

            <el-col :span="4">
              <el-select placeholder="房源状态" clearable />
            </el-col>

            <el-col :span="4">
              <el-select placeholder="发布状态" clearable />
            </el-col>

            <el-col :span="4">
              <el-select placeholder="是否置顶" clearable />
            </el-col>
          </el-row>

          <el-row :gutter="12" class="filter-bottom">
            <el-col :span="10">
              <el-input placeholder="请输入房源编号或者房源名称" clearable />
            </el-col>

            <el-col :span="10">
              <el-input placeholder="请输入楼盘名称" clearable />
            </el-col>

            <el-col :span="4" class="btn-group">
              <el-button type="primary">
                <el-icon><Search /></el-icon>
                查询
              </el-button>

              <el-button type="primary" plain>
                + 新增
              </el-button>
            </el-col>
          </el-row>
        </div>

        <div class="table-wrap">
          <el-table border height="100%">
          </el-table>
        </div>


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
  FullScreen
} from '@element-plus/icons-vue'
</script>

<style scoped>
.layout {
  height: 100vh;
  font-family: 'Comfortaa', sans-serif;
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
  flex-direction: column;
  background: #fff;
  border-bottom: 1px solid #ebeef5;
  box-shadow: 0 1px 4px rgba(0,0,0,.06);
}

.top-bar {
  height: 56px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tab-bar {
  height: 44px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #f0f0f0;
  background: #fff;
}

.tab-item {
  height: 28px;
  line-height: 28px;
  padding: 0 14px;
  font-size: 13px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  cursor: pointer;
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
}

.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #333;
}

.main-title {
  font-weight: 700;
}

.separator {
  margin: 0 6px;
  color: #999;
}

.sub-title {
  font-weight: 500;
  color: #666;
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
  height: calc(100vh - 100px);
  overflow: auto;
}

</style>
