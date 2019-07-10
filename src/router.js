import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/collect',
      name: 'collect',
      component: () => import( /* webpackChunkName: "about" */ './views/Collect')
    },
    {
      path: '/center',
      name: 'center',
      component: () => import( /* webpackChunkName: "center" */ './views/Center')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import( /* webpackChunkName: "test" */ './views/Test')
    }
  ]
})