<template>
    <div class="tab-control">
        <div class="tab-c-item" 
        v-for="(item,index) in titles" 
        :key="item"
        :class="{active:currentIndex === index}"
        @click="tabItemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
        tabItemClick(index){
            this.currentIndex = index
            this.$emit('tabClick',index)
        }
    },

}

</script>
<style scoped>
.tab-control{
    display: flex;
    background: #fff;
    
}
.tab-c-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.tab-c-item span{
    padding: 5px;
}
.active{
    color:var(--color-high-text);
}
.active span{
    border-bottom: 3px solid var(--color-high-text);
}
</style>