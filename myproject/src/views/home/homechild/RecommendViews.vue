<template>
    <div class="recommend">
        <div class="recommend-item"  v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image" alt />
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecommendViews",
    props: {
        recommends: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>
<style>
.recommend{
    display: flex;
    padding: 10px 0 20px;
    text-align: center;
    border-bottom: 7px solid #dcdcdc;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 8px;
}
</style>