import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/mine/mine'
import Setting from '@/components/mine/setting'
import MineMain from '@/components/mine/mineMain'
import aboutUs from '@/components/mine/aboutUs';
import myserver from '@/components/mine/myserver';
import checkblock from '@/components/mine/my-checkblock';
import faq from '@/components/mine/faq';

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
        { path: 'aboutUs', component: aboutUs },
        { path: 'myserver', component: myserver },
        { path: 'checkblock', component: checkblock },
        { path: 'faq', component: faq }

      ]
    }
  ]
})
