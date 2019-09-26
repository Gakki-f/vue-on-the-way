<template>
<div class="goods">
    <goods-item :key="item.title" v-for="item in goods" :goodsItem="item"></goods-item>
</div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    components:{
        GoodsItem
    }

}

</script>
<style>
</style>