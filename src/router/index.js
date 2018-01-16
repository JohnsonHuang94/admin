import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Baimu from '@/components/Baimu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: 'index',
      name: 'Index',
      component: Index
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/baimu',
      name: 'Baimu',
      component: Baimu
    }
  ]
})
