//重置样式，字体样式
import reset from '../assets/reset.css'
import iconfont from '../assets/iconfont.css'
import vueresource from '../assets/vue-resource.min'
import kind from '../assets/styles/kind.css'

//轮播图
import 'swiper/dist/css/swiper.css'
//各个组件
import Cart from '../components/Cart.vue'
import Home from '../components/Home.vue'
import Kind from '../components/kind.vue'
import Qz from '../components/qz/qz.vue'
import User from '../components/User.vue'
/***搜索框***/
import list from '../pages/list.vue'
/****点击搜索框出来的列表页***/
import listShow from '../pages/listShow.vue'
/****活动展示页***/
import showactive from '../pages/showactive.vue'
/**点击立即购买***/
import activeDetail from '../pages/activeDetail'

//分类下面的各个组件
import cx from '../components/qz/components/cx.vue'
import jl from '../components/qz/components/jl.vue'
import md from '../components/qz/components/md.vue'
import sc from '../components/qz/components/sc.vue'




export  default {
  routes:[
    {path:"/cart",component:Cart},
    {path:"/home",component:Home},
    {path:"/kind",component:Kind},


    //搜索框跳转
    {path:"/list",component:list},
    {path:"/listShow",component:listShow},

    /****首页点击活动页****/
    {path:"/showactive",component:showactive},
    /***点击立即购买跳转**/
    {path:"/activeDetail",component:activeDetail},
//搜索框回车出来的列表页

    {path:"/qz",component:Qz,
      children:[
        {
        path:"/cx",
        component:cx
        },{
          path:"/jl",
          component:jl
        },{
          path:"/md",
          component:md
        },{
          path:"/sc",
          component:sc
        }
      ], redirect:"/md"
    },


    {path:"/user",component:User},
    {path:"*",redirect:"/home"}
  ],

}
