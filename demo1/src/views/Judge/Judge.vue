<template>
  <el-container style="height: 100%">
    <el-header><ManagerHeader></ManagerHeader></el-header>

    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script>
import ManagerHeader from "../../components/ManagerHeader";
import Mark from "./Mark";
export default {
  name: "Judge",
  components: {ManagerHeader,Mark}
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