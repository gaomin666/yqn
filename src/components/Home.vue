<template>
  <div>
  <div class="top">
    <div class="parent">
      <span class="ic"><i class="iconfont">&#xe60b;</i></span>
      <i class="iconfont">&#xe612;</i>
      <router-link to="/list"><input type="text" class="search" placeholder="爱他美"/></router-link>
      <router-view></router-view>
    </div>
  </div>
    <div class="wrapper">
      <!---轮播图-->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of swiperList" :key="index">
          <img class="swiper-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
      <!-----广告位-->
      <div class="gg">
            <router-link :to="{path:'/listShow',query:{id:item.id}}" v-for="(item,index) of gimgList" :key="item.id">
              <img :src="item.gimg"/>
            </router-link>
      </div>

      <!--
       活动专区
   -->

      <div class="activityArea">
        <div class="active-all" v-for="list of dataImg" :key="list.id">
          <div class="active">
            <h2 class="q">
              <i class="iconfont">&#xe62d;</i>
              <span class="clearance">{{list.title}}</span>
              <i class="iconfont">&#xe62d;</i>
            </h2>
               <div class="everyDay-q">
                <img class="h-84"  :src="list.dImgUrl" alt="" />
                <img class="w-50 h-100 fl-left"  :src="list.dImgUrl2"/>
                <img class="w-50 h-100 fl-left"  :src="list.dImgUrl3"/>
              </div>
          </div>
          <router-link to="/showactive">
          <div class="active">
            <h2 class="q">
              <i class="iconfont">&#xe62d;</i>
              <span class="clearance">{{list.p}}</span>
              <i class="iconfont">&#xe62d;</i>
            </h2>
            <div class="everyDay-q">
              <img class="h-84"  :src="list.dImgUrl4"  alt="" />
            </div>
          </div>
          </router-link>
        </div>
        <!----品牌精选-->
        <div class="active" v-for="data of datas">
          <h2 class="q">
            <i class="iconfont">&#xe62d;</i>
            <span class="clearance">{{data.title}}</span>
            <i class="iconfont">&#xe62d;</i>
          </h2>
          <div class="imagess">
            <div class="same">
              <div class="same-son">
                <img :src="data.dataImgUrl1" alt=""/>
              </div>
              <div  class="same-son">
                <img :src="data.dataImgUrl2"  alt=""/>
              </div>
              <div  class="same-son">
                <img :src="data.dataImgUrl3"  alt=""/>
              </div>
              <div  class="same-son">
                <img :src="data.dataImgUrl4"  alt=""/>
              </div>
            </div>
          </div>
        </div>
        <!---爆款推荐--->
        <!---行业资讯-->
        <div class="active">
          <h2 class="q">
            <i class="iconfont">&#xe62d;</i>
            <span class="clearance">行业资讯</span>
            <i class="iconfont">&#xe62d;</i>
          </h2>
          <img style="width:100%" src="https://img.naifenpifa168.com/upfile/user/2/image/20180312/367df3c68ea8499d0a3a2832dcca2101.jpg" alt="" />
        </div>
        <!--中间灰色虚线-->
        <div class="line"></div>
        <!----分类小图标--->
        <div class="small-logo">
          <dl v-for="(icon,index) of icons" :key="index">
            <dt>
              <img :src="icon.imgUrl" alt="" />
            </dt>
            <dd>{{icon.title}}</dd>
          </dl>

        </div>
        <!--中间灰色虚线-->
        <div class="line"></div>
        <!---预售商品--->
        <div class="preSale">
          <h2 class="q">
            <i class="iconfont">&#xe60f;</i>
            <span class="clearance saleTitle">预售商品</span>
            <span class="more-sale">更多<i class="iconfont">&#xe630;</i></span>
          </h2>
          <dl class="sale-one" v-for="sales of saless">
            <dt class="sale-one-dt">
              <img :src="sales.saleImgUrl"  alt="" :key="sales.id"/>
            </dt>
            <dd class="sale-one-dd">
              <p class="sale-title">{{sales.title}} </p>
              <p class="sale-guige">{{sales.guige}}</p>
              <p class="sale-guige">{{sales.beizhu}}</p>
              <p class="sale-price">{{sales.price}}</p>
            </dd>
          </dl>
        </div>
        <!---热卖商品--->
        <div class="hotSale">
          <h2 class="q">
            <i class="iconfont">&#xe62d;</i>
            <span class="clearance saleTitle">热卖商品</span>
            <span class="more-sale">更多<i class="iconfont">&#xe630;</i></span>
          </h2>
          <div class="hotDetail">
            <dl class="pic-dl" v-for="(dlimgs,index) of dllist" :key="index">
              <dt class="img-box">
                <img :src="dlimgs.dlImgs"/>
              </dt>
              <dd class="pic-text">
                <p class="space">
                  <i style="background:#f23030;color:#fff;">自营</i>
                  <span>{{dlimgs.span}} </span>
                </p>
                <p><em class="unitPrice">单价</em><strong>{{dlimgs.price}}</strong></p>
              </dd>
            </dl>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.$http=axios
  export default {
    name:"Home",
    data () {
      return {
        swiperList:[],
        gimgList:[],
        dataImg:[],
        datas:[],
        saless:[],
        dllist:[],
        icons:[],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true,
          observer: true
          /* autoplay: true,
           speed: 400,
           observer: true,
           loop:true*/
        },

      }
    },
    created(){
      axios("http://localhost:8080/static/mock/index.json",{
        params:{
          type:"json"
        }
      })
        .then(res => {
          this.swiperList = res.data.data.swiperList;
          this.gimgList = res.data.data.gimgList;
          this.dataImg = res.data.data.dataImg;
          this.datas = res.data.data.datas;

          this.saless = res.data.data.saless;
          this.dllist = res.data.data.dllist;
          this.icons = res.data.data.icons;
        })
        .catch(err=>{
          console.log(error)
        })
    },
    methods:{

    }
  }
</script>

<style scoped>
a{
  border:none;
}
  .wrapper{
    width:100%;
    height:auto;
    overflow:hidden;
    background:#fff;
    margin-top:.44rem;
  }
  .swiper-img{
    width:100%
  }
  .swiper-pagination-bullet-active{
    background:#fff;
  }
  .gg{
    width:100%;
    height:auto;
  }
  .gg img{
    display:block;
    width:100%;
    height:1.02rem;
  }
  /***活动专区**/
  .activityArea{
    width:100%;
    height:auto;
  }

  h2{
    height:.37rem;
    line-height:.37rem;
    text-align:center;
    border-bottom:1px solid #e5e5e5;
  }
  .q{color:red;}
  .clearance{display:inline-block;margin-left:.2rem;margin-right:.2rem}
  .everyDay-q{
    height:auto;
    overflow:hidden;
  }
  .everyDay-q img{
    display:inline-block;
  }
  .h-84{height:.84rem;}
  .w-50{width:50%}
  .fl-left{float:left}
  .h-100{height:1rem;}
  .imagess{height:2.14rem;}
  .same{
    height:1rem;
    border-bottom:1px solid #e5e5e5;
    text-align:center;

  }
  .same-son{
    width:49.7%;
    float:left;
    border-right:1px solid #e5e5e5;
    height:1rem;
    border-bottom:1px solid #e5e5e5;
  }
  .same-son img{
    display:inline-block;
    width:1.8rem;
    height:.8rem;
    margin-top:.1rem;
  }
  .line{
    height:.08rem;
    background:#F1F1F1;
  }
  .small-logo{
    height:auto;
    width:100%;
    padding-top:.1rem;
    overflow:hidden;
  }
  .small-logo dl{
    width:1.03rem;
    height:1rem;
    text-align:center;
    width:25%;
    float:left;
    line-height:.3rem
  }
  .small-logo dl dt{
    width:.63rem;
    height:.63rem;
    margin-left:.2rem;
  }
  .small-logo dl dt img{
    width:100%;
    height:100%;
  }
  .small-logo dl dd{
    font-size:.12rem;
  }
  .saleTitle{
    margin-left:0;
    color:#666;
  }
  .more-sale{
    display:inline-block;
    font-size:.12rem;
    float:right;
    color:#666;
  }
  .sale-one{
    height:1rem;
    overflow:hidden;
    border-bottom:1px solid #e5e5e5;
    padding:.1rem;
  }
  .sale-one-dt{
    width:1rem;
    height:1rem;
    float:left;
    text-align:center;
    line-height:1rem;
  }
  .sale-one-dt img{
    width:1rem;
    height:1rem;
  }
  .sale-one-dd{
    width:2.88rem;
    padding:.1rem;
    margin-left:1.2rem;
    line-height:.2rem;
  }
  .sale-title{
    color:#000;
    width:2.68rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sale-guige{
    font-size:.13rem;
    color:#999;
  }
  .sale-price{
    font-size:.16rem;
    color:#FF0000;
    font-weight:bold;
    line-height:.3rem;
  }
  .hotDetail{
    height:auto;
    overflow:hidden;
  }
  .img-box{
    text-align:center;
    height:1.99rem;
    width:100%;
  }
  .img-box img{
    vertical-align: middle;
    width:1.99rem;
    height:1.99rem;
  }
  .pic-dl{
    float:left;
    width:47.6%;
    height:2.92rem;
    padding-bottom:.06rem;
    border:1px solid #e5e5e5;
    margin-left:.06rem;
    margin-top:.1rem;
  }
  .img-box{
    width:100%;
    position:relative;
  }
  .img-box img{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
  .space{
    height: .44rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    color: #232326;
    margin-top: .05rem;
    line-height: .22rem;
    margin-bottom: .03rem;
    padding: 0 .04rem;
  }
  .unitPrice{
    font-size:.1rem;
    color:#bbb;
    display:inline-block;
    margin-left:.1rem;
  }
  strong{
    color:#f23030;
  }
</style>
