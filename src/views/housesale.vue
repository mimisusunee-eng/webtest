<template>
  <div class="page">

    <!-- ตาราง -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="房源名称" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="area" label="面积" />
    </el-table>

    <!-- 分页 -->
    <div class="pager">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
      />
    </div>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const total = ref(100)

const pageSize = ref(10)

const currentPage = ref(1)

const tableData = ref([])

const mockData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `房源 ${i + 1}`,
  price: Math.floor(Math.random() * 50000 + 10000) + ' ฿',
  area: Math.floor(Math.random() * 80 + 20) + ' ㎡'
}))

const loadData = () => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  tableData.value = mockData.slice(start, end)
}

watch([currentPage, pageSize], loadData, { immediate: true })
</script>

<style scoped>
.page {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
}

.pager {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
}
</style>
