<template>
  <div class="page">
    <el-card>
      <el-table
        :data="list"
        :loading="loading"
        border
        style="width: 100%"
      >
        <el-table-column prop="id" label="ID" width="100" />
        <el-table-column prop="name" label="房源名称" />
        <el-table-column prop="area" label="面积" width="120" />
        <el-table-column prop="price" label="月租价格" width="160">
          <template #default="scope">
            {{ scope.row.price?.toLocaleString() }} ฿
          </template>
        </el-table-column>
      </el-table>

      <div class="pager">
        <el-pagination
          :current-page="page"
          :page-size="pageSize"
          :total="total"
          layout="total, prev, pager, next"
          background
          @update:current-page="handlePageChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getHouseRentList } from '@/api/houseRent'

const list = ref([])
const total = ref(0)
const page = ref(1)
const pageSize = ref(10)
const loading = ref(false)

const getList = async () => {
  try {
    loading.value = true

    const res = await getHouseRentList({
      page: page.value,
      pageSize: pageSize.value,
      city: 'Pattaya'
    })

    const data = res?.data || res || {}

    list.value = data.list || []
    total.value = data.total || 0

  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

const handlePageChange = (val) => {
  page.value = val
  getList()
}

onMounted(() => {
  getList()
})
</script>

<style scoped>
.page {
  padding: 16px;
}

.pager {
  margin-top: 15px;
  text-align: right;
}
</style>