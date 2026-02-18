<template>
  <div class="page">

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="name" label="房源名称" />
      <el-table-column prop="city" label="城市" />
      <el-table-column prop="price" label="价格" />
    </el-table>

    <div class="pager">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
        :page-sizes="[10, 20, 50]"
      />
    </div>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { getList } from '@/api/house'   

const total = ref(0)
const pageSize = ref(10)
const currentPage = ref(1)
const tableData = ref([])

const loadData = async () => {
  const res = await getList({
    page: currentPage.value,
    pageSize: pageSize.value
  })

  tableData.value = res.list
  total.value = res.total
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
