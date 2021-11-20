import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import {parseHeight} from "element-ui/packages/table/src/util";

//解决路由重复问题
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originPush.call(this,location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect: "/login"
  },

  {
    path: '/login',
    name: 'login',
    component: () => import ("@/views/Login/Login")
  },

  {
    path: '/mainPage',
    name: 'mainPage',
    component: Main,
    children: [
      {
        path:"/mainPage",
        name:"home",
        component:() => import("@/views/Home/Home")
      },
      {
        path: "/flowPage",
        name: "flowPage",
        component:() => import("@/views/Info/FlowPage"),
      },
      {
        path: "/playPage",
        name: "playPage",
        component:() => import("@/views/Info/PlayPage"),
      },
      {
        path: "/flowFindPage",
        name: "flowFindPage",
        component:() => import("@/views/FindInfo/FlowFindPage"),
      },
      {
        path: "/playFindPage",
        name: "playFindPage",
        component:() => import("@/views/FindInfo/PlayFindPage"),
      },
      {
        path:"/playInfo",
        name:"playInfo",
        component:() => import("@/views/PlayInfo/PlayInfo"),
      },
      {
        path:"/play",
        name:"play",
        component:() => import("@/views/Play/Play"),
      },
    ],
    redirect: "/mainPage"
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
