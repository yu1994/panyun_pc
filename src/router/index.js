import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/home'
import loan from '@/view/loan/loan'
import privacy from '@/view/privacy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/loan',
      name: 'loan',
      component: loan
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy
      //component: () => import(/* webpackChunkName: "about" */ '../view/privacy.vue')
    },
    {
      path: '/product',
      name: 'product',
      redirect: { name: 'home' }
    },
    {
      path: '/question',
      name: 'question',
      redirect: { name: 'home' }
    }
  ]
})
