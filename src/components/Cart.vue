<template>
  <div>
    <div class="top">
      <div class="parent">
        <span class="back-home"><i class="iconfont" onclick="/*history.go(-1)*/">&#xe627;</i></span>
         <span>进货单</span>
      </div>
    </div>

    <div class="text-c">
      <div class="gwc-img"></div>
      <p class="col-999 fs-14">进货单空空如也，快去购物吧</p>
      <router-link to="/" style="border-left:none;"><input type="button" value="去逛逛" class="btn-danger"></router-link>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Cart"
    }
</script>

<style scoped>

 .text-c{
   text-align:center;
 }
.gwc-img{
  background:url("https://m.naifenpifa168.com/src/m/view/themes/images/sign-empty-cart.png") no-repeat center center ;
  background-size:1rem 1rem;
  height:1.1rem;
  margin-top:0.33rem;
}
  .col-999{
    color:#999;
  }
  .fs-14{
    font-size:.14rem;
    min-height:.5rem;
  }
  .btn-danger{
    background:#c12e2a;
    color:#fff;
    width:.68rem;
    height:.34rem;
    line-height:.34rem;
    font-size:.14rem;
    border:none;
  }
</style>
