<template>
  <el-card shadow="never">
    <el-form inline class="search-form">
      <el-form-item label="地区">
        <el-select v-model="query.city" placeholder="请选择" style="width:120px">
          <el-option label="曼谷" value="bangkok" />
          <el-option label="芭提雅" value="pattaya" />
        </el-select>
      </el-form-item>

      <el-form-item label="房源类型">
        <el-select v-model="query.type" placeholder="请选择" style="width:120px">
          <el-option label="公寓" value="condo" />
          <el-option label="别墅" value="villa" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-input
          v-model="query.keyword"
          placeholder="请输入房源编号或名称"
          style="width:240px"
        />
      </el-form-item>

      <el-button type="primary" @click="handleSearch">查询</el-button>
      <el-button type="success">新增</el-button>
    </el-form>

    <!-- 表格 -->
    <el-table
      :data="tableData"
      border
      stripe
      style="margin-top:15px"
    >
      <el-table-column prop="id" label="编号" width="120" />
      <el-table-column prop="name" label="房源名称" />
      <el-table-column prop="city" label="城市" width="120" />
      <el-table-column prop="price" label="价格" width="140" />
      <el-table-column label="操作" width="160">
        <template #default>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="danger" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="total, prev, pager, next, sizes"
      :total="total"
      :page-size="pageSize"
      :current-page="page"
      @current-change="handlePageChange"
      style="margin-top:15px; text-align:right"
    />
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getList } from '@/mock/list'

const tableData = ref([])

const page = ref(1)
const pageSize = ref(10)
const total = ref(0)

const query = ref({
  city: '',
  type: '',
  keyword: ''
})

const loadData = async () => {
  const res = await getList({
    page: page.value,
    pageSize: pageSize.value,
    ...query.value
  })

  tableData.value = res.list
  total.value = res.total
}

const handleSearch = () => {
  page.value = 1
  loadData()
}

const handlePageChange = (p) => {
  page.value = p
  loadData()
}

onMounted(() => {
  loadData()
})
</script>

<style scoped>
.search-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
