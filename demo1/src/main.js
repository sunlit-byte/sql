import Vue from 'vue'
import axios from "axios";
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Qs from 'qs'
import VueAxios from "vue-axios";
import Element from "element-ui";
Vue.config.productionTip = false
Vue.use(Element)

Vue.use(VueAxios,axios.create({
  baseURL:'http://localhost:8888',
  transformRequest:[function (data){
    data = Qs.stringify(data);
    return data;
  }],
  headers:{'Content-Type':'application/x-www-form-urlencoded'}
}))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
