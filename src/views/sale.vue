<template>
  <div class="page">

    <el-card class="search-card">
      <el-form :model="query">

        <el-row :gutter="12">
          <el-col :span="4">
            <el-select v-model="query.area" placeholder="地区" clearable />
          </el-col>

          <el-col :span="4">
            <el-select v-model="query.type" placeholder="房源类型" clearable />
          </el-col>

          <el-col :span="4">
            <el-select v-model="query.status" placeholder="房源状态" clearable />
          </el-col>

          <el-col :span="4">
            <el-select placeholder="发布状态" clearable />
          </el-col>

          <el-col :span="4">
            <el-select placeholder="是否置顶" clearable />
          </el-col>
        </el-row>

        <el-row :gutter="14" style="margin-top:14px">
          <el-col :span="8">
            <el-input
              v-model="query.keyword"
              placeholder="请输入房源编号或者房源名称"
              clearable
            />
          </el-col>

          <el-col :span="8">
            <el-input
              v-model="query.keyword2"
              placeholder="请输入楼盘名称"
              clearable
            />
          </el-col>

          <el-col :span="6" class="btn-group">
            <el-button type="primary" @click="getList">
              <el-icon><Search /></el-icon>
              查询
            </el-button>

            <el-button type="primary">
              <el-icon><Plus /></el-icon>
              新增
            </el-button>
          </el-col>
        </el-row>

      </el-form>
    </el-card>

    <!-- ===== 表格 ===== -->
    <el-card class="table-card">
      <el-table :data="list" border stripe class="pro-table">

        <el-table-column prop="code" label="编号" width="90" />

        <el-table-column label="图片" width="100">
          <template #default="{ row }">
            <div class="img-center">
              <img :src="row.img" class="thumb" />
            </div>

          </template>
        </el-table-column>

        <el-table-column prop="name" label="中文名称" min-width="80" />
        <el-table-column prop="city" label="城市" width="70" />
        <el-table-column prop="type" label="房源类型" width="70" />
        <el-table-column prop="status" label="房源状态" width="70" />
        <el-table-column prop="release" label="发布状态" width="70" />
        <el-table-column prop="number" label="楼盘编号" width="80" />
         <el-table-column prop="propertyname" label="楼盘名称" width="80" />
        <el-table-column prop="price" label="价格" width="80" />
        <el-table-column label="是否置顶" width="80">
          <template #default="{ row }">
            <el-switch v-model="row.top" />
          </template>
        </el-table-column>
        <el-table-column prop="updater" label="更新人" width="80" />
        <el-table-column prop="time" label="更新时间" width="80" />
        <el-table-column label="操作" width="260" fixed="right">
         <template #default>
           <el-button class="btn-blue" link>
             <el-icon><Edit /></el-icon>
             房源描述
           </el-button>

           <el-button class="btn-blue" link>
             <el-icon><Edit/></el-icon>
             编辑
           </el-button>

           <el-button class="btn-blue" link>
             <el-icon><User /></el-icon>
             直播设置
          </el-button>

           <el-button class="btn-red" link>
             <el-icon><Delete /></el-icon>
             删除
           </el-button>

           <el-button class="btn-blue" link>
             <el-icon><PictureFilled /></el-icon>
             预览
           </el-button>

         </template>
         </el-table-column>


      </el-table>

      
    </el-card>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Search, Plus, PictureFilled } from '@element-plus/icons-vue'
import { Edit,EditPen,User,Delete,View } from '@element-plus/icons-vue'


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
      name: 'Riviera Jomtien 中天公寓, 49 平米, 1 卧 1 卫，海景',
      city: '芭提雅',
      type: '公寓',
      status: '可售',
      release:'上架',
      number:'LP-0513',
      propertyname:'The Riviera Jomtien - 2',
      price: '5990000 原价（泰铢）',
      top: false,
      updater:'Wem',
      time:'2026-02-02 18:40:28'
    },
    {
      code: 'A12439',
      img: 'https://picsum.photos/120/80?2',
      name: 'Thian Tong Condotel 30 平米，开间，外景',
      city: '芭提雅',
      type: '公寓',
      status: '可售',
      release:'上架',
      number:'LP-0948',
      propertyname:'Thian Tong Condotel',
      price: '1650000 原价（泰铢）',
      top: false,
      updater:'Wem',
      time:'2026-02-02 15:25:23'
    },
    {
      code: 'A8865',
      img: 'https://picsum.photos/120/80?3',
      name: 'Supalai Mare 市区公寓, 31平米， 开间，外景',
      city: '芭提雅',
      type: '公寓',
      status: '可售',
      release:'上架',
      number:'LP-0566',
      propertyname:'Supalai Mare Pattaya',
      price: '1600000 原价（泰铢）',
      top: false,
      updater:'Wem',
      time:'2026-02-02 14:48:01'
    },
    {
      code: 'MZ01408',
      img: 'https://picsum.photos/120/80?4',
      name: 'Ideo Mobi Asoke, 33平米，1 卧 1 卫，容易出租 性价比高',
      city: '曼谷',
      type: '公寓',
      status: '可售',
      release:'上架',
      number:'LP-0891',
      propertyname:'Ideo Mobi Asoke',
      price: '3800000 原价（泰铢）',
      top: false,
      updater:'jhang-kaineng',
      time:'2026-02-02 14:48:01'
    },
    {
      code: 'A12438',
      img: 'https://picsum.photos/120/80?5',
      name: 'The Grass 市区公寓，26平米，1 卧 1 卫，外景',
      city: '芭提雅',
      type: '公寓',
      status: '可售',
      release:'上架',
      number:'LP-0776',
      propertyname:'Grass Condo South Pattaya',
      price: '1650000 原价（泰铢）',
      top: false,
      updater:'Wem',
      time:'2026-02-02 12:08:08'
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

.btn-group {
  text-align: left;
}

:deep(.el-table) {
  font-size: 13px;
  color: #333;
  font-family: 'Comfortaa', sans-serif;
}

:deep(.pro-table th),
:deep(.pro-table td) {
  text-align: center;
  vertical-align: middle;
}

.img-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.op-btn) {
  font-size: 12px;
  padding: 0 6px;
  font-weight: 500;
}

:deep(.btn-blue) {
  color: #409eff;
}

:deep(.btn-red) {
  color: #f56c6c;
}

:deep(.el-button.is-link:hover) {
  opacity: 0.8;
}

:deep(.op-btn:hover) {
  opacity: 0.8;
}

:deep(.el-button .el-icon) {
  margin-right: 4px;
}


</style>
