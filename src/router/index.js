import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const ShopCart = () => import('../views/shopcart/ShopCart')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router