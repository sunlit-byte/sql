<template>
    <el-container style="height: 100%">
      <el-aside width="auto" style="height: 100%"><common-aside ></common-aside></el-aside>
      <el-container>
        <el-header><CommonHeader></CommonHeader></el-header>
        <CommonTag></CommonTag>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside"
import CommonHeader from "@/components/CommonHeader";
import Home from "@/views/Home/Home";
import CommonTag from "@/components/CommonTag";
export default {

  name:"mainPage",
  components:{CommonAside, CommonHeader,Home,CommonTag},
};
</script>

<style lang="scss" scoped>
.el-header{
  background: #333;
}
.el-main{
  padding-top: 0;
}
</style>
