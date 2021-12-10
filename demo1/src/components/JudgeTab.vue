<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="裁判员评分" name="mark"></el-tab-pane>
    <el-tab-pane label="裁判长审核" name="judgeLeader"></el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: "JudgeTab",
  data() {
    return {
      activeName: 'mark'
    };
  },
  methods: {
    handleClick(tab) {
      this.$router.push({name:tab.name});
    },
  }
};
</script>