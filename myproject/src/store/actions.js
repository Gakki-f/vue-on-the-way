import {
  ADD_COUNT,
  ADD_ITEM,
  REMOVE_ITEM
} from './mutations-types'
import {
  resolve
} from 'url';

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 查找之前数组是否存在此值
      let oldProduct = context.state.cartList.find(item => item.id === payload.id)

      // 判断
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve('宝贝加一哦')
      } else {
        payload.count = 1
        context.commit(ADD_ITEM, payload)
        resolve('宝贝已经添加到购物车')
      }
    })
     //保存到本地存储
    //  localStorage.setItem('cartList', JSON.stringify(state.cartList));
  },
  // 删除商品
  // removeCartItem(context, payload){
  //   context.commit(REMOVE_ITEM,payload)
  // }
}
