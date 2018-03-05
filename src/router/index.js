// Core
import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main/main'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    }
  ]
})

export default router
