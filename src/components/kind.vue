
<template>
  <div>
    <div class="top">
      <div class="parent">
        <span class="float-left"><i class="iconfont" onclick="history.go(-1)">&#xe627;</i></span>
        <span class="ic"><i class="iconfont">&#xe60b;</i></span>
        <input type="text" class="search" placeholder="爱他美" v-model="searchtext"/>
        <button  @click="onsearch()">搜索</button>
      </div>
    </div>
    <div class="app">
      <ul class="list-group">
        <li v-for="item of tabs" :key="item.id"  :class="{active:item.id == num}" @click="tab(item.id)">
          {{item.title}}
        </li>
      </ul>
      <div class="tab-right">
        <div class="baby">
          <h2>热卖品牌</h2>
            <router-link class="baby-dl"
              :to="{ path: '/listShow', query: { id: kind.id}}"
               v-for="(kind,index) in kindCarts"
              :key="kind.id" :class="{active:kind.id == number}"
              @click="change()">
            <dt>
              <img :src="kind.aasImgUrl">
            </dt>
            <dd>
              {{kind.title}}
            </dd>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.$http=axios
  export default({
    name:"Kind",
    data() {
      return{
        tabs:[],
        kindCarts:[],
        num:0,
        tableData:[],
        number:[],
        searchtext:''
      }
    },
    created(){
      axios("http://localhost:8080/static/mock/index.json",{
        params:{
          type:"json"
        }
      })
        .then(res => {
          this.tabs = res.data.data.tabs;
          this.kindCartss = res.data.data.kindCarts;
          this.tableDatas = res.data.data.tableData;
          for(var key in this.kindCartss){
            this.tab(key);
            break;
          }
          for(var key in this.tableDatas){
            this.change(key);
            break;
          }
        })
        .catch(err=>{
          console.log(error)
        })
    },
    methods:{
      tab(index){
        if(index!='undefined' &&
          index!=''){
          this.kindCarts=this.kindCartss[index];
       }
        this.num = index;
      },
      change(index){
        console.log(this.tableData);
        if(index!='undefined' &&
          index!=''){
          this.tableData=this.tableDatas[index];
        }
        this.number = index;
      },
      onsearch(){
         this.$router.push({path:'/listShow',query:{keyword:this.searchtext}});

      }

    }



  })
</script>
<style scoped>

.active{
  color:#f66;

}
  .float-left{
    float:left;
    display:inline-block;
  }
</style>

