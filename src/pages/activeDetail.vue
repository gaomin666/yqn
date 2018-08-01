<template>
    <div>
      <div class="top">
        <div class="parent">
          <span class="float-left"><i class="iconfont" onclick="history.go(-1)">&#xe627;</i></span>
          <span class="ic"><i class="iconfont">&#xe60b;</i></span>
          <router-link to="/list"><input type="text" class="search" placeholder="爱他美"/></router-link>
          <router-view></router-view>
        </div>
      </div>
      <div class="wrapper activewrappe">
        <!---轮播图-->
        <swiper :options="swiperOption" v-if="showswiper">
          <swiper-slide v-for="activeswiper of activeswipers" :key="activeswiper.id">
            <img class="swiper-img" :src="activeswiper.activeswiperImg"/>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <div class="product_info">
        <div class="product-title">
          <span class="self-support" v-if="desc">自营</span>贝因美绿爱加800克听装3段
        </div>
        <div class="over-hidden h-40">
          <p class="fl-left dis-inlinblock">
            <em class="fs-12 col-bbb">单价</em>
            <span class="col-f66 fs-18">￥94.00</span>
          </p>
          <p class="fl-right dis-inlinblock">
            <em class="fs-12 col-333">单价</em>
            <span class="col-f66 fs-12">￥94.00</span>
          </p>
        </div>
        <div class="border-top h-61 border-bottom">
          <p class="f-14 col-000 line-20 m-top-10">
            <span>规格</span>
             <span>data</span>
          </p>
          <p class="f-14 col-000 line-20">
            <span>备注</span>
            <span>备注data</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.$http = axios
    export default {
        name: "activeDetail",
      data(){
          return{
            activeswipers:[],
            swiperOption:{
              pagination:'.swiper-pagination',
              loop:true,
              observer: true,
              autoplay: true
            },
            desc:true

        }
      },
      computed:{
        showswiper (){
          return this.activeswipers.length
        }
      },
      created(){
          axios("http://localhost:8080/static/mock/activelist.json",{
            params:{
              type:"json"
            }
          }).then(res=>{
            this.activeswipers = res.data.data.activeswipers
          }).catch(err=>{
            console.log(err)
          })
      }
    }
</script>

<style scoped>
.activewrappe{
  height:4.14rem;
  text-align:center;
}
.activewrappe img{
  vertical-align: middle;
  height:4.14rem;
  }
.swiper-container{
  border-bottom:0.01rem solid #ccc;
}
  .product_info{
    overflow:hidden;
    padding:.08rem;
  }
  .product-title{
    font-size:.18rem;
    margin-top:.06rem;
  }
  .self-support{
    background:#f66;
    color:#fff;
  }
  .fs-12{
    font-size:.12rem;
  }
  .col-bbb{
    color:#bbb
  }
  .col-f66{
    color:#f66;
  }
  .fs-18{
    font-size:.18rem
  }
  .over-hidden{
    overflow:hidden;
  }
  .fl-left{
    float:left;
  }
  .fl-right{
    float:right;
  }
  .col-333{
    color:#333;
  }
  .dis-inlinblock{
    display:inline-block;
  }
  .h-40{
    height:.4rem;
    line-height:.4rem;
  }
  .border-top{
    border-top:.01rem solid #ccc;
  }
.h-61{
  height:.61rem;
}
  .f-14{
    font-size:.14rem;
  }
  .col-000{
    color:#000;
  }
  .line-20{
    line-height:.2rem;
  }
  .border-bottom{
    border-bottom:.01rem solid #ccc
  }
  .m-top-10{
    margin-top:.1rem;
  }
</style>
