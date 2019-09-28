import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)

const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const Shopcart = () => import('views/shopcart/shopcart')
const Profile = () => import('views/profile/profile')
const Detail = () => import('views/detail/Detail')

const routes = [
    {
        path:'',
        redirect: '/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/shopcart',
        component:Shopcart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/detail/:id',
        component:Detail
    },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
