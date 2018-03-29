// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue2-animate/dist/vue2-animate.css'
import fastclick from 'fastclick'
import store from '@/store';
import {
  Tabbar,
  TabItem,
  Field,Button
} from 'mint-ui';
fastclick.attach(document.body)
Vue.use(Vuex)
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
