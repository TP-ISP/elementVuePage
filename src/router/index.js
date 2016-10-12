import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import main from '../components/Main'
import list from '../components/List'
import hot from '../components/Hot'
import Hello from '../components/Hello'


export default new Router({
  mode: 'history',
  routers: [
    {path: '/main', component: Hello},
    {path: '/list', name: 'list', component: list},
    {path: '/hot', name: 'hot', component: hot},
    {path: '*', redirect: '/main'}
  ]
})
