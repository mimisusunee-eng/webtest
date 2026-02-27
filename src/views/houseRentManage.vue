<template>
  <div class="page">

    <!-- Search Bar -->
    <el-card class="filter-card" shadow="hover">
      <el-form :inline="true" :model="query">
        <el-form-item label="房源名称">
          <el-input v-model="query.name" placeholder="搜索名称" clearable />
        </el-form-item>

        <el-form-item label="城市">
          <el-select v-model="query.city" placeholder="选择城市" clearable>
            <el-option label="全部" value="" />
            <el-option label="芭提雅" value="Pattaya" />
            <el-option label="曼谷" value="Bangkok" />
          </el-select>
        </el-form-item>

        <el-form-item label="价格">
          <el-input-number v-model="query.minPrice" :min="0" placeholder="最低" />
          -
          <el-input-number v-model="query.maxPrice" :min="0" placeholder="最高" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="getList">搜索</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- Table -->
    <el-card shadow="hover">
      <div class="toolbar">
        <el-button type="primary" @click="openDrawer()">新增房源</el-button>
      </div>

      <el-table
        v-loading="loading"
        :data="list"
        border
        stripe
        style="width:100%"
      >
        <el-table-column prop="id" label="ID" width="90" />
        <el-table-column prop="name" label="房源名称" min-width="180" />
        <el-table-column prop="city" label="城市" width="120" />
        <el-table-column prop="area" label="面积(㎡)" width="120" />
        <el-table-column prop="price" label="月租价格" width="160">
          <template #default="{ row }">
            {{ row.price?.toLocaleString() }} ฿
          </template>
        </el-table-column>

        <el-table-column label="操作" width="180" fixed="right">
          <template #default="{ row }">
            <el-button size="small" @click="openDrawer(row)">编辑</el-button>
            <el-button size="small" type="danger" @click="remove(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pager">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :total="total"
          :page-size="pageSize"
          v-model:current-page="page"
          @current-change="getList"
        />
      </div>
    </el-card>

    <!-- Drawer -->
    <el-drawer v-model="drawer" title="房源信息" size="420px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="城市">
          <el-select v-model="form.city">
            <el-option label="芭提雅" value="Pattaya" />
            <el-option label="曼谷" value="Bangkok" />
          </el-select>
        </el-form-item>

        <el-form-item label="面积">
          <el-input-number v-model="form.area" :min="1" />
        </el-form-item>

        <el-form-item label="价格">
          <el-input-number v-model="form.price" :min="0" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getHouseRentList } from '@/api/houseRent'

const list = ref([])
const total = ref(0)
const page = ref(1)
const pageSize = 10
const loading = ref(false)

const drawer = ref(false)
const form = reactive({})

const query = reactive({
  name: '',
  city: '',
  minPrice: null,
  maxPrice: null
})

const getList = async () => {
  loading.value = true
  try {
    const res = await getHouseRentList({
      page: page.value,
      pageSize,
      ...query
    })
    list.value = res?.data?.list || []
    total.value = res?.data?.total || 0
  } finally {
    loading.value = false
  }
}

const reset = () => {
  Object.assign(query, {
    name: '',
    city: '',
    minPrice: null,
    maxPrice: null
  })
  getList()
}

const openDrawer = (row = {}) => {
  Object.assign(form, row)
  drawer.value = true
}

const submit = () => {
  ElMessage.success('保存成功（模拟）')
  drawer.value = false
  getList()
}

const remove = id => {
  ElMessageBox.confirm('确定删除该房源吗？', '提示', { type: 'warning' })
    .then(() => {
      ElMessage.success('删除成功（模拟）')
      getList()
    })
}

onMounted(getList)
</script>

<style scoped>
.page {
  padding: 16px;
}

.filter-card {
  margin-bottom: 16px;
}

.toolbar {
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-end;
}

.pager {
  margin-top: 16px;
  text-align: right;
}
</style>