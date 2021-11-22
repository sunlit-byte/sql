<template>
<div>
  <el-row :gutter="40">
    <el-col :span="10" :offset='2'><el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>领队</span>
      </div>
      <el-form :model="form1" ref="form1" label-width="auto"  :rules="rules1">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="form1.sex"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="card_id">
          <el-input v-model.number="form1.card_id"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model.number="form1.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form1')">添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    </el-col>
    <el-col :span="10" ><el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>教练</span>
      </div>
      <el-form :model="form2" ref="form2" label-width="auto"  :rules="rules2">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form2.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="form2.sex"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="card_id">
          <el-input v-model.number="form2.card_id"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model.number="form2.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form2')">添加</el-button>

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
        <el-form :model="form3" ref="form3" label-width="auto"  :rules="rules3">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form3.name"></el-input>
        </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-input v-model="form3.sex"></el-input>
          </el-form-item>
        <el-form-item label="身份证号" prop="card_id">
          <el-input v-model.number="form3.card_id"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model.number="form3.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form3')">添加</el-button>

        </el-form-item>
      </el-form>
      </el-card>
    </el-col>
    <el-col :span="10" ><el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>裁判</span>
      </div>
      <el-form :model="form4" ref="form4" label-width="auto"  :rules="rules4">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form4.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="form4.sex"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="card_id">
          <el-input v-model.number="form4.card_id"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model.number="form4.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form4')">添加</el-button>
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
        sex:"",
        card_id:"",
        tel:"",
        type:"leader",
      },
      form2:{
        name:"",
        sex:"",
        card_id:"",
        tel:"",
        type:"coach",
      },
      form3:{
        name:"",
        sex:"",
        card_id:"",
        tel:"",
        type:"doctor",
      },
      form4:{
        name:"",
        sex:"",
        card_id:"",
        tel:"",
        type:"judger",
      },
      rules1:{
        name:[
          {required:true, message:"请输入姓名", trigger:'blur'},
          {min:2,max:5,message: "长度在2到5之间", trigger: 'blur'}
        ],
        sex:[
          {required:true, message:"请输入性别" ,trigger:'blur'},
          {type: 'enum',enum:['男','女'],message: '只能填男或女' ,trigger: "blur"}
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
      rules2:{
        name:[
          {required:true, message:"请输入姓名", trigger:'blur'},
          {min:2,max:5,message: "长度在2到5之间", trigger: 'blur'}
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
      rules3:{
        name:[
          {required:true, message:"请输入姓名", trigger:'blur'},
          {min:2,max:5,message: "长度在2到5之间", trigger: 'blur'}
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
      rules4:{
        name:[
          {required:true, message:"请输入姓名", trigger:'blur'},
          {min:2,max:5,message: "长度在2到5之间", trigger: 'blur'}
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

.el-form-item{
  &:last-child{
    text-align: right;
  }

}


</style>