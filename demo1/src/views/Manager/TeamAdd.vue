<template>
  <el-row>
    <el-col :span="10" :offset="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代表队信息</span>
        </div>
        <el-form :model="teamForm" ref="playForm" label-width="auto"  :rules="rules">
          <el-form-item label="名称" prop="name">
            <el-input v-model="teamForm.name"></el-input>
          </el-form-item>
          <el-form-item label="账户名" prop="team_id">
            <el-input v-model.number="teamForm.team_id"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="teamForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('playForm')">添加</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TeamAdd",
  data() {
    return {
      teamForm: {
        name: '',
        team_id:"",
        password:"",
      },
      rules: {
        name: [
          {required: true, message: "请输入代表队", trigger: 'blur'},
          {min: 5, max: 20, message: "长度在5-20之间", trigger: 'blur'}
        ],
        team_id: [
          {required: true, message: "请输入账户名", trigger: 'blur'},
          {type:"number", message: "账户名必须为数字值", trigger: "blur"}
        ],
        password: [
          {required: true, message: "请输入密码", trigger: 'blur'},
          {min:6, message: '密码长度大于5'}
        ],

      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post("/addTeam", this.teamForm )
              .then(response => {
                return true;
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 80px;
}
.el-col {
  border-radius: 4px;
}
</style>



<style lang="scss" scoped>

.clearfix span{
  color: #3443A9;
  font-size: 20px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
}

.el-form-item{
  &:last-child{
    text-align: right;
  }
}


</style>