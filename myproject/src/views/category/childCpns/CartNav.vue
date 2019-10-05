<template>
  <div class="cart-nav">
    <scroll class="scroll">
      <div
        v-for="(item, index) in navItem"
        :key="item.maitKey"
        class="cart-item"
        :class="{active:currentIndex === index}"
        @click="itemClick(index)"
      >
        <div>{{item.title}}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    navItem: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Scroll
  },
  created() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('menuClick',index)
    }
  }
};
</script>

<style scoped>
.active {
  color: #ff5777;
  background: #fff;
  position: relative;
}
.active::after {
  content: "";
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: #ff5777;
}
.cart-nav {
  background: #dcdcdc;
  text-align: center;
  height: calc(100vh - 49px - 43px);
}
.cart-item {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.scroll{
    height: 100%;
    overflow: hidden;
}
</style>
