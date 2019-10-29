import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Stringing from '@/components/Stringing'
import Index from '@/components/Index'
import Hello from '@/components/Hello'
import Popular_gift from '@/components/Popular_gift'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Gift from '@/components/Gift'
import Details from '@/components/Details'
import Shopping_Cart from '@/components/Shopping_Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Hello},
    {path:'/header',component:Header},
    {path:'/footer',component:Footer},
    {path:'/stringing',component:Stringing},
    {path:'/index',component:Index},
    {path:'/popular',component:Popular_gift},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/gift',component:Gift},
    {path:'/details/:pid',component:Details,props:true},
    {path:'/shopping',component:Shopping_Cart}
  ]
})
