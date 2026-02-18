<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbList"
      :key="index"
      :to="item.path"
      :class="{ first: index === 0, last: index === breadcrumbList.length - 1 }"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbList = computed(() => {
  return route.matched.filter(
    r => r.meta && r.meta.title && r.path !== '/'
  )
})
</script>

<style scoped>

:deep(.el-breadcrumb__item.first .el-breadcrumb__inner) {
  font-size: 16px;
  font-weight: 700;
  color: #303133;
}

:deep(.el-breadcrumb__item.last:not(.first) .el-breadcrumb__inner) {
  font-size: 16px;
  font-weight: 500;
  color: #909399;
}

</style>
