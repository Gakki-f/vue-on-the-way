<template>
    <div>
        <a href="goodsItem.link">
            <img src="goodsItem.show.img" alt />
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="price">{{goodsItem.cfav}}</span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {};
            }
        }
    }
};
</script>
<style>
</style>