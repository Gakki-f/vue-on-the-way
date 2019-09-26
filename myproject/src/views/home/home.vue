<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners" />
        <recommend-view :recommends="recommends" />
        <mid-view />
        <tab-control class="tab-control" :titles="['流行', '新款', '精选']" />
        <Goods :goods="goods['pop'].list"/>
        <ul>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
            <li>liebiao</li>
        </ul>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";

import homeSwiper from "./homechild/homeSwiper";
import RecommendView from "./homechild/RecommendViews";
import MidView from "./homechild/MidView";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                pop: { page: 0, list: [] },
                new: { page: 0, list: [] },
                sell: { page: 0, list: [] }
            }
        };
    },
    components: {
        NavBar,
        homeSwiper,
        RecommendView,
        MidView,
        TabControl,
        Goods
    },
    created() {
        // 1.请求数据
        this.getHomeMultidata();

        // 1.请求商品数据
        this.getHomeGoods("pop");
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },
    methods: {
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
                console.log(res);
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page += 1;
            });
        }
    }
};
</script>

<style>
#home {
    padding-top: 44px;
}
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
.tab-control {
    position: sticky;
    top: 44px;
}
</style>
