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
            <div class="userType">
              <el-radio-group v-model="radio" >
                <el-radio :label="3">用户</el-radio>
                <el-radio :label="6">管理员</el-radio>
                <el-radio :label="9">裁判</el-radio>
              </el-radio-group>
            </div>
            <el-form :model="loginForm" ref="loginFrom" >
              <el-form-item >
                <el-input placeholder="请输入用户名" v-model="loginForm.user"></el-input>
              </el-form-item>
              <el-form-item >
                <el-input show-password placeholder="请输入密码" v-model="loginForm.password"> </el-input>
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
      loginForm:{
        user:"",
        password:"",
      },
      conTop:{
        backgroundImage:'url(' + require('../../assets/bg.jpg') + ')',
        backgroundRepeat:"no-repeat",
        backgroundSize: 'cover',
      },
      radio:3
    }
  },
  methods:{
    UserLogin(){
      switch (this.radio){
        case 3:{

          // // 测试代码
          // localStorage.setItem("user",this.loginForm.user)
          // this.$router.push({name:"mainPage"})

          // 已测试代码，ok
          this.$http.post('/login/team',this.loginForm).then(
              response =>{
                      if(response.data != -1)
                      {
                        localStorage.setItem("user",response.data)
                        this.$message({
                          message:"登陆成功",
                          type:"success"
                        })
                        this.$router.push({name:"mainPage"} )
                      }
                      else{
                        this.$message({
                          message:"登录失败",
                          type:'error'
                        });
                      }
              }).catch(error =>{
                this.$message.error('登录错误')
          })


          // axios.post("http://localhost:8888/login/team",  this.loginForm)
          //     .then(response => {
          //       alert(this.loginForm);
          //       if(response.data.error_code === 0)
          //       {
          //         localStorage.setItem("user",this.loginForm.user)
          //         this.$router.push({name:"mainPage"})
          //       }
          //       else{
          //         alert("登录失败");
          //       }
          //
          //     });
          break;
        }
        case 6:{
          this.$router.push({name:"teamAdd"});
          this.$http.post("login/admin", this.loginForm )
              .then(response => {
                  localStorage.setItem("user",this.loginForm.user)
                  this.$message("登陆成功")
                  this.$router.push({name:"teamAdd"})
              }).catch(error =>{
                this.$message.error("登录错误")
          });
          break;
        }
        case 9:{
          this.$router.push({name:"mark"});
          this.$http.post("login/judger", this.loginForm )
              .then(response => {
                this.$router.push({name:"mark"});
                if(response.data != -1)
                {
                  localStorage.setItem("id_card",response.data)
                  this.$message("登陆成功")
                  this.$router.push({name:"mark"});
                }
                else{
                  this.$message("登录失败");
                }
              }).catch(error=>{
                this.$message('登陆错误');
          })
        }

      }
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
.userType{
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
}

::v-deep .el-radio-group{
  .el-radio {

    .el-radio__label{
      font-size: 20px;
    } }


}



</style>