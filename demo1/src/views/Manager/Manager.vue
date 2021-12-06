<template>
  <el-container style="height: 100%">
    <el-header><ManagerHeader></ManagerHeader></el-header>
    <ManagerTab></ManagerTab>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script>
import ManagerHeader from "../../components/ManagerHeader";
import ManagerTab from "../../components/ManagerTab";
import TeamAdd from "./TeamAdd";
export default {
  name: "Manager",
  components: {ManagerTab, ManagerHeader,TeamAdd}
}
</script>

<style lang="scss" scoped>
.el-header{
  background: #333;
}
.el-main{
  padding-top: 0;
}

</style>