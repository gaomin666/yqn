<template>
  <div id="app">

      <div class="content">
        <router-view></router-view>
      </div>
     <v-footer></v-footer>
    </div>
</template>
<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
  name: 'App',
  components: {
    "v-header":Header,
    "v-footer":Footer
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  list-style:none;
}
  html,body,#app{
    width:100%;
    height:100%;
  }
  #app{
    font-size:.16rem;
  }
  .content{
   height:auto;
    margin-top:.44rem;
  }
h2{
  height:.4rem;
  line-height:.4rem;
  font-size:.14rem;
  text-indent:.1rem;
  color:#666;
}
</style>
