<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <span class="con">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="con">店铺</span>
            </div>
            <div>
                <i class="icon select"></i>
                <span class="con">收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="shopcart">加入购物车</div>
            <div class="buy">立即购买</div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
<style scoped>
.bottom-bar {
    height: 49px;
    background: #fff;
    position: relative;
    /* bottom: 49px; */
    display: flex;
    text-align: center;
    align-items: center;
}
.bar-item {
    flex: 1;
    display: flex;
}
.bar-item > div {
    flex: 1;
}
.bar-left .con {
    font-size: 12px;
}
.bar-item .icon {
    display: block;
    width: 18px;
    height: 18px;
    margin: 5px auto 0;
    background: url(~assets/img/detail/detail_bottom.png) no-repeat center;
    background-size: 18px;
}
.bar-left .service {
    background-position: 0 -43px;
}
.bar-left .shop {
    background-position: 0 -80px;
}
.bar-left .select {
    background-position: 0 1px;
}
.bar-right {
    font-size: 14px;
    color: #fff;
    padding-right: 5px;
}
.bar-right .shopcart {
    background: linear-gradient(to right, #feca04, #ff9503);
    color: #fff;
    height: 30px;
    border-radius: 15px 0 0 15px;
    
    line-height: 30px;
}
.bar-right .buy {
    background: #f69;
    background: linear-gradient(to right, #fe7600, #fb4b00);
    height: 30px;
    border-radius: 0 15px 15px 0;
    line-height: 30px;
}
/* .sport-ball{
    position: absolute;
    left: 225px;
    bottom: 20px;
} */
</style>