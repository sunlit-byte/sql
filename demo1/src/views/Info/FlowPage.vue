<template>
<div>
  <el-row :gutter="40">
    <el-col :span="10" :offset='2'><el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>领队</span>
      </div>
      <el-form :model="form1" ref="form1" label-width="auto"  :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="card_id">
          <el-input v-model.number="form1.card_id"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model.number="form1.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form1')">添加</el-button>
          <el-button type="primary" @click="changeForm('form1')">修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    </el-col>
    <el-col :span="10" ><el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>教练</span>
      </div>
      <el-form :model="form1" ref="form1" label-width="auto"  :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="card_id">
          <el-input v-model.number="form1.card_id"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model.number="form1.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form1')">添加</el-button>
          <el-button type="primary" @click="changeForm('form1')">修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="40">
    <el-col :span="10" :offset='2'>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>队医</span>
        </div>
        <el-form :model="form1" ref="form1" label-width="auto"  :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="card_id">
          <el-input v-model.number="form1.card_id"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model.number="form1.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form1')">添加</el-button>
          <el-button type="primary" @click="changeForm('form1')">修改</el-button>
        </el-form-item>
      </el-form>
      </el-card>
    </el-col>
    <el-col :span="10" ><el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>裁判</span>
      </div>
      <el-form :model="form1" ref="form1" label-width="auto"  :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="card_id">
          <el-input v-model.number="form1.card_id"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model.number="form1.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form1')">添加</el-button>
          <el-button type="primary" @click="changeForm('form1')">修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "FlowPage",
  data(){
    return{
      form1:{
        name:"",
        card_id:"",
        tel:"",
      },
      rules:{
        name:[
          {required:true, message:"请输入姓名", trigger:'blur'},
          {min:2,max:5,message: "长度在3到5之间", trigger: 'blur'}
        ],
        card_id:[
          {required:true, message:"请输入身份证号", trigger:'blur'},
          { type: 'number', message: '身份证号必须为数字值'}
        ],
        tel:[
          {required:true, message:"请输入联系电话", trigger:'blur'},
          { type: 'number', message: '电话必须为数字值'}
        ],
      },
    };
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    changeForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
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
  margin-top: 20px;
  margin-bottom: 80px;
&:last-child {
   margin-bottom: 0;
 }
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


</style>