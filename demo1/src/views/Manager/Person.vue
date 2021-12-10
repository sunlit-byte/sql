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

            <el-form-item label="性别">
              <el-select v-model="sex" placeholder="性别" @change="changeSelect">
                <el-option v-for="(item,index) in Sex"
                :value = "item"
                :key="index"
                :label="item">
                </el-option>

              </el-select>
            </el-form-item>
            <el-form-item label="项目">
              <el-select v-model="searchForm.project_id" placeholder="比赛项目" >
                <el-option v-for="(item,index) in projectOptions" :key="index" :label="item.name" :value="item.project_id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄">
              <el-select v-model="age" placeholder="年龄" @change="changeAge">
                <el-option label="7-8岁" value="1"></el-option>
                <el-option label="9-10岁" value="2"></el-option>
                <el-option label="11-12岁" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>

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
              <el-checkbox :label="player.id" :key="player.id">
                <div class="player">
                  <span class="player_id">编号：{{player.id}}</span>
                  <span class="player_name">姓名：{{player.name}}</span>
                </div>
              </el-checkbox>
              <el-divider></el-divider>
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
              <el-checkbox :label="judger.id" :key="judger.id">
                <div class="judger">
                  <span class="judger_name">姓名：{{judger.name}}</span>
                </div>
              </el-checkbox>
              <el-divider></el-divider>
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
        <el-button type="primary" @click="addGame" :disabled="!isChecked">提交</el-button>
      </el-col>

    </el-row>

  </div>

</template>

<script>
export default {
  name: "Person",
  data(){
    return {
      Sex:['男','女'],
      project:{
        '男':[
            {
              name:'单杠',
              project_id:"1"
            },
          {
            name:'双杠',
            project_id:"2"
          },
          {
            name:'吊环',
            project_id:"3"
          },
          {
            name:'跳马',
            project_id:"4"
          },
          {
            name:'自由体操',
            project_id:"5"
          },
          {
            name:'鞍马',
            project_id:"6"
          },
          {
            name:'蹦床',
            project_id:"7"
          },
        ],
        '女':[
          {
            name:'跳马',
            project_id:'8',
          },
          {
            name:'高低杠',
            project_id:'9',
          },
          {
            name:'平衡木',
            project_id:'10',
          },
          {
            name:'自由体操',
            project_id:'11',
          },
          {
            name:'蹦床',
            project_id:'12',
          }
        ]
      },
      sex:'',
      age:'',
      projectOptions:[],
      searchForm:{
        project_id:'',
        left:'',
        right:'',
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
      let data = {}
      data.player_id = this.checkedPlayers;
      data.judger_id = this.checkedJudgers;
      data.data = this.time;
      this.deletePlayers(this.checkedPlayers)
      this.$http.post('/admin/addGroup', data)
      .then(response=>{
        this.$message.success(" 添加成功");
      }).catch(error =>{
        this.$message.error("添加失败");
      })
    },

    deletePlayers(checkedPlayers){
      let _players = this.players
      for(const i in checkedPlayers){
        for(const item in _players){
          if(_players[item].id == checkedPlayers[i])
          {
            _players.splice(Number(item),1);
            break;
          }
        }
      }
      this.players = _players;

    },
    changeSelect(){
      this.searchForm.project_id = '';
      for(const k in this.Sex){
        if(this.sex === this.Sex[k]){
          this.projectOptions = this.project[this.sex]
        }
      }
    },
    changeAge(e)
    {
      console.log(e)
      if(e == 3){
        this.searchForm.left=11;
        this.searchForm.right=12;
      }
      else if(e == 2){
        this.searchForm.left=9;
        this.searchForm.right=10;
      }
      else if(e == 1){
        this.searchForm.left=7;
        this.searchForm.right=8;
      }


    },
    onSubmit(){
      this.$http.post("/admin/findPlayers" ,this.searchForm)
      .then(response =>{
        this.$message({
          message:'查询成功',
          type:"success"
        })
        this.players = response.data.players;
      }).catch(error =>{
        this.$message.error("查询失败")
      })
    },
    findJudger(){
      this.$http.post('/admin/findJudgers',)
      .then(response =>{
        this.judgers = response.data.judgers;
      })
      .catch(error =>{
        this.$message.error("出错了哦")
      })
    }
  },
  created() {
    this.findJudger();
  },


  computed:{
    isChecked:function (){
      return this.searchForm.project_id !='' && this.searchForm.right !='' && this.searchForm.left !=''
          && this.checkedPlayers != '' && this.checkedJudgers != '' && this.time != ''
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
.el-checkbox{
  display: block;
  width: 100%;
}
::v-deep .el-checkbox__label{
  width: 100%;
}

.player{
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  //justify-content: space-between;
  justify-content: space-around;
}
.judger{
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  //justify-content: space-between;
  justify-content: space-around;
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

