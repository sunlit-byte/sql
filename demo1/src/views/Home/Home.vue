<template>
<div>
  <el-row>
    <el-col :span="24">
      <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="../../assets/logo.png"/>
      </el-carousel-item>
    </el-carousel></el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div >
        <h1>赛事流程</h1>
      </div>
    </el-col>
  </el-row>
  <el-divider></el-divider>
  <el-row>
    <el-col :span="24">
      <div class="block">
        <el-timeline>
          <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              >
            <el-card class="box-card">
             <div class="title">{{activity.title}}</div>
              <el-divider></el-divider>
              <div class="content">
                {{activity.content}}
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activities: [{
        title:'登录',
        content: '系统管理员已经为每一个代表队设置了代表队名称、账号和缺省密码',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more',
        color:'#F56C6C'
      }, {
        title:'报名',
        content: '每一个代表队登陆进报名系统，系统自动显示当前代表队的名称，每一个代表队必须录入的信息如下： （1）领队和队医的信息：姓名、身份证、电话； （2）运动员信息：姓名、身份证、年龄，组别、运动员文化成绩（此项空缺，比赛完毕后有专门人员录入），参与的比赛项目（多选）； （3）教练员信息：姓名、电话、性别、身份证号； （4）裁判员信息：姓名、身份证号码、电话。 其中领队、队医和运动员信息必须填写，',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        title:'初赛',
        content: '初赛首先进行的是各个组的各个单项比赛。男子单项分为：单杠、双杠、吊环、跳马、自由体操、鞍马和蹦床，女子分为跳马、高低杠、平衡木、自由体操和蹦床。男女单项比赛完毕，然后由单项比赛成绩生成团体名次和个人全能名次。 初赛完毕后，系统分别计算出每个类别的团体成绩、个人全能成绩，以及单项决赛名次，并自动生成决赛信息。',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more',
        color: '#67C23A'
      }, {
        title:'决赛',
        content: '决赛的比赛过程和初赛一样，最终生成运动员单项决赛的名次。',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more',
        color: '#E6A23C'

      }]
    };
  }
}
</script>



<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}

 .el-carousel__item h3 {
   color: #475669;
   font-size: 14px;
   opacity: 0.75;
   line-height: 200px;
   margin: 0;
 }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.title{
  color: #409EFF;
  font-size: 20px;
}
</style>