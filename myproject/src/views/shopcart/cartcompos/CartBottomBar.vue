<template>
  <div class="cart-bottom-bar">
    <div class="check">
      <check-button :isChecked="isSelectAll" @click.native="checkClick"/>
      <div class="checkAll">全选</div>
    </div>
    <div class="total-price">合计:<span>{{totalPrice}}</span> </div>
    <div class="clcu" @click="calcuClick">结算({{totalLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
import {mapGetters} from 'vuex'
export default {
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  computed: {
      ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.lowPrice * item.count;
        }, 0).toFixed(2);
    },
    totalLength(){
        return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
        if(this.cartList.length === 0) return false

        // 1.filter
        // return !(this.cartList.filter(item => !item.checked).length)

        // 2.find
        return !(this.cartList.find(item => !item.checked))

        // 3.遍历
        // for(let item of this.cartList){
        //     if(!item.checked){
        //         return false
        //     }
        // }
        // return true
    } 
  },
  methods: {
    // ...mapGetters(['cartList']),
      checkClick(){
          if(this.isSelectAll){
              this.cartList.forEach( item => item.checked = false)
          }else{
               this.cartList.forEach( item => item.checked = true)
          }
      },
      calcuClick(){

        this.cartList.find( item => item.checked )
        if(!(this.cartList.find( item => item.checked ))){
          this.$toast.show('我寻思你得选点东西才能结算啊')
        }else{
          this.$toast.show('没这功能，钱花不掉难受吧')
        }
      }
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  height: 40px;
  background: #fff;
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.check {
  width: 70px;
  height: 40px;
  align-items: center;
  display: flex;
}
.checkAll {
  margin: 5px;
}
.total-price{
    margin-left: 10px;
    display: flex;
    align-items: center;
    margin-left: auto;
}
.total-price span{
    font-size: 16px;
    font-weight: bold;
    color:#fe7600;
}
.clcu{
    width: 80px;
    line-height: 30px;
    font-size: 14px;
    border-radius: 15px;
    text-align: center;
    height: 30px;
    margin-left: 10px;
    color:#fff;
    background: linear-gradient(to right, #fe7600, #fb4b00);;
}
</style>
