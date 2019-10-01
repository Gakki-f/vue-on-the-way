import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {

  // 1.创建组件构造器
  const toastConstrustor = Vue.extend(Toast)

  // 2.new的方式根据组件构造器，创造一个组件对象
  const toast = new toastConstrustor()

  // 3.将组件对象手动挂载到某一元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  // 5.添加到原型
  Vue.prototype.$toast = toast
}


export default obj
