<template>
  <div>
    <div class="sc" v-for="(sc,index) in scs" :key="index">

      <p>{{sc.title}}</p>
      <div>
        <p>方案1</p>
        <p>
          {{sc.p1}}
        </p>
        <p>方案2</p>
        <p class="part2">
          {{sc.p2}}
        </p>
      </div>
      <img class="dis-block" :src="sc.scImgUrl"  alt="">
      <div class="line"></div>
    </div>
  </div>


</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.$http=axios
    export default {
        name: "sc",
      data(){
          return{
            scs:[]
          }
      },
     created(){
          axios("http://localhost:8080/static/mock/index.json",{
            params:{
              type:"json"
            }
          }).then(res=>{
            this.scs = res.data.data.scs
          }).catch(error=>{
            console.log(error)
          })
     }


    }
</script>

<style scoped>
   .sc{
     height:auto;
     padding:.08rem .16rem 0;
   }
  .dis-block{
    display:block;
    width:1.6rem;
    height:2.4rem;
    margin-bottom:.1rem;
  }
  .mar-1{
    margin-top:.1rem;
  }
  .sc p{
    font-size:.16rem;
    font-weight:900;
    line-height:.25rem;
  }
  .part2{
    margin-bottom:.02rem;
  }
</style>
