import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/card',
    name:'card',
    component:()=>import('../views/CardView.vue')
  },
  {
    path:'/visitorRecord',
    name:'visitorRecord',
    component:()=>import('../views/VisitorRecord.vue')
  }, 
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/login.vue')
  },
  {
    path: '/sysInfo',
    name: 'sysInfo',
    component: ()=>import('../views/server/index.vue')
  },
  {
    path: '/tool',
    name: 'tool',
    component: ()=>import('../views/tools/index.vue')
  },
  {
    path: '/prop2yml',
    name: 'prop2yml',
    component: ()=>import('../views/tools/prop2yml.vue')
  },
  {
    path: '/timetool',
    name: 'timetool',
    component: ()=>import('../views/tools/timetool.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import( '../views/error/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
