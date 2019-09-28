<template>
  <swiper class="swiper">
    <div slot="swiper-item" :key="item.iid" v-for="item in topImages" class="swiper-slide">
      <img :src="item" alt />
    </div>
    <div slot="swiper-pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import swiper from "components/common/swiper/Swiper";
export default {
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    swiper
  }
};
</script>


<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}

.swiper-slide img {
  width: 100%;
}
</style>
