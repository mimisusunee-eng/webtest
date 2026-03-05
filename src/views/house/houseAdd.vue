<template>
  <div class="page">
    <el-card>

      <el-form :model="form" label-width="100px">

        <el-form-item label="房源名称">
          <el-input v-model="form.name"/>
        </el-form-item>

        <el-form-item label="面积">
          <el-input v-model="form.area"/>
        </el-form-item>

        <el-form-item label="价格">
          <el-input v-model="form.price"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">
            保存
          </el-button>

          <el-button @click="handleBack">
            返回
          </el-button>
        </el-form-item>

      </el-form>

    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addHouse } from '@/api/houseRent'
import { ElMessage } from 'element-plus'

const router = useRouter()

const form = ref({
  name: '',
  area: '',
  price: ''
})

const handleSubmit = async () => {

  await addHouse(form.value)

  ElMessage.success('新增成功')

  router.push('/house/rent/pattaya')
}

const handleBack = () => {
  router.back()
}
</script>