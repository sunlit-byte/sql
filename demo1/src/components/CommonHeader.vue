<template>
<header>
  <div class="l-container" >
    <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
    <el-breadcrumb separator="|">
      <el-breadcrumb-item :to="{ path: '/mainPage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>

    </el-breadcrumb>
  </div>
  <div class="r-container">
    <el-dropdown trigger="click" size="mini" @command="handleCommand">
      <span class="el-dropdown-link">
        <img :src="userImg" class="user"/>
      </span>
      <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="login">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "CommonHeader",

  data(){
    return{
      userImg:require('../assets/logo.png')
    }
  },
  methods:{
    handleMenu(){
      this.$store.commit("collapseMenu");
    },
    handleCommand(command){
      localStorage.clear();
      this.$router.push({name:command});
    }
  },
  computed:{
    ...mapState({
      current: state=>state.tab.currentMenu,
    })
  }

}
</script>


<style lang="scss" scoped>
header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-container{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
}
.r-container{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

</style>
<style lang="scss" scoped>
::v-deep .el-breadcrumb__item{
  .el-breadcrumb__inner {
    color: #666;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: white;
    }
  }
}
</style>
