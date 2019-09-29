<template>
  <div id="detail">
    <detail-title />
    <scroll class="detail-scroll" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-info :goods="goods" />
      <detail-shop :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :comment-info="commentInfo" />
    </scroll>
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

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
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
      commentInfo: {}
    };
  },
  components: {
    DetailTitle,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll
  },
  created() {
    this.id = this.$route.params.id;
    getDetail(this.id).then(res => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 1.获取商品信息
      this.goods = new Goods(
        data.columns,
        data.itemInfo,
        data.shopInfo.services
      );
      console.log(this.goods);

      // 2.获取商家信息
      this.shop = new Shop(data.shopInfo);
      console.log(this.shop);

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
        console.log(this.commentInfo);
      }
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    }
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
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
