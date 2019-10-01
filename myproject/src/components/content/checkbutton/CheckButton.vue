<template>
 <div class="check-button">
     <img src="~assets/img/cart/tick.svg" v-show="!isChecked" alt="">
     <img src="~assets/img/cart/tick_on.svg" v-show="isChecked" alt="">
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   props: {
       isChecked:{
           type:Boolean,
           default(){
               return true
           }
       }
   },
   components: {

   }
 }
</script>

<style scoped>
.check-button {
    text-align: center;
}
.check-button img{
    width: 20px;height: 20px;
 }
 
</style>
