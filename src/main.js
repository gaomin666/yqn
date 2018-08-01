import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper,)
Vue.config.productionTip = false
//引入element-ui  UI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//定义组件
import Router from "./router/router.js"
const router = new VueRouter({
  routes:Router.routes
})

new Vue({
  router:router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
