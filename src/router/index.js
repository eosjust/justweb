import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Moragame from '@/components/Moragame'
import About from '@/components/About'
import Navigate from '@/components/Navigate'
import Setting from '@/components/Setting'
import InvestJust from '@/components/InvestJust'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigate',
      component: Navigate
    },
    {
      path: '/moragame',
      name: 'Moragame',
      component: Moragame
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/tpdemo',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/investjust',
      name: 'InvestJust',
      component: InvestJust
    }


  ]
})
