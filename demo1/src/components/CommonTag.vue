<template>
<div class="tags">
  <el-tag v-for="(tag,index) in tags"
          :key="tag.name"
          size="small"
          :closable="tag.name !== 'home'"
          :effect="$route.name === tag.name ? 'dark' : 'plain'"
          @click="changeMenu(tag)"
          @close="handleClose(tag,index)"
  >
  {{tag.label}}
  </el-tag>
</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  name: "CommonTag",
  computed:{
    ...mapState({
      tags:(state) => state.tab.tagsList
    })
  },
  methods:{
    ...mapMutations({
      delete:"deleteTag"
    }),
    changeMenu(item){
      this.$router.push({name:item.name});
      this.state.commit("selectMenu",item);
    },
    handleClose(item,index){
      let length = this.tags.length - 1;
      this.delete(item);
      //判断是否是最后一个

      if(item.name !== this.$route.name)
      {
        return;
      }
      if(index === length){
        //往左跳转
        this.$router.push({
          name:this.tags[index - 1].name
        });
      }else
      {
        //往右跳转
        this.$router.push({
          name:this.tags[index].name
        });
      }
    },
  }


}
</script>

<style lang="scss" scoped>
.tags{
  padding: 20px;
  .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>