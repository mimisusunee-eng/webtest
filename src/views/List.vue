<template>
  <el-card shadow="never">
    <el-form inline class="search-form">
      <el-form-item label="地区">
        <el-select placeholder="请选择" style="width:120px" />
      </el-form-item>

      <el-form-item label="房源类型">
        <el-select placeholder="请选择" style="width:120px" />
      </el-form-item>

      <el-form-item>
        <el-input placeholder="请输入房源编号或名称" style="width:240px" />
      </el-form-item>

      <el-button type="primary">查询</el-button>
      <el-button type="success">新增</el-button>
    </el-form>

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

    <!-- Pagination -->
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="100"
      style="margin-top:15px; text-align:right"
    />
  </el-card>
</template>

<script setup>
const tableData = [
  { id: 'A1001', name: 'Riviera Jomtien', city: '芭提雅', price: 5990000 },
  { id: 'A1002', name: 'Dusit Grand', city: '芭提雅', price: 2990000 },
  { id: 'A1003', name: 'Unixx Condo', city: '芭提雅', price: 1890000 },
  { id: 'A1004', name: 'Supalai Mare', city: '芭提雅', price: 1590000 }
]
</script>

<style scoped>
.search-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
