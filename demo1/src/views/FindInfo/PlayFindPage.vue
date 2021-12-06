<template>
<el-row>
  <el-col :span="22" :offset="1">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="l-context"><span>队员信息</span></div>
        <div class="r-context">
          <el-form :inline="true"  class="demo-form-inline" label-width="80px" :model="formSearch">
            <el-form-item label="编号">
              <el-input  v-model="formSearch.id" placeholder="编号"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input  v-model="formSearch.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select  v-model="formSearch.sex" placeholder="请选择">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄">
              <el-select  v-model="formSearch.age" placeholder="请选择">
                <el-option label="9" value="9"></el-option>
                <el-option label="10" value="10"></el-option>
                <el-option label="11" value="11"></el-option>
                <el-option label="12" value="12"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            prop="id"
            label="编号"
            width="160">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="160">
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别"
            width="150">
        </el-table-column>
        <el-table-column
            prop="age"
            label="年龄"
            width="150">
        </el-table-column>
        <el-table-column
            prop="card_id"
            label="身份证号"
            width="376">
        </el-table-column>

        <el-table-column
            label="操作"
            width="150">
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
            :page-size="5"
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
    getData(currentPage){
      let data ={};
      data.team_id = localStorage.getItem("user");
      data.page_size = this.pageSize;
      data.page_index = currentPage;
      data.player_id = this.formSearch.id;
      data.name = this.formSearch.name;
      data.sex = this.formSearch.sex;
      data.age = this.formSearch.age;


      axios.get("/showPlayers",{
        params:data
      })
      .then(response => {
        this.tableData = response.data.players;
      })
    },
    page(currentPage){
      this.getData(currentPage);
    },
    onSubmit(){
      this.getData(1);
    },
    created(){
      this.getData(1);
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
      formSearch:{
        id:'',
        name:'',
        sex:'',
        age:''
      },
      pageSize:5,
      total:50,
    }
  },

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
  font-size: 30px;
}
.l-context{
  flex: 1;
}

.r-context{
  flex: 6;
}
.box-card {
  width: 100%;
}
</style>




<style lang="scss" scoped>
.el-form{
  display: flex;
  height: 100%;
  align-items: center;
}
.el-form-item{
  display: flex;
  align-items: center;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

