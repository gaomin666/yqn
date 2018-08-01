<template>
  <div>
    <div class="top">
      <div class="parent">
        <span class="back-home"><i class="iconfont" onclick="">&#xe627;</i></span>
        <span>行业资讯</span>
      </div>
    </div>
    <div class="qz-top">
    <!-- <dl v-for="(information,index) in informations" :key="information.id">
        <dt class="top-dd">
          <img :src="information.informationImgs" alt="">
        </dt>
        <dd class="qz-dd">{{information.title}}</dd>
      </dl>-->
      <router-link to="md">
        <dl>
          <dt class="top-dd">
            <img src="https://img.naifenpifa168.com/upfile/admin/image/20180716/ba0e94461dec087b89ad1f6d4f080ee0.jpg" alt="">
          </dt>
          <dd class="qz-dd">门店管理</dd>
        </dl>
      </router-link>

      <router-link to="cx">
        <dl>
          <dt class="top-dd">
            <img src="https://img.naifenpifa168.com/upfile/admin/image/20180716/ba0e94461dec087b89ad1f6d4f080ee0.jpg" alt="">
          </dt>
          <dd class="qz-dd">促销方案</dd>
        </dl>
      </router-link>
      <router-link to="sc">
        <dl>
          <dt class="top-dd">
            <img src="https://img.naifenpifa168.com/upfile/admin/image/20180716/ba0e94461dec087b89ad1f6d4f080ee0.jpg" alt="">
          </dt>
          <dd class="qz-dd">素材专区</dd>
        </dl>
      </router-link>
      <router-link to="jl">
        <dl>
          <dt class="top-dd">
            <img src="https://img.naifenpifa168.com/upfile/admin/image/20180716/ba0e94461dec087b89ad1f6d4f080ee0.jpg" alt="">
          </dt>
          <dd class="qz-dd">交流社区</dd>
        </dl>
      </router-link>

    <!---下面对应不同内容显示区-->
      <div>
        <router-view></router-view>
      </div>


    </div>
    <div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http=axios
    export default {
        name: "qz",
      data(){
        return{
          informations:[],
          wenZhangs:[]



        }
      },
      created(){
          axios('http://localhost:8080/static/mock/index.json',{
            params:{
              type:"json"
            }
          }).then( res=>  {
            this.informations = res.data.data.informations;
            this.wenZhangs = res.data.data.wenZhangs;

          }).catch(err=>{
            console.log(error)
          })
      }
    }
</script>

<style scoped>
  .qz-top{
    height:.86rem;
  }
  .top-dd{
    margin-top:.2rem;
  }
  .qz-top dl{
    width:25%;
    height:100%;
    float:left;
    text-align:center;
  }

  .qz-top dl dt img{
    width:.35rem;
    height:.35rem;
    display:inline-block;
    border-radius:50%;
  }
.router-link-active{
  border:none;
  color:#f66!important;
}
  .detail{
    height:auto;
    overflow:hidden;
  }
  .qz-dd{
    font-size:.14rem;
    margin-top:.04rem;

  }
</style>
