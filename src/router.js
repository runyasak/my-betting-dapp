import Vue from 'vue'
import Router from 'vue-router'
import CasinoDapp from './views/CasinoDapp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'casino-dapp',
      component: CasinoDapp
    }
  ]
})
