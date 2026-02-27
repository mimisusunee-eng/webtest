<template>
  <div class="page">
    <el-card>
      <!-- 搜索栏 -->
      <div class="toolbar">
        <el-input v-model="keyword" placeholder="搜索民宿名称" clearable style="width: 200px" />
        <el-button type="primary" @click="getList">搜索</el-button>
        <el-button type="success" @click="openDialog">新增民宿</el-button>
      </div>

      <!-- 表格 -->
      <el-table :data="list" border>
        <el-table-column prop="id" label="ID" width="120" />
        <el-table-column prop="name" label="民宿名称" />
        <el-table-column prop="city" label="城市" width="120" />
        <el-table-column prop="room" label="房间数" width="120" />
        <el-table-column prop="price" label="价格" width="160" />
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="deleteRow(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pager">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
          v-model:current-page="page"
          @current-change="getList"
        />
      </div>
    </el-card>

    <!-- 弹窗表单 -->
    <el-dialog v-model="dialogVisible" title="民宿信息" width="400px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="form.city" />
        </el-form-item>
        <el-form-item label="房间数">
          <el-input-number v-model="form.room" :min="1" />
        </el-form-item>
        <el-form-item label="价格">
          <el-input-number v-model="form.price" :min="0" />
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getHouseList } from '@/api/house'

const list = ref([])
const total = ref(0)
const page = ref(1)
const pageSize = 10
const keyword = ref('')

const dialogVisible = ref(false)
const form = ref({
  name: '',
  city: '',
  room: 1,
  price: 1000
})

const getList = async () => {
  const res = await getHouseList({
    page: page.value,
    pageSize
  })

  list.value = res.list
    .map(item => ({
      id: item.id,
      name: '民宿 ' + item.id,
      city: item.city,
      room: Math.floor(Math.random() * 5 + 1),
      price: Math.floor(Math.random() * 2000 + 800)
    }))
    .filter(item => item.name.includes(keyword.value))

  total.value = res.total
}

const openDialog = () => {
  form.value = { name: '', city: '', room: 1, price: 1000 }
  dialogVisible.value = true
}

const editRow = row => {
  form.value = { ...row }
  dialogVisible.value = true
}

const submit = () => {
  dialogVisible.value = false
  getList()
}

const deleteRow = index => {
  list.value.splice(index, 1)
}

onMounted(() => {
  getList()
})
</script>

<style scoped>
.page {
  padding: 16px;
}

.toolbar {
  margin-bottom: 15px;
  display: flex;
  gap: 10px;
}

.pager {
  margin-top: 15px;
  text-align: right;
}
</style>