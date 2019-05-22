import Vue from 'vue'
import Router from 'vue-router'
import loanLogin from '@/view/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: loanLogin,
      meta:{sign:'main'}
    },
    {
      path:'*',
      redirect:'/loanLogin'
    }
  ]
})
