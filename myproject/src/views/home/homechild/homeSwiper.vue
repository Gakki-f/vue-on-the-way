<template>
    <Swiper>
        <div class="swiper-slide" slot="swiper-item"  v-for="item in banners">
             <a :href="item.link">
                <img :src="item.image" alt />
            </a>
        </div>
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
    data() {
        return {};
    },
    components: {
        Swiper
    },
    
};
</script>
<style>
.swiper-slide img {
    width: 100%;
    height: 100%;
}
</style>