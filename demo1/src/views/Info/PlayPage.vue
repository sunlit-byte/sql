<template>
  <el-row>
    <el-col :span="10" :offset="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>参赛队员</span>
        </div>
        <el-form :model="playForm" ref="playForm" label-width="auto"  :rules="rules">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="playForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-input v-model.number="playForm.sex"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="playForm.age"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="card_id">
            <el-input v-model.number="playForm.card_id"></el-input>
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
  name: "PlayPage",
  data(){
    return{
      playForm:{
        name:'',
        sex:'',
        age:'',
        card_id:'',
        team_id:localStorage.getItem('user')
      },
      rules:{
        name:[
          {required:true, message:"请输入姓名", trigger:'blur'},
          {min:2,max:5,message: "长度在3到5之间", trigger: 'blur'}
        ],
        sex:[
          {required:true, message:"请输入性别" ,trigger:'blur'},
          {type: 'enum',enum:['男','女'],message: '只能填男或女' ,trigger: "blur"}
        ],
        age:[
          {required:true,message:"请输入年龄", trigger:'blur'},
          {type:'enum', enum:['9','10','11','12'],message: "年龄范围为9-12",trigger: "blur"}
        ],
        card_id:[
          {required:true, message:"请输入身份证号", trigger:'blur'},
          { type: 'number', message: '身份证号必须为数字值'}
        ],

      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post("/addPlayer", this.playForm )
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