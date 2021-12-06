<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="添加代表队" name="teamAdd"></el-tab-pane>
    <el-tab-pane label="人员分组" name="person"></el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: "ManagerTab",
  data() {
    return {
      activeName: 'teamAdd'
    };
  },
  methods: {
    handleClick(tab) {
      this.$router.push({name:tab.name});
    },
  }
};
</script>