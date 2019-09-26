<template>
    <div>
        <tar-bar>
            <tar-bar-item path="/home">
                <img slot="item-icon" src="~assets/img/home.svg" alt />
                <img slot="item-icon-active" src="~assets/img/home_active.svg" alt />
                <div slot="item-text">首页</div>
            </tar-bar-item>
            <tar-bar-item path="/category">
                <img slot="item-icon" src="../assets/img/category.svg" alt />
                <img slot="item-icon-active" src="../assets/img/category_active.svg" alt />
                <div slot="item-text">分类</div>
            </tar-bar-item>
            <tar-bar-item path="/shopcart">
                <img slot="item-icon" src="../assets/img/shopcart.svg" alt />
                <img slot="item-icon-active" src="../assets/img/shopcart_active.svg" alt />
                <div slot="item-text">购物车</div>
            </tar-bar-item>
            <tar-bar-item path="/profile">
                <img slot="item-icon" src="../assets/img/profile.svg" alt />
                <img slot="item-icon-active" src="../assets/img/profile_active.svg" alt />
                <div slot="item-text">我的</div>
            </tar-bar-item>
        </tar-bar>
    </div>
</template>

<script>
import TarBar from './components/tabbar/TarBar'
import TarBarItem from './components/tabbar/TarBarItem'
export default {
    name:"MainTarBar",
    components:{
        TarBar,
      TarBarItem
    }
};
</script>
<style>
</style>