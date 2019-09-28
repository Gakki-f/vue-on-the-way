<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      ref="tabControl2"
      @tabClick="tabClick"
      class="tabControl"
      v-show="isFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="defaultShow"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <mid-view />
      <tab-control :titles="['流行', '新款', '精选']" ref="tabControl1" @tabClick="tabClick" />
      <Goods :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";
import BackTop from "components/content/backTop/BackTop";

import homeSwiper from "./homechild/homeSwiper";
import RecommendView from "./homechild/RecommendViews";
import MidView from "./homechild/MidView";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isShow: false,
      isFixed: false,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  components: {
    NavBar,
    homeSwiper,
    RecommendView,
    MidView,
    TabControl,
    Goods,
    Scroll,
    BackTop
  },
  created() {
    // 1.请求数据
    this.getHomeMultidata();

    // 1.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 30);
    this.$bus.$on("imgOnLoad", () => {
      // this.$refs.scroll.refresh()
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // this.saveY = this.scrollY()
    this.saveY = this.$refs.scroll.getScrollY();
    console.log(this.$refs.scroll.getScrollY());
  },
  methods: {
    /**
     * 事件点击
     *  */
    tabClick(index) {
      //   console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    defaultShow(position) {
      this.isShow = position.y < -500;
      this.isFixed = position.y < -this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop;
    },

    /**
     * 网络请求
     *  */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data.banner.list);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.tabControl {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
