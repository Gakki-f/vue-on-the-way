<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-item"></slot>
    </div>
    <slot name="swiper-pagination"></slot>
    <slot name="swiper-button-next"></slot>
    <slot name="swiper-button-prev"></slot>
  </div>
</template>

<script>
import Swiper from "swiper";
import "assets/css/swiper.min.css";
export default {
  name: "Swiper",
  props: {
    swipeid: {
      type: String,
      default: ""
    },
    effect: {
      type: String,
      default: "slide"
    },
    loop: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    pagination: {
      type: Boolean,
      default: true
    },
    paginationType: {
      type: String,
      default: "bullets"
    },
    autoPlay: {
      type: Object,
      default() {
        return {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        };
      }
    },
    speed: {
      type: Number,
      default: 300
    },
    slidesPerView: {
      type: Number,
      default: 'auto'
    }
  },
  data() {
    return {};
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: this.autoPlay,
      loop: this.loop,
      effect: this.effect,
      paginationType: this.paginationType,
      direction: this.direction,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      speed: this.speed,
      slidesPerView: this.slidesPerView,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      disableOnInteraction: false //用户操作swiper之后，不禁止autoplay
    });
  }
};
</script>
<style scoped>

</style>