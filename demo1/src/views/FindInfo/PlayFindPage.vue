<template>
<el-row>
  <el-col :span="22" :offset="1">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="l-context"><span>队员信息</span></div>
        <div class="r-context">
          <el-form :inline="true"  class="demo-form-inline" label-width="80px" :model="formSearch" :rules="rules1">
            <el-form-item label="编号" prop="player_id">
              <el-input  v-model="formSearch.player_id" placeholder="编号"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input  v-model="formSearch.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别" >
              <el-select  v-model="formSearch.sex" placeholder="请选择">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄" >
              <el-select  v-model="formSearch.age" placeholder="请选择">
                <el-option label="7" value="7"></el-option>
                <el-option label="8" value="8"></el-option>
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
          v-loading="loading"
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            prop="player_id"
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
            prop="id_card"
            label="身份证号"
            width="336">
        </el-table-column>

        <el-table-column
            label="操作"
            width="190">
          <template slot-scope="scope">
            <div class="buttons">
              <el-button  type="primary" size="small" icon="el-icon-edit" @click="handleEdit(scope.$index,scope.row)">修改</el-button>
              <el-button type="danger" size="small" icon="el-icon-delete" @click.native.prevent="deleteRow(scope.$index,tableData)">删除</el-button>
            </div>
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
  <el-dialog title="修改选手信息"
             :visible.sync="dialogVisible"
             :close-on-click-modal='false' class="edit-form">
    <div class="dForm">
      <el-form :model="currentPlayer" label-width="30%" ref="currentPlayer" :rules="rules2">
        <el-form-item label="选手编号" prop="play_id">
          <el-input v-model="currentPlayer.player_id" autocomplete="off" :disabled="true" ></el-input>
        </el-form-item>
        <br>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="currentPlayer.name" autocomplete="off"></el-input>
        </el-form-item>
                  <el-form-item label="身份证号" prop="id_card">
                    <el-input v-model="currentPlayer.id_card" autocomplete="off"  ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" >
                    <el-select v-model="currentPlayer.sex" placeholder="请选择">
                      <el-option label="男" value="男"></el-option>
                      <el-option label="女" value="女"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="年龄" >
                    <el-select v-model="currentPlayer.age" placeholder="请选择">
                      <el-option label="7" value="7"></el-option>
                      <el-option label="8" value="8"></el-option>
                      <el-option label="9" value="9"></el-option>
                      <el-option label="10" value="10"></el-option>
                      <el-option label="11" value="11"></el-option>
                      <el-option label="12" value="12"></el-option>
                    </el-select>
                  </el-form-item>
      </el-form>
    </div>

    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click.native="handleUpdate('currentPlayer')">确 定</el-button>
    </div>
  </el-dialog>
</el-row>
</template>

<script>
import axios from "axios";
import {validateIdNo} from "@/checked/checked";
import {checkMax999} from '@/checked/checked';
export default {
  name: "PlayFindPage",
  created(){
    this.getData(1);
  },
  methods: {
    handleClick(row) {
    },
    getData(currentPage){
      this.loading=true
      this.formSearch.page_index=currentPage
      axios.post("http://localhost:8888/showPlayers",
          this.formSearch).then(response => {
        this.tableData = response.data;
        this.total = response.data.length;
        this.$message({
          message:'请求成功',
          type:'success'
        })
        this.loading=false
      }).catch(error =>{
        this.$message({
          message:"请求失败",
          type:'error'
        })
      })
      this.loading=false
    },
    page(currentPage){
      this.getData(currentPage);
    },
    onSubmit(){
      this.$refs[forName].validate((valid) =>{
            if(valid) {
              this.getData(1);
            }
    })
    },


    delRow(index,row){
      this.tableData.splice(this.tableData.indexOf(row),1)
    },
    deleteRow(index,rows){
      console.log(rows[index].id_card)
      // this.httpDeletePost(rows[index].id_card)
      rows.splice(index,1)
    },

    handleEdit: function (index,row){
      this.dialogVisible = true;
      this.currentPlayer = Object.assign({},row);
      this.currentPlayer.index = index;
    },
    handleUpdate(forName){
      this.$refs[forName].validate((valid) =>{
        if(valid){
          let e = this.currentPlayer;
          delete e.index
          e.team_id = localStorage.getItem('user')
          this.httpUpdatePost(e)
          this.Update()
        }
      })

    },
    Update(){
      this.$set(this.tableData,this.currentPlayer.index,{player_id:this.currentPlayer.player_id,
          name:this.currentPlayer.name,
          id_card:this.currentPlayer.id_card,
          sex:this.currentPlayer.sex,
          age:this.currentPlayer.age
      })

      this.dialogVisible = false;
    },
    //后端用单个数据接受
    httpUpdatePost(e){
      this.$http.post('/player/update',e).then(response =>{
        this.$message({
          message:'修改成功',
          type:'success'
        })
      }).catch(error => {
        this.$message({
          message:'修改失败',
          type:'error'
        })
      })
    },
    //后端用单个数据接受
    httpDeletePost(e){
      this.$http.post('/player/update',e).then(response =>{
        this.$message({
          message:'删除成功',
          type:'success'
        })
      }).catch(error => {
        this.$message({
          message:'删除失败',
          type:'error'
        })
      })
    },
    //后端用responseBody
    axiosUpdatePost(e){
      axios.post("http://localhost:8888//player/update",
          e).then(response => {
        this.$message({
          message:'请求成功',
          type:'success'
        })
      }).catch(error =>{
        this.$message({
          message:"请求失败",
          type:'error'
        })
      })
    }

  },

  data() {
    return {
      tableData: [],
      currentPlayer:{
        player_id:'',
        name:'',
        sex:'',
        age:"",
        id_card:'',
        index:0
      },
      rules1:{
        player_id:[
          {  validator: checkMax999, trigger: 'blur'}
        ],
        name:[
          {min:2,max:5,message: "长度在2到5之间", trigger: 'blur'}
        ],


      },
      rules2:{
        name:[
          {required:true, message:"请输入姓名", trigger:'blur'},
          {min:2,max:5,message: "长度在2到5之间", trigger: 'blur'}
        ],
        id_card:[
          {required:true, message:"请输入身份证号", trigger:'blur'},
          {  validator: validateIdNo, trigger: 'blur'}
        ],
      },
      formSearch:{
        player_id:'',
        name:'',
        age:'',
		    sex:'',
        page_size:8,
        page_index:'',
        team_id:localStorage.getItem('user')
      },
      pageSize:8,
      total:8,
      loading:true,
      dialogVisible:false,
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

.buttons{
  display: flex;
  align-items: center;
  text-align: justify;
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
.demo-form-inline{
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

