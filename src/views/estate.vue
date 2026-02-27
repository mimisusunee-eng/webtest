<template>
  <div class="page">
    <el-card>
      <!-- 工具栏 -->
      <div class="toolbar">
        <el-input
          v-model="query.keyword"
          placeholder="搜索楼盘名称"
          clearable
          style="width: 220px"
        />

        <el-select v-model="query.city" placeholder="选择城市" clearable style="width: 160px">
          <el-option label="曼谷" value="曼谷" />
          <el-option label="芭提雅" value="芭提雅" />
        </el-select>

        <el-button type="primary" @click="getList">搜索</el-button>
        <el-button type="success" @click="openDialog">新增楼盘</el-button>
      </div>

      <!-- 表格 -->
      <el-table :data="list" border stripe>
        <el-table-column prop="id" label="ID" width="120" />
        <el-table-column prop="name" label="楼盘名称" />
        <el-table-column prop="city" label="城市" width="120">
          <template #default="scope">
            <el-tag type="success" v-if="scope.row.city === '曼谷'">曼谷</el-tag>
            <el-tag type="warning" v-else>芭提雅</el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="地址" show-overflow-tooltip />

        <el-table-column prop="status" label="状态" width="120">
          <template #default="scope">
            <el-tag type="success" v-if="scope.row.status === '在售'">在售</el-tag>
            <el-tag type="info" v-else>售罄</el-tag>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="200" fixed="right">
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
          layout="total, prev, pager, next"
          :total="total"
          :page-size="pageSize"
          v-model:current-page="page"
          @current-change="getList"
        />
      </div>
    </el-card>

    <!-- 弹窗 -->
    <el-dialog v-model="dialogVisible" title="楼盘信息" width="460px">
      <el-form :model="form" label-width="90px">
        <el-form-item label="楼盘名称">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="城市">
          <el-select v-model="form.city" style="width: 100%">
            <el-option label="曼谷" value="曼谷" />
            <el-option label="芭提雅" value="芭提雅" />
          </el-select>
        </el-form-item>

        <el-form-item label="地址">
          <el-input v-model="form.address" />
        </el-form-item>

        <el-form-item label="状态">
          <el-select v-model="form.status" style="width: 100%">
            <el-option label="在售" value="在售" />
            <el-option label="售罄" value="售罄" />
          </el-select>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">保存</el-button>
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

const query = ref({
  keyword: '',
  city: ''
})

const dialogVisible = ref(false)
const form = ref({
  name: '',
  city: '',
  address: '',
  status: '在售'
})

const getList = async () => {
  const res = await getHouseList({
    page: page.value,
    pageSize
  })

  list.value = res.list
    .map(item => ({
      id: item.id,
      name: '楼盘 ' + item.id,
      city: item.city,
      address: 'Bangkok ถนนสุขุมวิท ' + Math.floor(Math.random() * 100),
      status: Math.random() > 0.3 ? '在售' : '售罄'
    }))
    .filter(item => {
      return (
        (!query.value.keyword || item.name.includes(query.value.keyword)) &&
        (!query.value.city || item.city === query.value.city)
      )
    })

  total.value = res.total
}

const openDialog = () => {
  form.value = {
    name: '',
    city: '',
    address: '',
    status: '在售'
  }
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
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.pager {
  margin-top: 15px;
  text-align: right;
}
</style>