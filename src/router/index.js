import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

export const constRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true //导航菜单忽略该项
  },
  {
    path:'/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: "首页",//导航栏单项标题
      icon: "qq"    //导航菜单项图标
    },
    children: [
       {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
          meta: {
            title: "Home",//导航栏单项标题
            icon: "qq"    //导航菜单项图标
          }
        },
        {
          path: 'mua/:id',
          name: 'mua',
          component: () => import('@/views/Home.vue'),
          meta: {
            title: "Mua",//导航栏单项标题
            icon: "weixin"    //导航菜单项图标
          }
        },
    ]
  }
]

//权限路由
export const asyncRoutes = [
  {
      path:"/about",
      component: Layout,
      redirect: "/about/index",
      children: [
        {
          path: 'index',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
          meta: {
            title: "About",
            icon: "qq",
            roles: ['admin','editor']
          }
        }
      ]
        
  }
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export default router
