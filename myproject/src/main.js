import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'


Vue.use(toast)
Vue.use(LazyLoad,{
  loading:require('./assets/img/common/placeholder.jpg')
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
