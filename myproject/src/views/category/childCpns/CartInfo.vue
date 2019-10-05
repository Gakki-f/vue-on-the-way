<template>
  <div>
    <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="carShow">
      <div class="cart-info">
        <div v-for="item in subcategories" class="item" @click="infoClick(item.link)">
          <img :src="item.image" alt />
          <div class="text">{{item.title}}</div>
        </div>
      </div>
      <div class="cart-info-detail">
        <div v-for="i in categoryDetail" class="detail-item" @click="detailClick(i.link)">
          <img :src="i.img" alt @load="detailImgLoad" />
          <div class="detail-text">{{i.title}}</div>
          <div class="info">
            <div class="price">￥{{i.price}}</div>
            <div class="cfav">{{i.cfav}}</div>
          </div>
        </div>
      </div>
    </scroll>
    <back-top v-show="isShow" @click.native="backClick" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import { backTopMix } from "common/mixin";
export default {
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  props: {
    subcategories: {
      type: Array,
      default() {
        return [];
      }
    },
    categoryDetail: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mixins: [backTopMix],
  created() {},
  components: {
    Scroll
  },
  methods: {
    detailImgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$refs.scroll.refresh();
      }
    },
    infoClick(e) {
      window.location.href = e;
    },
    detailClick(e) {
      window.location.href = e;
    },
    carShow(position) {
      this.isShow = position.y < -500;
    }
  },
  watch: {
    categoryDetail() {
      // 获取图片的个数
      this.imagesLength = this.categoryDetail.length;
    }
  }
};
</script>

<style scoped>
.cart-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 33%;
  text-align: center;
  margin: 10px 0;
}
.item img {
  width: 60%;
  height: auto;
}
.text {
  font-size: 14px;
  margin-top: 10px;
}
.scroll {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
}
.cart-info-detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.detail-item {
  width: 48%;
  text-align: center;
  border-radius: 10px;
  font-size: 14px;
  margin: 6px 0;
}
.detail-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.detail-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px 0;
}
.info {
  display: flex;
  justify-content: center;
}
.info .price {
  color: #ff5777;
}
.cfav {
  background: url("~assets/img/common/collect.svg") no-repeat center left;
  background-size: contain;
  padding-left: 17px;
  margin-left: 3px;
}
</style>
