<template>
<div>
  <!--开始你的循环-->
  <div class="actile-all" v-for="(ac,index) of wenZhangs" :key="index">
    <div class="line"></div>
    <div class="md-show">
      <h3>{{ac.title}}</h3>
       <div class="actile">
         <p>
           {{ac.p}}
         </p>
         <img :src="ac.acUrlImg" alt="">
       </div>
      <p class="week"><i class="iconfont">&#xe620;</i>一周前</p>
    </div>
  </div>

</div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.$http=axios
  export default {
    name: "md",
    data(){
      return{
        wenZhangs:[]
      }
    },
    created(){
      axios("http://localhost:8080/static/mock/index.json",{
        params:{
          type:"json"
        }
      })
        .then(res => {
          this.wenZhangs = res.data.data.wenZhangs;
        })
        .catch(err=>{
          console.log(error)
        })
    }
  }
</script>

<style scoped>

</style>
