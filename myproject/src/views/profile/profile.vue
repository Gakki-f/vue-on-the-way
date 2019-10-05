<template>
  <div class="profile" @click="showClick">
    <nav-bar class="home-nav">
      <div slot="center">我的信息</div>
    </nav-bar>
    <div class="base-info">
      <img src="~assets/img/profile/avatar.svg" class="img1" alt />
      <div class="o">
        <div class="m">登录/注册</div>
        <div class="i">
          <img src="~assets/img/profile/phone.svg" alt />
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <img src="~assets/img/common/arrow-left(1).svg" alt class="img2" />
    </div>
    <div class="m-info">
      <div class="item">
        <p><span>0.00</span>元</p>
        <p>我的余额</p>
      </div>
      <div class="item">
        <p><span>0</span>个</p>
        <p>我的优惠</p>
      </div>
      <div class="item">
        <p><span>0</span>分</p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="f-info">
      <div class="item"><img src="~assets/img/profile/message.svg" alt /><span>我的消息</span></div>
      <div class="item"><img src="~assets/img/profile/pointer.svg" alt /><span>积分商城</span></div>
      <div class="item"><img src="~assets/img/profile/vip.svg" alt /><span>会员卡</span></div>
      <div class="item"><img src="~assets/img/profile/cart.svg" alt /><span>我的购物车</span></div>
      <div class="item"><img src="~assets/img/profile/shopping.svg" alt /><span>下载购物APP</span></div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NavBar
  },
  methods:{
    showClick(){
      this.$toast.show("only a show page")
    }
  }
};
</script>

<style scoped>
.f-info{}
.f-info img{width: 20px;height: 20px;margin: 0 10px;}
.f-info .item{display: flex;align-items: center;padding: 10px 0;border-bottom: 1px solid #eee;}
.f-info .item:nth-child(3),
.f-info .item:nth-child(5){border-bottom: 10px solid #f5f5f5;}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.base-info{
  background: #ff5777;
  display: flex;
  align-items: center;padding: 10px;
  color:#fff;
}
.img1{
  height: 80px;
  width: auto;
}
.o{font-size: 14px;}
.i{display: flex;align-items: center;}
.m{margin-left: 5px;font-size: 18px;}
.i img{width: 30px;height: auto;}
.img2{width: 30px;height: auto;margin-left: auto;}
.m-info {display: flex;align-items: center;border-bottom: 10px solid #f5f5f5;}
.m-info .item{width: 33%;padding: 20px 0;text-align: center; border-right: 1px solid #eee;font-size: 16px;}
.m-info .item:last-child{border:none;}
.m-info .item span{font-size: 20px;font-weight: bold;color:#f10;}
</style>
