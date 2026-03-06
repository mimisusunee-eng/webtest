<template>
  <div class="page">
    <el-card>

      <!-- Search Bar -->
      <div class="toolbar">
        <el-input
          v-model="keyword"
          placeholder="请输入房源名称"
          clearable
          style="width: 250px"
          @keyup.enter="handleSearch"
        />

        <el-button type="primary" @click="handleSearch">
          搜索
        </el-button>

        <el-button type="success" @click="openDrawer()">
          新增房源
        </el-button>
      </div>

      <!-- Table -->
      <el-table
        :data="list"
        :loading="loading"
        border
        style="width: 100%; margin-top: 15px"
      >
        <el-table-column prop="id" label="ID" width="100" />
        <el-table-column prop="name" label="房源名称" />
        <el-table-column prop="area" label="面积" width="120" />

        <el-table-column prop="price" label="月租价格" width="160">
          <template #default="scope">
            {{ scope.row.price?.toLocaleString() }} ฿
          </template>
        </el-table-column>

        <!-- 操作 -->
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button
              type="danger"
              size="small"
              @click="handleDelete(scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- Pagination -->
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
import { getHouseRentList, deleteHouse } from '@/api/houseRent'
import { ElMessage, ElMessageBox } from 'element-plus'

const list = ref([])
const total = ref(0)
const page = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const keyword = ref('')

const drawer = ref(false)
const form = ref({})

/* GET LIST */
const getList = async () => {
  try {
    loading.value = true

    const res = await getHouseRentList({
      page: page.value,
      pageSize: pageSize.value,
      keyword: keyword.value,
      city: '芭提雅'
    })

    console.log('API RES = ', res)

    list.value = res.list || []
    total.value = res.total || 0

  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

/* SEARCH */
const handleSearch = () => {
  page.value = 1
  getList()
}

/* PAGE */
const handlePageChange = (val) => {
  page.value = val
  getList()
}

/* DELETE */
const handleDelete = async (row) => {
  try {

    await ElMessageBox.confirm(
      '确认删除该房源吗？',
      '提示',
      { type: 'warning' }
    )

    await deleteHouse(row.id)

    ElMessage.success('删除成功')

    if (list.value.length === 1 && page.value > 1) {
      page.value--
    }

    getList()

  } catch (err) {
    console.log(err)
  }
}

/* OPEN DRAWER */
const openDrawer = (row = {}) => {
  form.value = { ...row }
  drawer.value = true
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
}

.pager {
  margin-top: 15px;
  text-align: right;
}
</style>