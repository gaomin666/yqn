<template>
    <div>
      <div class="top">
        <div class="parent">
          <span class="back-home"><i class="iconfont" onclick="history.go(-1)">&#xe627;</i></span>

          <input type="text" class="search" placeholder="爱他美" v-model="searchtext"/>
          <button  @click="onsearch()">搜索</button>


        </div>
      </div>
      <!----最近搜索--->
      <div class="hot-search">
         <span class="close-search">最近搜索</span>
        <span class="huishou"><i class="iconfont">&#xe6df;</i></span>
      </div>
      <div class="search-list" id="search-list">

      </div>


      <!----热门搜索--->
      <div class="hot-search">
        <p class="m-l-3">热门搜索</p>
        <div class="hot">
          <a href="">7月23日大促周年庆</a>
          <a href="">限时限量秒杀</a>
          <a href="">爆款满减</a>
          <a href="">买减</a>
          <a href="">折扣</a>
          <a href="">24小时低价秒杀</a>
          <a href="">礼盒套装</a>
          <a href="">云南金花易生菌</a>
          <a href="">安配</a>
        </div>




      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
         searchtext:''
      }
    },
    methods: {
      onsearch(){
        this.$router.push({path:'/listShow',query:{keyword:this.searchtext}});
      }
    }
   }
</script>

<style scoped>

  .hot-search{
    font-size:.15rem;
    color:#333;
    margin-top:.1rem;
    height:.5rem;
    line-height:.5rem;
  }
.close-search{
  float:left;
  margin-left:.3rem;
}
  .huishou{
    display:inline-block;
    float:right;
    margin-right:.35rem;
  }
  .search-list{
    padding-left:.3rem;
    padding-right:.3rem;
    height:auto;
    overflow:hidden;
  }
  .m-l-3{
    margin-left:.3rem;
  }
  .hot a{
    display: inline-block;
    height: .3rem;
    width: auto;
    border: 1px solid #ccc;
    line-height: .3rem;
    font-size: .12rem;
    padding: .05rem;
    color:#666;
    margin-left:.1rem;
  }
</style>
