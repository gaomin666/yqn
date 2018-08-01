<template>
  <div>
    <div class="top">
      <div class="parent">
        <span class="float-left"><i class="iconfont" onclick="history.go(-1)">&#xe627;</i></span>
        <span class="ic"><i class="iconfont">&#xe60b;</i></span>
        <input type="text" class="search" placeholder="爱他美" v-model="searchtext" />
      </div>
    </div>
      <div>
      <div class="sort title">
        <span>默认</span>
        <span class="price">
           <b class="jj">价格</b>
             <span class="aa">
                <i @click="up" class="iconfont" style="font-size:.12rem;color:#333">&#xe6b5;</i>
                <i @click="down" class="iconfont" style="font-size:.12rem;color:#333">&#xe6a2;</i>
             </span>
        </span>
        <span>
           <b class="jj">销量</b>
             <span class="aa">
                <i @click="heatup" class="iconfont" style="font-size:.12rem;color:#333">&#xe6b5;</i>
                <i @click="heatdown" class="iconfont" style="font-size:.12rem;color:#333">&#xe6a2;</i>
             </span>
        </span>
        <span>筛选</span>
      </div>
        <div id="header">
          <div class="list">
            <dl class="list" v-for="table in tableData">
              <dt class="list-dt"><img :src="table.tableimgUrl" alt=""></dt>
              <dd class="list-dd">
               <span v-if="a" class="support">自营</span><span class="pro-li-name">{{table.title}}</span>
                <p class="pro-li-price"><span class="unitPrice">单价：</span>￥{{table.price}}</p>
                <p class="hot">热度：{{table.heat}}</p>
              </dd>
            </dl>
            <!---点击搜索框后默认显示--->
           <!---->
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
    data() {
      return {
       tableData: [],
        a:"true",
        searchtext:''
      }
    },
    created(){
      var pid = this.$route.query.id||'';
      var keyword = this.$route.query.keyword||'';
      axios("http://localhost:8080/static/mock/data.json",{
        params:{
          type:"json"
        }
      })
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(err=>{
          console.log(error)
        })
    },
    methods: {
      up(){
        this.tableData.sort(function (a,b){
          return a['price']-b['price'];
        }
        )
      },
      down(){
        this.tableData.sort(function (a,b) {
          return b['price']-a['price']
        })
      },
      heatup(){
        this.tableData.sort(function (a,b) {
          return a['heat']-b['heat'];
        })
      },
      heatdown(){
        this.tableData.sort(function (a,b) {
          return b['heat']-a['heat']

        })
      },
    }
  }

</script>

<style scoped>
  .ic{
    left:.8rem;
  }
  .float-left{
    display:inline-block;
    float:left;
  }
.list{
  height:.95rem;
  border-top:.01rem solid #999;
}
  .list-dt{
    width:20%;
    height:.8rem;
    float:left;
    text-align:center;
  }
  .list-dt img{
    display:inline-block;
    width:100%;
    height:100%;
   vertical-align: middle;
  }
  .list-dd{
    width:70%;
    float:left;
    height:100%;
    padding-left:.2rem;
    padding-top:.04rem;
  }
.sort{
  height:.4rem;
 /* overflow:hidden;*/
  line-height:.4rem;
}
.aa{
  line-height:.1rem;
  margin-top:.1rem;
}
  .sort span{
    display:inline-block;
    width:25%;
    text-align:center;
    float:left;
  }
  .unitPrice{
    color:#bbb;
    font-size:.1rem;
    float:left;
  }
  .pro-li-name{
    color: #000;
    font-size: .16rem;
    line-height: .22rem;
    height: .44rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  .pro-li-price{
    color: #f23030;
    font-size: .13rem;
    display: block;
    margin: .03px 0;
    position: relative;
    height: .25rem;
    line-height: .25rem;
    overflow: hidden;
    margin-top: .10rem;
  }
  .support{
    background:#f66;
    display:inline-block;
    float:left;
    margin-top:.03rem;
    margin-right:.02rem;
    color:#fff;
  }
  .price{
    display:inline-block;
    overflow:hidden;
  }
  .jj{
    display:inline-block;
    float:left;
  }
.hot{
  display:inline-block;
  float:right;
  margin-top:-.2rem;
  font-size:.12rem;
}


</style>
