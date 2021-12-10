<template>
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px">
      <el-form-item label="队员编号">

        <el-input v-model="sizeForm.name" style="width: 20%;"></el-input>
      </el-form-item>
      
  <div class="app">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="请选择" @change="changeSelect">
          <el-option
            v-for="(item,index) in sexOptions"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>

      </el-form-item>
      <el-form-item label="参赛项目"label-width="80px">
        <el-select v-model="form.project_name" placeholder="请选择">
          <el-option
            v-for="(item,index) in typeOptions"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>


      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sexOptions: ['男', '女'],
      projectObj: { '男': ['单杠双杠','吊环','跳马','自由体操','鞍马','蹦床'], '女': ['跳马','高低杠','平衡木','自由体操','蹦床']},
      typeOptions: [],

      sizeForm: {
        name: '',
        region: '',
      },
       form: {
        sex: '',
        project_name: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      this.$http.post("/player/join", this.form,this.sizeForm )
              .then(response => {
                console.log('success');
              })
    },

    changeSelect() {
      // 清空项目内容
      this.form.project_name = ''

      // 遍历性别的下拉选项数组
      for (const k in this.sexOptions) {
        // 性别 是否等于 性别的下拉选择数组中的某一项
        if (this.form.sex === this.sexOptions[k]) {
          this.typeOptions = this.projectObj[this.form.sex]
        }
      }
    }

  }
};
</script>