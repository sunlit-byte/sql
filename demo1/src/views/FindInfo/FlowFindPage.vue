<template>

  <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
    <el-table-column
        prop="date"
        label="编号"
        width="120">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="120">
    </el-table-column>
    <el-table-column
        prop="address"
        label="职位"
        width="120">
    </el-table-column>
    <el-table-column
        prop="address"
        label="身份证号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="address"
        label="电话号码"
        width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

