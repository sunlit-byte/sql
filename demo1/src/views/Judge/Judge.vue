<template>
  <el-container style="height: 100%">
    <el-header><ManagerHeader></ManagerHeader></el-header>
    <JudgeTab></JudgeTab>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script>
import ManagerHeader from "../../components/ManagerHeader";
import JudgeTab from "../../components/JudgeTab";
import Mark from "./Mark";
export default {
  name: "Judge",
  components: {JudgeTab,ManagerHeader,Mark}
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