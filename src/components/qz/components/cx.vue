<template>
  <div>
    <!--开始你的循环-->
    <div class="" v-for="(cx,index) in cxs" :key="index">

      <div class="p-2 b-b">
        <h3>{{cx.title}}</h3>
        <img class="pic" :src="cx.cxImgUrl" alt="">
        <div>
          <p class="dis-inline">
            <i class="iconfont">&#xe620;</i><span class="f-12">3个月前</span>
          </p>
          <button class="orderGoods f-12">立即订货</button>
        </div>
      </div>
      <div class="line"></div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.$http=axios
  export default {
    name: "cx",
    data(){
      return{
        cxs:[]
      }
    },
    created(){
      axios("http://localhost:8080/static/mock/index.json",{
        params:{
          type:"json"
        }
      })
        .then(res => {
          this.cxs = res.data.data.cxs;
        })
        .catch(err=>{
          console.log(error)
        })
    }
  }
</script>

<style scoped>
.pic{
  width:1.7rem;
  height:2.4rem;
  display:block;
}
  .f-12{
    font-size:.12rem;
  }
  .dis-inline{
    display:inline-block;
  }
 .orderGoods{
    width: .66rem;
    height: .27rem;
    margin-right:.1rem;
    background: transparent;
    border: 1px solid orange;
    float: right;
   padding: .04rem .08rem;
   border: 1px solid #f60;
   border-radius: .03rem;
   color:#ff6600;
   margin-top:-.10rem;
  }
  .p-2{
    padding:.02rem;
    margin-bottom:.07rem;
  }
</style>
