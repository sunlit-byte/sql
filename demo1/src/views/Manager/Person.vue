<template>
  <el-row>
    <el-col :span="22" :offset="1">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="l-context"><span>添加比赛信息</span></div>
          <div class="r-context">
            <el-form :inline="true"  class="demo-form-inline" label-width="80px" :model="formSearch">
              <el-form-item label="项目">
                <el-input  v-model="formSearch.type" placeholder="项目"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-select  v-model="formSearch.sex" placeholder="请选择">
                  <el-option label="男" value="man"></el-option>
                  <el-option label="女" value="woman"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="年龄段">
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
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Person",
  data(){
    return {
      formSearch:{
        type:'',
        sex:'',
        age:'',
      }
    }
  },
  methods:{
    onSubmit(){
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
  .el-form-item{
    display: flex;
    align-items: center;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  ::v-deep .el-form-item__label{
    font-size: 20px;
  }
}



</style>