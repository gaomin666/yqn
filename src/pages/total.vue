<template>
  <div>
    <list/>
    <listShow/>
    <showactive/>
    <activeDetail/>
  </div>

</template>

<script>
  import list from './components/list.vue'
  /****点击搜索框出来的列表页***/
  import listShow from './components/listShow.vue'
  /****活动展示页***/
  import showactive from './components/showactive.vue'
  /**点击立即购买***/
  import activeDetail from './components/activeDetail'
    export default {
      name: "total",
    components:{
        list,
      listShow,
      showactive,
      activeDetail
    },
      data(){
          return{

          }
      }
    }
</script>

<style scoped>

</style>
