import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/mine/mine'
import Setting from '@/components/mine/setting'
import MineMain from '@/components/mine/mineMain'
import aboutUs from '@/components/mine/aboutUs';
import myserver from '@/components/mine/myserver';
import checkblock from '@/components/mine/my-checkblock';
import faq from '@/components/mine/faq';
import faqdetail from '@/components/mine/faqdetail';
import accountmsg from '@/components/mine/accountmsg';
import password from '@/components/mine/updatePassword';
import electronicfence from '@/components/mine/electronicfence';

import MessageMain from '@/components/message/messagemain';
import MessageList from '@/components/message/messagelist';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/mine',
    // name: 'mine',
    component: MineMain,
    children: [{
        path: '',
        name: 'mine',
        component: Mine
      },
      {
        path: 'setting',
        name: 'setting',
        component: Setting
      },
      {
        path: 'aboutUs',
        component: aboutUs
      },
      {
        path: 'electronicfence',
        component: electronicfence
      },
      {
        path: 'myserver',
        component: myserver
      },
      {
        path: 'checkblock',
        component: checkblock
      },
      {
        path: 'faq',
        component: faq
      },
      {
        path: 'faqdetail',
        component: faqdetail
      },
      {
        path: 'accountmsg',
        component: accountmsg
      },
      {
        path: 'password',
        component: password
      }
    ]
  }, {
    path: '/message',
    // name: 'mine',
    component: MessageMain,
    children: [{
        path: 'list',
        component: MessageList
      },
      {
        path: 'setting',
        name: 'setting',
        component: Setting
      },
      {
        path: 'aboutUs',
        component: aboutUs
      },
      {
        path: 'myserver',
        component: myserver
      },
      {
        path: 'checkblock',
        component: checkblock
      },
      {
        path: 'faq',
        component: faq
      },
      {
        path: 'faqdetail',
        component: faqdetail
      },
      {
        path: 'accountmsg',
        component: accountmsg
      },
      {
        path: 'password',
        component: password
      }
    ]
  }]
})