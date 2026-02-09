<template>
  <div class="page">

    <!-- ===== 搜索区域 ===== -->
    <el-card class="search-card">
      <el-form :inline="true" :model="query" class="search-form">

        <el-form-item>
          <el-select v-model="query.area" placeholder="地区" clearable>
            <el-option label="曼谷" value="bangkok" />
            <el-option label="芭提雅" value="pattaya" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-select v-model="query.type" placeholder="房源类型" clearable>
            <el-option label="公寓" value="apartment" />
            <el-option label="别墅" value="villa" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-select v-model="query.status" placeholder="房源状态" clearable>
            <el-option label="可售" value="1" />
            <el-option label="下架" value="0" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="query.keyword"
            placeholder="请输入房源编号或者房源名称"
            style="width:260px"
            clearable
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="getList">
            <el-icon><Search /></el-icon>
            查询
          </el-button>

          <el-button type="success">
            <el-icon><Plus /></el-icon>
            新增
          </el-button>
        </el-form-item>

      </el-form>
    </el-card>

    <!-- ===== 表格 ===== -->
    <el-card class="table-card">
      <el-table :data="list" border stripe>

        <el-table-column prop="code" label="编号" width="100" />

        <el-table-column label="图片" width="120">
          <template #default="{ row }">
            <img :src="row.img" class="thumb" />
          </template>
        </el-table-column>

        <el-table-column prop="name" label="房源名称" min-width="260" />

        <el-table-column prop="city" label="城市" width="100" />

        <el-table-column prop="type" label="类型" width="110" />

        <el-table-column label="状态" width="110">
          <template #default="{ row }">
            <el-tag v-if="row.status === '可售'" type="success">可售</el-tag>
            <el-tag v-else type="info">下架</el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="price" label="价格" width="160" />

        <el-table-column label="置顶" width="100">
          <template #default="{ row }">
            <el-switch v-model="row.top" />
          </template>
        </el-table-column>

        <el-table-column label="操作" width="240" fixed="right">
          <template #default>
            <el-button type="primary" link>详情</el-button>
            <el-button type="primary" link>编辑</el-button>
            <el-button type="danger" link>删除</el-button>
          </template>
        </el-table-column>

      </el-table>

      <div class="pager">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :total="100"
        />
      </div>
    </el-card>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Search, Plus } from '@element-plus/icons-vue'

const query = reactive({
  area: '',
  type: '',
  status: '',
  keyword: ''
})

const list = ref([])

const getList = () => {
  list.value = [
    {
      code: 'A12440',
      img: 'https://picsum.photos/120/80?1',
      name: 'Riviera Jomtien 中天公寓 49㎡ 1卧1卫 海景',
      city: '芭提雅',
      type: '公寓',
      status: '可售',
      price: '5,990,000 泰铢',
      top: true
    },
    {
      code: 'A12439',
      img: 'https://picsum.photos/120/80?2',
      name: 'Thian Tong Condotel 30㎡ 开间 外景',
      city: '芭提雅',
      type: '公寓',
      status: '可售',
      price: '1,650,000 泰铢',
      top: false
    },
    {
      code: 'A8865',
      img: 'https://picsum.photos/120/80?3',
      name: 'Supalai Mare 市区公寓 31㎡ 开间',
      city: '芭提雅',
      type: '公寓',
      status: '可售',
      price: '1,600,000 泰铢',
      top: false
    }
  ]
}

onMounted(getList)
</script>

<style scoped>
.page {
  padding: 12px;
}

.search-card {
  margin-bottom: 12px;
}

.search-form :deep(.el-form-item) {
  margin-bottom: 10px;
}

.table-card {
  min-height: 600px;
}

.thumb {
  width: 96px;
  height: 72px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #eee;
}

.pager {
  margin-top: 16px;
  text-align: right;
}
</style>
