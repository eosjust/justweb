import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Moragame from '@/components/Moragame'
import About from '@/components/About'
import Navigate from '@/components/Navigate'
import Setting from '@/components/Setting'
import InvestJust from '@/components/InvestJust'
import EosFarm from '@/components/EosFarm'
import Treasure from '@/components/Treasure'
import AwardCraft from '@/components/AwardCraft'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: InvestJust
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
    },
    {
      path: '/eosfarm',
      name: 'EosFarm',
      component: AwardCraft
    },
    {
      path: '/treasure',
      name: 'Treasure',
      component: AwardCraft
    },
    {
      path: '/awardcraft',
      name: 'AwardCraft',
      component: AwardCraft
    }


  ]
})
