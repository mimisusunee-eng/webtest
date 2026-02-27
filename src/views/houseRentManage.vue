<template>
  <div class="page">
    <el-card>
      <el-table :data="list" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="100" />
        <el-table-column prop="name" label="房源名称" />
        <el-table-column prop="city" label="城市" width="120" />
        <el-table-column prop="area" label="面积" width="120" />
        <el-table-column prop="price" label="月租价格" width="160">
          <template #default="scope">
            {{ scope.row.price.toLocaleString() }} ฿
          </template>
        </el-table-column>
      </el-table>

      <div class="pager">
        <el-pagination
          v-model:current-page="page"
          v-model:page-size="pageSize"
          :total="total"
          layout="prev, pager, next"
          background
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { getHouseRentList } from '@/api/houseRent'

const list = ref([])
const total = ref(0)
const page = ref(1)
const pageSize = ref(10)

const getList = async () => {
  const res = await getHouseRentList({
    page: page.value,
    pageSize: pageSize.value
  })

  list.value = res.data.list
  total.value = res.data.total
}

watch(page, getList)
onMounted(getList)
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