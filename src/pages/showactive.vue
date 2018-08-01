<template>
    <div>
      <div class="top">
        <div class="parent">
          <span class="back-home"><i class="iconfont" onclick="history.go(-1)">&#xe627;</i></span>
          <span>清仓特卖</span>
        </div>
      </div>
     <div class="height-auto">
       <img src="https://img.naifenpifa168.com/upfile/admin/11/image/20180605/c993b7782f7fb19e3843e7df0bf934d3.jpg" class="h-2" alt="">
       <p class="sale">赔钱清仓，超值特卖！抢到就是赚到！门店促销利器！引流必卖单品！</p>
       <div class="pic-dl">
         <router-link :to="{ path: '/activeDetail', query: { id: Handle.id}}" class="cheap" v-for="Handle in Handles" :key="Handle.id">
           <dt class="cheap-dt">
             <img :src="Handle.HandleImgUrl" alt="">
           </dt>
           <dd>
             <span  class="cheap-dd">{{Handle.title}}</span>
             <p class="pic-pro-price"><em class="col-bbb">单价</em><span class="f-14 col-f66">{{Handle.price}}</span></p>
             <input type="submit" value="立即购买" class="submit">
           </dd>
         </router-link>
       </div>
     </div>

    </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  Vue.prototype.$http=axios
    export default {
        name: "showactive",
      data(){
          return{
            Handles:[]
          }
      },created(){
          axios("http://localhost:8080/static/mock/activelist.json",{
            params:{
              type:"json"
            }
          }).then(res=>{
            this.Handles = res.data.data.Handles
          }) .catch(err=>{
            console.log(error)
          })
      }
    }
</script>

<style scoped>
  .height-auto{
    height:auto
  }
  .h-2{
    height:2.07rem;
    display:inline-block;
  }
  .sale{
    text-align:center;
    height:.2rem;
    line-height:.2rem;
    font-size:.12rem;
    padding:.05rem;
  }
  .pic-dl{
    height:auto;
    overflow:hidden;
    margin-bottom:.55rem;
  }
  .cheap{
    width:50%;
    float:left;
    margin-top:.1rem;
  }
.cheap-dt{
  width:98%;
  height:1.99rem;
  text-align:center;
}
  .cheap-dt img{
    width:100%;
    height:100%;
    vertical-align: middle;
  }
  .cheap-dd{
    height: .44rem;
    font-size: .16rem;
    overflow: hidden;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    color: #232326;
    margin-top: .05rem;
    line-height: .22rem;
    margin-bottom: .03rem;
    padding: 0 .04rem;
    text-align:center;
  }
  .pic-pro-price{
    height:.25rem;
    line-height:.25rem;
    width:98%;
  }
  .col-bbb{
    font-size:.12rem;
    color:#bbb;
  }
  .f-14{
    font-size:.14rem;
  }
  .col-f66{
    color:#f66;
  }
  .submit{
    display:inline-block;
    background:#f66;
    color:#fff;
    font-size:.14rem;
    height:.3rem;
    line-height:.3rem;
    width:98%;
    border:none;
    border-radius:.03rem;
  }

</style>
