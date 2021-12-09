<template>
  <div style="width: 100%;height: 100%">
    <el-row>
      <el-col class="title" :span="22" :offset="1">
        <span>添加比赛信息</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col  :span="22" :offset="1">
        <el-card class="box-card">
          <el-form :inline="true" :model="searchForm" class="demo-form-inline">
            <el-form-item label="项目">
              <el-select v-model="searchForm.game" placeholder="项目">
                <el-option label="双杠" value="1"></el-option>
                <el-option label="跳马" value="2"></el-option>
                <el-option label="自由体操" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="searchForm.sex" placeholder="性别">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄">
              <el-select v-model="searchForm.age" placeholder="年龄">
                <el-option label="7-8岁" value="1"></el-option>
                <el-option label="9-10岁" value="2"></el-option>
                <el-option label="11-12岁" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="inner">
      <el-col :span="7" :offset="1">
        <el-card class="inner_card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>运动员列表</span>
          </div>
          <el-checkbox-group v-model="checkedPlayers" :max="8">
            <div v-for="player in players" :key="player.id" class="text item">
              <el-checkbox :label="player.id" :key="player.id">{{player.name}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-card class="inner_card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>裁判列表</span>
          </div>
          <el-checkbox-group v-model="checkedJudgers" :max="5">
            <div v-for="judger in judgers" :key="judger.id" class="text item">
              <el-checkbox :label="judger.id" :key="judger.id">{{judger.name}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </el-card>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-card class="inner_card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>时间</span>
          </div>
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
                v-model="time"
                type="datetime"
                placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-col :offset="21">
        <el-button type="primary" @click="addGame">提交</el-button>
      </el-col>

    </el-row>

  </div>

</template>

<script>
export default {
  name: "Person",
  data(){
    return {
      searchForm:{
        game:'',
        sex:'',
        age:'',
      },
      players:[
        {
          name: "1",
          id:"1",
        },
        {
          name: "2",
          id:"2",
        },
        {
          name: "3",
          id:"3",
        },
      ],
      checkedPlayers:[],

      judgers:[
        {
          name:'1',
          id:'1',
        },
        {
          name:'2',
          id:'2',
        },
        {
          name:'3',
          id:'3',
        },
      ]
      ,
      checkedJudgers:[
      ],
      time:'',

    }
  },
  methods: {
    addGame(){
      console.log(this.checkedPlayers + this.checkedJudgers + this.time);
    }
  },
  computed:{
    isChecked:function (){
      return 1
    }

  }

}
</script>


<style lang="scss" scoped>
.title{
  font-size: 30px;
  color: #409EFF;
  text-align: center;
  margin-bottom: 10px;
}
.inner{
  margin-top: 10px;
}

</style>
<style lang="scss" scoped>
.el-form{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  ::v-deep .el-form-item__label{
    font-size: 20px;
  }
}
</style>


<style>
.text {
  font-size: 25px;
}

.item {
  margin-bottom: 18px;
}
.clearfix{
  font-size: 25px;
  color: #409EFF;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.inner_card{
  height: 400px;
}
</style>

<style lang="scss" scoped>

</style>