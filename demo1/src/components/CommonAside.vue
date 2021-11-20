<template>
  <div id = "aside">
    <el-menu  class="el-menu-vertical-demo"

              :collapse="isCollapse"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
    >
      <h3 v-show="!isCollapse">体操赛事管理系统</h3>
      <h3 v-show="isCollapse">系统</h3>
      <el-menu-item index="/mainPage" @click="clickMenu({path:'/mainPage',name:'home',
      label:'首页',
      icon:'s-home',
      url:'Home/Home'})">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
          <i :class="'el-icon-'+subItem.icon"></i>
          <span slot="title">{{subItem.label}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
      <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>


<style lang="scss">
.el-menu-vertical-demo{
  width: 200px;
  height: 100%;
}

.el-aside {
  height: 100%;
}
#aside{
  height: 100%;
}
h3{
  color: white;
  text-align: center;
}
</style>

<script>
export default {
   name:"CommonAside",
  data() {
    return {
      menu:[
        // {
        //   path:"/",
        //   name:"home",
        //   label:"首页",
        //   icon:"s-home",
        //   url:"Home/Home",
        // },
        {
          label:"信息录入",
          icon: "s-home",
          children: [
            {
              path:"/flowPage",
              name:"flowPage",
              label: "随队人员",
              icon: "setting",
              url: "Info/FlowPage"
            },
            {
              path:"/playPage",
              name:"playPage",
              label: "参赛人员",
              icon: "setting",
              url: "Info/PlayPage"
            },
          ],
        },
        {
          label:"人员信息",
          icon: "s-home",
          children: [
            {
              path:"/flowFindPage",
              name:"flowFindPage",
              label: "随队人员信息",
              icon: "setting",
              url: "FindInfo/FlowFindPage"
            },
            {
              path:"/playFindPage",
              name:"playFindPage",
              label: "队员信息",
              icon: "setting",
              url: "FindInfo/PlayFindPage"
            },
          ],
        },
        {
          path:"/playInfo",
          name:"playInfo",
          label:"参赛信息",
          icon:"s-home",
          url:"PlayInfo/PlayInfo",
        },
        {
          path:"/play",
          name:"play",
          label:"比赛报名",
          icon:"s-home",
          url:"Play/Play",
        },
      ]
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    clickMenu(item){
      this.$router.push({name:item.name});
      this.$store.commit("selectMenu",item);
    }
  },
  computed: {
    noChildren(){
      return this.menu.filter((item) => !item.children);
    },
    hasChildren(){
      return this.menu.filter((item) => item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse;
    },
  },

}
</script>