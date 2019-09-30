<template>
  <nav-bar class="title">
    <div class="left" slot="left" @click="backClick">
      <img src="~assets/img/common/back.svg" alt />
    </div>
    <div slot="center" class="title-center">
      <div
        :key="item"
        v-for="(item,index) in titles"
        class="titel-item"
        :class="{active: currentIndex === index}"
        @click="itemClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title-center {
  display: flex;
  align-items: center;
}
.titel-item {
  flex: 1;
}
.left img {
  margin-top: 10px;
  margin-left: 10px;
}
.active{
  color:var(--color-tint);
}
</style>
