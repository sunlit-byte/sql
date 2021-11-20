<template>

  <div class="container" :style="conTop">
    <el-row>
      <el-col :span="22" :offset="1">
        <span class="title">体操赛事管理系统</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="7">
        <div class="card-farther">
          <el-card class="box-card" shadow="hover">
            <div class="userLogin">用户登录</div>
            <el-form>
              <el-form-item >
                <el-input placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item >
                <el-input show-password placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <div class="button-farther">
                  <el-button type="primary" @click="UserLogin">登录</el-button>
                </div>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>

 


</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      conTop:{
        backgroundImage:'url(' + require('../../assets/bg.jpg') + ')',
        backgroundRepeat:"no-repeat",
        backgroundSize: 'cover',
      }
    }
  },
  methods:{
    UserLogin(){
      this.$router.push({name:"mainPage"})
    }
  }
}
</script>

<style lang="scss" scoped>

.button-farther{
  display: flex;
  justify-content: center;
  align-items: center;
}


.container{
  height: 100%;
}

.card-farther{
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-card {
  width: 600px;


}
.el-row{
 &:first-child {
   padding-top: 80px;
   .el-col{
     text-align: center;
     font-size: 50px;
     color: #DE4928;
   }
 }
  &:last-child{
    margin-top: 100px;

  }
}
.title{
  width: 100%;
}
.userLogin{
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  font-size: 25px;
  color: #409EFF;
}



</style>