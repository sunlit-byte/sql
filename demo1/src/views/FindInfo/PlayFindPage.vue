<template>
<el-row>
  <el-col :span="22" :offset="1">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="l-context"><span>队员信息</span></div>
        <div class="r-context">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="编号" value="1"></el-option>
              <el-option label="姓名" value="2"></el-option>
              <el-option label="性别" value="3"></el-option>
              <el-option label="年龄" value="4"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            prop="id"
            label="编号"
            width="150">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="120">
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别"
            width="120">
        </el-table-column>
        <el-table-column
            prop="age"
            label="年龄"
            width="120">
        </el-table-column>
        <el-table-column
            prop="card_id"
            label="身份证号"
            width="245">
        </el-table-column>

        <el-table-column
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button  type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <nav style="text-align: center">
        <el-pagination
            background
            layout="prev, pager, next"
            page-size="5"
            :total="50"
            @current-change="page">
        </el-pagination>
      </nav>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "PlayFindPage",
  methods: {
    handleClick(row) {
      console.log(row);
    },
    page(currentPage){
      alert(currentPage);
    }
  },

  data() {
    return {
      tableData: [{
        id: '2016-05-02',
        name: '王小虎',
        sex: '上海',
        age: '普陀区',
        card_id: '上海市普陀区金沙江路 1518 弄',
      }, {
        id: '2016-05-02',
        name: '王小虎',
        sex: '上海',
        age: '普陀区',
        card_id: '上海市普陀区金沙江路 1518 弄',
      }, {
        id: '2016-05-02',
        name: '王小虎',
        sex: '上海',
        age: '普陀区',
        card_id: '上海市普陀区金沙江路 1518 弄',
      }, {
        id: '2016-05-02',
        name: '王小虎',
        sex: '上海',
        age: '普陀区',
        card_id: '上海市普陀区金沙江路 1518 弄',
      }],
      input:'',
      select:"",
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>


<style lang="scss" scoped>
.clearfix{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.l-context span{
  color: #3443A9;
  font-size: 20px;
}
.box-card {
  width: 100%;
}
</style>




<style lang="scss" scoped>
.el-select {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

<style lang="scss" scoped>


</style>