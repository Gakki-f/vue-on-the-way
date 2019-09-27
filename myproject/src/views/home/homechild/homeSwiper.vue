<template>
  <Swiper v-if="banners.length" :slides-per-view="1">
    <div class="swiper-slide" slot="swiper-item" v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </div>
    <div slot="swiper-pagination" class="swiper-pagination"></div>
    <!-- <div slot="swiper-button-next" class="swiper-button-next"></div>
    <div slot="swiper-button-prev" class="swiper-button-prev"></div>-->
  </Swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import "assets/css/swiper.min.css";
export default {
  name: "homeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper
  }
};
</script>
<style scoped>
.swiper-slide img {
  width: 100%;
  height: auto;
}
</style>