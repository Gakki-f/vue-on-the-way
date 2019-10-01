<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      
     <cart-list-item v-for="(item,index) in cartList" :product="item"/>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Scroll from "components/common/scroll/Scroll";

import CartListItem from './CartListItem'
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
.cart-list{
    height: calc(100% - 93px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
  background: #eee;
  /* position: relative;
  z-index: 9; */
}
</style>
