<template>
  <div class="top">
    <div class="parent">
      <span class="ic"><i class="iconfont">&#xe60b;</i></span>
      <input type="text" class="search" placeholder="爱他美" />
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .top{
    width:100%;
    height:.44rem;
    background:#f66;
    text-align:center;
    line-height:.4rem ;
    position:fixed;
    top:0;
    left:0;
    z-index:99;
  }
  .search{
    width:80%;
    height:70%;
    border-radius:.1rem;
    border:none;
    text-indent:.2rem;
    position:relative
  }
  .parent{
    width:100%;
    height:100%;
    overflow:hidden;
  }
  .ic{
    position:absolute;
    z-index:99;
  }
</style>
