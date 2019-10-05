<template>
  <div id="category">
    <nav-bar class="home-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="container">
      <cart-nav :navItem="categories" @menuClick="menuClick" class="cart-nav" />
      <div class="c-right">
        <cart-info :subcategories="subcategories" :categoryDetail="categoryDetail" />
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import CartNav from "./childCpns/CartNav";
import CartInfo from "./childCpns/CartInfo";
import { getCartNav, getCartInfo, getCategoryDetail } from "network/category";
export default {
  data() {
    return {
      categories: [],
      subcategories: [],
      categoryDetail: [],
      currentIndex: 0
    };
  },
  components: {
    Scroll,
    NavBar,
    CartNav,
    CartInfo
  },
  created() {
    this._getCategory();
  },
  mounted() {},
  methods: {
    _getCategory() {
      getCartNav().then(res => {
        const categories = res.data.category.list;

        this.categories = res.data.category.list;
        this.getCartInfo(0);
        this.getCategoryMiniWallKey(0);
      });
    },
    getCartInfo(currentIndex) {
      // 1.获取对应的maitkey
      const maitkey = this.categories[currentIndex].maitKey;

      // 2.请求的数据
      getCartInfo(maitkey).then(res => {
        this.subcategories = res.data.list;
        // console.log(this.subcategories);
      });
    },
    getCategoryMiniWallKey(currentIndex) {
      // 1.获取对应的miniWallKey
      const miniWallKey = this.categories[currentIndex].miniWallkey;

      // 2.请求数据类别的数据
      this.getRealCategoryDetail(currentIndex, miniWallKey, "pop");
      // this.getRealCategoryDetail(currentIndex, miniWallKey, 'new');
      // this.getRealCategoryDetail(currentIndex, miniWallKey, 'sell');
    },
    getRealCategoryDetail(currentIndex, miniWallKey, type) {
      getCategoryDetail(miniWallKey, type).then(res => {
        this.categoryDetail = res;
      });
    },
    menuClick(index) {
      // 1.改变当前的currentIndex
      this.currentIndex = index;
      // 2.请求对应currentIndex的数据
      this.getCartInfo(this.currentIndex);

      // 3.请求对应的currentIndex的详情数据
      this.getCategoryMiniWallKey(this.currentIndex);
    }
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.cart-nav {
  width: 30%;
}
.container {
  display: flex;
}
.c-right {
  width: 70%;
  position: relative;
}
</style>
