<template>
  <div id="DetailShopInfo">
    <div class="shop-t">
      <div class="shop-t-l">
        <a :href="shop.allGoodsUrl">
          <img :src="shop.shopLogo" alt />
        </a>
      </div>
      <div class="shop-t-r">{{shop.name}}</div>
    </div>
    <div class="shop-m">
      <div class="shop-m-l">
        <div class="pro">
          <p>{{shop.cSells | sellCountFilter}}</p>
          <p>总销量</p>
        </div>
        <div class="pro">
          <p>{{shop.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-m-r">
        <div class="item" v-for="(item,index) in shop.score" :key="index">
          <span>{{item.name}}</span>
          <span :class="{isBetter1:item.isBetter}">{{item.score}}</span>
          <span :class="{isBetter2:item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  filters: {
    sellCountFilter: function(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
#DetailShopInfo {
  padding: 20px 5px 10px;
}
.shop-t {
  display: flex;
  justify-content: left;
  align-items: center;
}
.shop-t-l {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border:1px solid #dcdcdc;
}
.shop-t-l img{
    width: 100%;
    height: 100%;
    border-radius: 50%
}
.shop-t-r{
    font-size: 16px;
    margin-left: 10px;
}
.shop-m{
    margin-top: 30px;
    display: flex;

}
.shop-m-l{
    flex: 1;
    display: flex;
    border-left: 1px solid #dcdcdc;
}
.pro{
    flex: 1;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
}
.pro p:nth-child(1){
    margin-bottom: 10px;
}
.shop-m-r{
    flex: 1;
    padding-left: 20px;
}


.shop-m-r .item{margin-bottom: 10px;}
.shop-m-r .item span{margin-right: 10px;}
.shop-m-r span:nth-child(2){
    display: inline-block;
    color:green;
    width: 40px;
}
.shop-m-r span:nth-child(3){
    color:#fff;
    background: green;
}
.shop-m-r span.isBetter2{
    color:#fff;
    background: #f10;
}
.shop-m-r span.isBetter1{
    color:#f10;
}
</style>
