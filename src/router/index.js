import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/mine/mine'
import Setting from '@/components/mine/setting'
import MineMain from '@/components/mine/mineMain'
import aboutUs from '@/components/mine/aboutUs';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mine',
      // name: 'mine',
      component: MineMain,
      children: [
        { path: '',name: 'mine', component: Mine },
        { path: 'setting',name: 'setting', component: Setting },
        { path: 'aboutUs', component: aboutUs }
      ]
    }
  ]
})
