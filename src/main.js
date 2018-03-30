// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from '@/store';
import {
  Tabbar,
  TabItem,
  Field,Button,Loadmore
} from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
fastclick.attach(document.body)
Vue.component(Field.name, Field)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Button.name, Button);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
