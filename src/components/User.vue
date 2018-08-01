<template>
    <div>
       <div class="mine-top">
         <div class="mine-top-set">
           <span class="username">这是登陆人的名称</span>
           <span class="span-right"><i  class="iconfont">&#xe60c;</i></span>
         </div>
         <div class="over-flow">
           <div class="mine-top-pic"></div>
           <div class="mine-top-text">这个数据待定可能是user</div>
           <div class="mine-top-kf">专属客服：11111111111<i style="display:inline-block;margin-left:.04rem;font-size:.12rem;" class="iconfont">&#xe630;</i></div>
         </div>
       </div>
      <!---总消费--账户积分-->

      <div class="mine-total">
        <div class="cons-integral">
           <div class="amount">
             <p class="fs-12">总计消费</p>
             <p class="fs-16"><span>00000</span><span class="fs-12">元</span></p>
           </div>
           <div class="integral">
             <p class="fs-12">账户积分</p>
             <p class="fs-16"><span>0000</span><span class="fs-12">分</span></p>
           </div>
        </div>
      </div>
    <!-----user的订单-->
     <div class="user-order">
       <div class="order-box">
          <div class="order-top">
            <div class="order-top-title">我的订单</div>
            <a href="" class="order-top-right">全部订单<i class="iconfont">&#xe602;</i></a>
          </div>
          <div class="overflow-hidden">
             <dl class="order-item">
               <dt>
                 <img src="https://img.naifenpifa168.com/upfile/user/2/image/20180223/4d0c37ea85f0c4ee5104d7b04ac42f25.jpg" alt="">
               </dt>
               <dd>待付款</dd>
             </dl>
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/user/10397/image/20180321/4a98a5239748aa142487de64470a9162.jpg" alt="">
              </dt>
              <dd>待发货</dd>
            </dl>
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/user/2/image/20171121/3366a6931b396a77d9865809aa7d9e92.jpg" alt="">
              </dt>
              <dd>待收货</dd>
            </dl>
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/admin/image/20180717/9378f96d5bf94e03a4f4c9296e4fc3b5.jpg" alt="">
              </dt>
              <dd>退款售后</dd>
            </dl>
          </div>
       </div>
     </div>
      <!---------预售-------->
      <div class="preSale">
        <div class="preSale-box">
          <div href="" class="preSale-box-detail">
            <div class="preSale-title">我的预售订单</div>
            <span class="more"><i class="iconfont">&#xe602;</i></span>
          </div>
        </div>
      </div>
      <!----服务-------->
      <div class="service">
        <div class="service-box">
          <div class="service-box-top">
            <div class="service-top-title">我的服务</div>
          </div>
          <div class="overflow-hidden">
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/user/2/image/20180223/4d0c37ea85f0c4ee5104d7b04ac42f25.jpg" alt="">
              </dt>
              <dd>优惠券</dd>
            </dl>
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/user/2/image/20180223/4d0c37ea85f0c4ee5104d7b04ac42f25.jpg" alt="">
              </dt>
              <dd>专属客服</dd>
            </dl>
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/user/2/image/20180223/4d0c37ea85f0c4ee5104d7b04ac42f25.jpg" alt="">
              </dt>
              <dd>我的设置</dd>
            </dl>
          </div>
        </div>
      </div>
      <!-----------积分-------->
      <div class="service">
        <div class="service-box">
          <div class="service-box-top">
            <div class="service-top-title">我的积分</div>
          </div>
          <div class="overflow-hidden">
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/user/2/image/20180223/4d0c37ea85f0c4ee5104d7b04ac42f25.jpg" alt="">
              </dt>
              <dd>账户积分</dd>
            </dl>
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/user/2/image/20180223/4d0c37ea85f0c4ee5104d7b04ac42f25.jpg" alt="">
              </dt>
              <dd>积分商城</dd>
            </dl>
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/user/2/image/20180223/4d0c37ea85f0c4ee5104d7b04ac42f25.jpg" alt="">
              </dt>
              <dd>兑换记录</dd>
            </dl>
            <dl class="order-item">
              <dt>
                <img src="https://img.naifenpifa168.com/upfile/user/2/image/20180223/4d0c37ea85f0c4ee5104d7b04ac42f25.jpg" alt="">
              </dt>
              <dd>积分流水</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>
.mine-top{
  margin-top: -.44rem;
  height:1.39rem;
  background:url(https://m.naifenpifa168.com/src/m/view/themes/css/images/mine-top-bg.png)
}
  .mine-top-set{
    overflow:hidden;
    padding:0 .12rem;
    padding-top:.15rem;
    margin-bottom:.1rem;
    text-align:center;
    color:#fff;
  }
.span-right{
  float:right;
}
span-right i{
  font-size:.18rem;
}
  .over-flow{
    overflow:hidden;
    height:.51rem;
  }
  .mine-top-pic{
    width:.38rem;
    height:.38rem;
    border:1px solid #ccc;
    margin-left:.43rem;
    border-radius:50%;
    background:url(https://img.naifenpifa168.com/upfile/user/10397/image/20170725/9e1acfcb7b96fd5509f6e4d570ba723b.jpg) no-repeat;
    display:inline-block;
    float:left;
  }
  .mine-top-text{
    height:.2rem;
    font-size:.15rem;
    color:#fff;
    margin-left:1rem;
  }
  .mine-top-kf{
    display:inline-block;
    width:1.8rem;
    height:.24rem;
    line-height:.22rem;
    color:#fff;
    font-size:.12rem;
    margin-left:.1rem;
    border-radius:.12rem;
    text-indent:.08rem;
    margin-top:.05rem;
    box-shadow:0.005rem 0.005rem .01rem rgb(155,64,4);
    background:linear-gradient(to bottom ,#ffc000 , #fd7202);
  }
.mine-total{
  padding:0 .1rem;
  margin-top:-.33rem;
}
  .cons-integral{
    height:.4rem;
    background:#fff;
    box-shadow:0 0.01rem 0.01rem #eee;
    padding:.13rem 0;
    position:relative;
    overflow:hidden;
  }
  .amount{
    float:left;
    width:50%;
    font-size:.12rem;
    color:#333;
    text-align:center;
    border-right:1px solid #999;
  }
  .fs-12{
    font-size:.12rem;
    color:#666;
  }
  .fs-16{
    font-size:.16rem;
    color:#333;
    margin-top:.1rem;
  }
  .integral{
    float:right;
    width:49%;
    text-align:center;
  }
  .user-order{
    padding:0 .08rem;
    margin-top:.06rem;
    height:1.16rem;
   /* background:#f66;*/
  }
  .order-box{
    height:100%;
    background-color:#fff;
    border-radius:.05rem;
    box-shadow:0 0.01rem 0.01rem #eee;
    padding-left:.1rem;
    padding-right:.1rem;

  }
  .order-top{
    padding-top:.15rem;
    position:relative;
  }
  .order-top-title{
    height:.15rem;
    line-height:.15rem;
    font-size:.15rem;
    color:#333;
    border-left:.02rem solid #f60;
    padding-left:.1rem;
  }
  .order-top-right{
    position:absolute;
    right:0;
    top:.09rem;
    padding:.05rem;
    color:#666;
    font-size:.12rem;
  }
  .order-item dt{
    width:.36rem;
    height:.36rem;
  }
  .overflow-hidden{
    overflow:hidden;
    padding-top:.15rem;
  }
  .order-item{
    display:block;
    width:25%;
    height:.71rem;
    float:left;
    padding-bottom:.12rem;
    text-align:center;
    font-size:.12rem;
  }
.order-item dt{
  width:.36rem;
  height:.36rem;
  margin:auto;
}
.order-item dt img{
   width:100%;
   height:100%;
  display:inline-block;
  border-radius:50%;
 }
.order-item dd{
  margin-top:.1rem;
}
  .preSale{
    padding:0 .08rem;
    margin-top:.06rem;
   /* background:#ccc;*/
    height:.45rem;
  }
.preSale-box{
  background:#fff;
  border-radius:.05rem;
  box-shadow:0 0.01rem 0.01rem #eee;
  padding-left:.1rem;
  padding-right:.1rem;
  height:100%;
}
  .preSale-box-detail{
    display:block;
    width:100%;
    padding-top:.15rem;
    position:relative;
    overflow:hidden;
  }
  .preSale-title{
    height:.15rem;
    line-height:.15rem;
    font-size:.15rem;
    color:#333;
    border-left:.02rem solid #f60;
    padding-left:.1rem;
  }
  .more{
    position:absolute;
    right:.05rem;
    color:#666;
    top:.15rem;
  }
  .service{
    height:1.08rem;
    padding:.06rem .08rem;
   /* background:#f66;*/
  }
  .service-box{
    background:#fff;
    border-radius:.05rem;
    box-shadow:0 .01rem .01rem #eee;
    padding-left:.1rem;
    padding-right:.1rem;
    height:100%;
    margin-top:.1rem;
  }
  .service-box-top{
    padding-top:.15rem;
  }
  .service-top-title{
    heigh:.15rem;
    line-height:.15rem;
    font-size:.15rem;
    color:#333;
    border-left:.02rem solid #f60;
    padding-left:.1rem;
  }
</style>
