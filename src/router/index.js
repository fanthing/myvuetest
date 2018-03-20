import Vue from 'vue'
import Router from 'vue-router'
import mine from '@/components/mine/mine'
import setting from '@/components/mine/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      children: [
        { path: '', component: UserHome },
      ]
    }
  ]
})
