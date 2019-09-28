<template>
 <div id="detail">
   <detail-title />
   <detail-swiper :top-images='topImages'/>
   <detail-info :goods="goods"/>
 </div>
</template>

<script>
import DetailTitle from './childcompos/DetailTitle'
import DetailSwiper from './childcompos/DetailSwiper'
import DetailInfo from './childcompos/DetailInfo'

import { getDetail,Goods } from 'network/detail'
 export default {
   name:'Detail',
   data () {
     return {
       id:null,
       topImages:[],
       goods:{}
     }
   },
   components: {
     DetailTitle,
     DetailSwiper,
     DetailInfo
   },
   created () {
     this.id = this.$route.params.id
      getDetail(this.id).then(res=>{
          console.log(res);
          const data = res.result
          this.topImages = data.itemInfo.topImages

          // 1.获取商品信息
          this.goods = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
          console.log(this.goods);
      })
      
   }
 }
</script>

<style scoped>

 
</style>
