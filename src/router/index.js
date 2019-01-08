import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Basket from '@/components/Basket'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    }
  ]
})
