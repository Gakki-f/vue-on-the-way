import {
  ADD_COUNT,
  ADD_ITEM,
  REMOVE_ITEM
} from './mutations-types'

export default {
  // 商品增加一个
  [ADD_COUNT](state, payload) {
    payload.count++
  },
  // 添加到购物车
  [ADD_ITEM](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },

  delCarPanelData(state, id) {
    state.cartList.forEach((product, index) => {
      if (product.id === id) {
        state.cartList.splice(index, 1)
        return
      }
    })
  }
}
