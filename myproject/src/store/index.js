import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 安装
Vue.use(Vuex)

const state = {
  cartList:JSON.parse(localStorage.getItem('cartList')) || [] 
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})

//监听每次调用mutations的时候,都会进这个方法，然后我们可以做一些自己想做的处理
store.subscribe((mutations,state)=>{
  localStorage.setItem('cartList',JSON.stringify(state.cartList))
})
export default store
