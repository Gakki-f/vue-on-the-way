<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title">{{goods.title}}</div>
    <div class="top-info">
      <span>{{goods.newPrice}}</span>
      <span>{{goods.oldPrice}}</span>
      <span
        v-if="goods.discountDesc"
        :style="{background:goods.discountBgColor}"
      >{{goods.discountDesc}}</span>
    </div>
    <div class="mid-info">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[3].name}}</span>
    </div>
    <div class="footer-info">
      <div v-for="item in goods.services.length-1" :key="item" class="services-item">
        <img :src="goods.services[item-1].icon" />
        <span>{{goods.services[item-1].name}}</span>
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
    goods: {
      type: Object
    }
  },
  components: {}
};
</script>

<style scoped>
.base-info {
  padding: 2%;
}
.title {
  font-size: 16px;
  color: #000;
}
.top-info {
  display: flex;
  justify-content: left;
  margin-top: 10px;
  align-items: flex-end;
}
.top-info span {
  margin-right: 10px;
}
.top-info span:nth-child(1) {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-tint);
}
.top-info span:nth-child(2) {
  font-size: 12px;
  color: #666;
  text-decoration: line-through;
}
.top-info span:nth-child(3) {
  font-size: 12px;
  color: #fff;
  padding: 3px 5px;
  border-radius: 5px;
  /* background: pink; */
}
.mid-info {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
}
.footer-info{
  display: flex;
   justify-content: space-between;
   padding:20px 0 ;
   font-size: 14px;
   border-top: 1px solid #dcdcdc;
   border-bottom: 1px solid #dcdcdc;
   margin-top: 10px;
}
.footer-info img{
  width: 14px;
  height: 14px;
  margin-right: 3px;
}
.services-item{
  display: flex;
}
</style>
