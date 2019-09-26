<template>
    <div class="swiper-container swiper-container1">
        <div class="swiper-wrapper">
            <slot name="swiper-item"></slot>
        </div>
        <div class="swiper-pagination swiper-pagination1"></div>
        <div class="swiper-button-next next1"></div>
        <div class="swiper-button-prev prev1"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "assets/css/swiper.min.css";
export default {
    name: "Swiper",
    props: {
    },
    data() {
        return {};
    },
    mounted() {
        var mySwiper = new Swiper(".swiper-container1", {
            autoplay: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination1",
                clickable: true
            },
            navigation: {
                nextEl: ".next1",
                prevEl: ".prev1"
            }
        });
    }
};
</script>
<style>
.swiper-slide img {
    width: 100%;
    height: 100%;
}
</style>