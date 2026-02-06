<template>
  <el-card>
    <el-form inline>
      <el-form-item label="地区">
        <el-select placeholder="请选择" />
      </el-form-item>

      <el-form-item label="房源类型">
        <el-select placeholder="请选择" />
      </el-form-item>

      <el-form-item>
        <el-input placeholder="请输入房源编号或名称" />
      </el-form-item>

      <el-button type="primary">查询</el-button>
      <el-button type="success">新增</el-button>
    </el-form>

    <el-table :data="tableData" border>
      <el-table-column prop="id" label="编号" width="100" />
      <el-table-column prop="name" label="中文名称" />
      <el-table-column prop="city" label="城市" />
      <el-table-column prop="price" label="价格" />
      <el-table-column label="操作">
        <template #default>
          <el-button link type="primary">编辑</el-button>
          <el-button link type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="100"
      style="margin-top:15px"
    />
  </el-card>
</template>

<script setup>
const tableData = [
  { id: 'A12440', name: 'Riviera Jomtien', city: '芭提雅', price: 5990000 },
  { id: 'A12439', name: 'Thian Tong', city: '芭提雅', price: 1650000 },
  { id: 'A8865', name: 'Supalai Mare', city: '芭提雅', price: 1600000 }
]
</script>
