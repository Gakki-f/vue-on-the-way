<template>
  <div id="detail">
    <detail-title @titleClick="titleClick" ref="nav" />
    <scroll class="detail-scroll" ref="scroll" :probe-type="3" @scroll="detailScroll">
      <detail-swiper :top-images="topImages" />
      <detail-info :goods="goods" />
      <detail-shop :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :param-info="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="commentInfo" />
      <Goods :goods="recommends" ref="recommend"></Goods>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />
    <detail-bottom-bar @shopClick="cartClick" />
  </div>
</template>

<script>
import DetailTitle from "./childcompos/DetailTitle";
import DetailSwiper from "./childcompos/DetailSwiper";
import DetailInfo from "./childcompos/DetailInfo";
import DetailShop from "./childcompos/DetailShop";
import DetailGoodsInfo from "./childcompos/DetailGoodsInfo";
import DetailParamInfo from "./childcompos/DetailParamInfo";
import DetailCommentInfo from "./childcompos/DetailCommentInfo";
import DetailBottomBar from "./childcompos/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import Goods from "components/content/goods/Goods";

import { itemListenerMix, backTopMix } from "common/mixin";
import { mapActions } from 'vuex'
import {
  getDetail,
  GoodsInfo,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      itemImgListener: null,
      detailScrollY: [],
      currentIndey: 0
    };
  },
  mixins: [itemListenerMix, backTopMix],
  components: {
    DetailTitle,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    Goods,
    DetailBottomBar,
  },
  created() {
    this.id = this.$route.params.id;
    // 获取详情数据
    getDetail(this.id).then(res => {
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 1.获取商品信息
      this.goods = new GoodsInfo(
        data.columns,
        data.itemInfo,
        data.shopInfo.services
      );

      // 2.获取商家信息
      this.shop = new Shop(data.shopInfo);

      // 3.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 4.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 4.获取评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      // 根据最新的数据，对应的dom已经渲染，但是没有加载完图片
      // 目前的offsetTop不包含图片
      // offsetTop的值不对基本都是图片原因
      // 值不对，↓ 图片没加载完
      // this.$nextTick(() => {
      //     this.detailScrollY.push(0);
      //     this.detailScrollY.push(this.$refs.params.$el.offsetTop);
      //     this.detailScrollY.push(this.$refs.commentInfo.$el.offsetTop);
      //     this.detailScrollY.push(this.$refs.recommend.$el.offsetTop);
      //     console.log(this.detailScrollY);
      // });
    });
    // 获取推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list;
    });
  },
  methods: {
    ...mapActions(['addCart']),
    imgLoad() {
      this.$refs.scroll.refresh();

      this.detailScrollY.push(0);
      this.detailScrollY.push(this.$refs.params.$el.offsetTop);
      this.detailScrollY.push(this.$refs.commentInfo.$el.offsetTop);
      this.detailScrollY.push(this.$refs.recommend.$el.offsetTop);
      this.detailScrollY.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -(this.detailScrollY[index] - 44), 400);
    },
    detailScroll(position) {
      this.isShow = position.y < -500;
      const positionY = -(position.y - 44);

      // ↓ 普通做法
      // for (let i = 0; i < this.detailScrollY.length; i++) {
      //     if (
      //         this.currentIndey !== i &&
      //         ((i < this.detailScrollY.length - 1 &&
      //             positionY >= this.detailScrollY[i] &&
      //             positionY < this.detailScrollY[i + 1]) ||
      //             (i === this.detailScrollY.length - 1 &&
      //                 positionY >= this.detailScrollY[i]))
      //     ) {
      //         this.currentIndey = i;
      //         this.$refs.nav.currentIndex = this.currentIndey;
      //         console.log(i);

      //     }
      // }

      // ↓ hack做法
      for (let i = 0; i < this.detailScrollY.length - 1; i++) {
        if (
          this.currentIndey !== i &&
          (positionY >= this.detailScrollY[i] &&
            positionY < this.detailScrollY[i + 1])
        ) {
          this.currentIndey = i;
          this.$refs.nav.currentIndex = this.currentIndey;
          console.log(i);
        }
      }
    },
    cartClick() {
        const product = {}
        product.id =this.id;
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.lowPrice = this.goods.lowPrice
        product.highPrice = this.goods.highPrice

        // this.$store.commit('addCart', product)
        // this.$store.dispatch('addCart', product).then(res=>{
        //   console.log(res);
        // })
        this.addCart(product).then(res=>{
          // console.log(this.$toast);
          this.$toast.show(res)
        })
    }
  },
  mounted() {},
  deactivated() {
    this.$bus.$off("imgOnLoad", this.itemImgListener);
  }
};
</script>

<style scoped>
#detail {
  background: #fff;
  position: relative;
  z-index: 9;
  height: 100vh;
}
.detail-title {
  position: relative;
  z-index: 99;
}
.detail-scroll {
  height: calc(100% - 93px);
  overflow: hidden;
}

</style>
