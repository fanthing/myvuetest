import Vue from 'vue'
import Router from 'vue-router'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mine',
      component: mine
    }
  ]
})
