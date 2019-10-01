import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 安装
Vue.use(Vuex)

const state = {
  cartList: [] // cartList:[商品1，商品2]数组来存放购物车一个个对象 
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})

export default store
