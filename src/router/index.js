import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/cart',
    name:'cartcnt',
    component: () => import('../views/cartcnt/cartcnt.vue')
  },
  {
    path:'/notification',
    name:'notificationcnt',
    component: () => import('../views/notificationcnt/notificationcnt.vue')
  },
  {
    path:'/phonecall',
    name:'phonecallcnt',
    component: () => import('../views/phonecallcnt/phonecallcnt.vue')
  },
  {
    path:'/views',
    name:'viewcnt',
    component: () => import('../views/viewscnt/viewscnt.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router