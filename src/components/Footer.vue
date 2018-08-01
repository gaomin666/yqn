<template>
	<footer>
    <ul>
      <router-link to="/home">
        <li><i class="iconfont">&#xe60a;</i>首页</li>
      </router-link>
      <router-link to="/kind">
        <li><i class="iconfont">&#xe60e;</i> 分类 </li>
      </router-link>
      <router-link to="/cart">
        <li><i class="iconfont">&#xe613;</i>进货单</li>
      </router-link>
      <router-link to="/qz">
        <li><i class="iconfont">&#xe631;</i>圈子</li>
      </router-link>
      <router-link to="/user">
        <li><i class="iconfont">&#xe607;</i>我的</li>
      </router-link>
    </ul>
  </footer>
</template>

<script>
  export default {
     data (){
       return{

       }
     },
    methods:{

    }
   }
</script>

<style scoped>
  footer{
    height:.5rem;
    background:#333;
    color:#fff;
    text-align:center;
    position:fixed;
    bottom:0;
    left:0;
    z-index:99;
    width:100%;
  }
  footer ul{
    display:flex;
    height:100%;
  }
  footer ul a{
    flex:1;
    color:#fff;
    display:flex;
    flex-direction: column;
  }
  footer ul a li{
    flex:1;
    display:flex;
    flex-direction:column;
    line-height:.23rem;
  }
  .router-link-active{
    background:#f66;
    border:none!important;
  }
</style>
