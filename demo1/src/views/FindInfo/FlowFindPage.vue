<template>

  <el-table
      :data="tableData"
      stripe
      border
      style="width: 80%"
      >
    <el-table-column
        prop="id"
        label="编号"
        width="120">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="120">
    </el-table-column>
    <el-table-column
        prop="career"
        label="职位"
        width="120">
    </el-table-column>
    <el-table-column
        prop="idcard"
        label="身份证号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="phonenum"
        label="电话号码"
        width="180">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Qs from 'qs'
import axios from "axios";
export default {
  created(){
    this.$http.post("/showFollows",{team_id:this.team_id} )
              .then(response => {
                return true;
              })

  },
   methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
      
    },
  data() {
    return {
      tableData: [{
        id: '2016-05-02',
        name: '王小虎',
        career:'裁判',
       idcard: '上海市普陀区金沙江路 1518 弄',
       phonenum:'1898627'
      }, {
        id: '2016-05-02',
        name: '王小虎',
        career:'裁判',
       idcard: '上海市普陀区金沙江路 1518 弄',
       phonenum:'1898627'
      }, {
        id: '2016-05-02',
        name: '王小虎',
        career:'裁判',
       idcard: '上海市普陀区金沙江路 1518 弄',
       phonenum:'1898627'
      }, {
         id: '2016-05-02',
        name: '王小虎',
        career:'裁判',
       idcard: '上海市普陀区金沙江路 1518 弄',
       phonenum:'1898627'
      }],
      team_id:localStorage.getItem('user')
    }
  }
}
</script>

