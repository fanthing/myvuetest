<template lang="html">
<div id="app">
  <transition name="component-fade" mode="out-in">
  <router-view/>
  </transition>
  <mt-tabbar v-model="selected" fixed v-show="tabbarshow">
    <mt-tab-item id="location">
      <i class="iconfont tabbar-icon">&#xe618;</i> 定位
    </mt-tab-item>
    <mt-tab-item id="list">
      <i class="iconfont tabbar-icon">&#xe69e;</i> 列表
    </mt-tab-item>
    <mt-tab-item id="message">
      <i class="iconfont tabbar-icon">&#xe606;</i> 消息
    </mt-tab-item>
    <mt-tab-item id="mine">
      <i class="iconfont tabbar-icon">&#xe60c;</i> 我的
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
import Vue from 'vue';
import Bus from './bus';

import {
  Tabbar,
  TabItem
} from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  name: 'App',
  data() {
    return {
      selected: 'mine',
      tabbarshow: true
    };
  },
  mounted() {
    Bus.$on('mine-gonext', (state) => {
      this.tabbarshow = state;
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.tabbar-icon {
  font-size: 22px;
  margin-bottom: 5px;
  display: block;
}

.mint-tabbar>.mint-tab-item.is-selected {
  color: #49B144;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter,
.component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */

  {
  opacity: 0;
}
</style>
