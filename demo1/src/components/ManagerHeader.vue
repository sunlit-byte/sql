<template>
  <header>
    <div class="text">
      <span>
        体操赛事管理系统
      </span>
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
export default {
  name: "ManagerHeader",

  data(){
    return{
      userImg:require('../assets/logo.png')
    }
  },
  methods:{
    handleCommand(command){
      localStorage.clear()
      this.$router.push({name:command});
    }
  },

}
</script>


<style lang="scss" scoped>
header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.r-container{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

.text{
  color: white;
  font-size: 25px;
  span{
    padding-left: 30px;
  }
}

</style>