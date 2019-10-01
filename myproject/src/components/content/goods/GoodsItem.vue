<template>
  <div class="goodsItem" @click="itemClick">
    <img v-lazy="showImg" alt @load="imgLoad" />
    <div class="info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("imgOnLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>
<style scoped>
.goodsItem {
  padding-bottom: 30px;
  width: 48%;
  text-align: center;
}
.goodsItem img {
  width: 100%;
  height: auto;
}
.goodsItem .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsItem p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsItem .cfav {
  background: url("~assets/img/common/collect.svg") no-repeat center left;
  background-size: 15px;
  padding-left: 20px;
}
</style>