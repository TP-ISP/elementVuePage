import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import main from 'components/Main'
import list from 'components/List'
import hot from 'components/Hot'


export default new Router({
  mode: 'history',
  routers: [
    {path: '/main', name: 'main', component: main},
    {path: '/list', name: 'list', component: list},
    {path: '/hot', name: 'hot', component: hot},
    {path: '*', redirect: '/main'}
  ]
})
