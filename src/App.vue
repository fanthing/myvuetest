<template>
<div id="app">
  <router-view/>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="location">
      <i class="iconfont fa-angle-right">&#xe618;</i> 定位
    </mt-tab-item>
    <mt-tab-item id="list">
      <i class="iconfont fa-angle-right">&#xe69e;</i> 列表
    </mt-tab-item>
    <mt-tab-item id="message">
      <i class="iconfont fa-angle-right">&#xe606;</i> 消息
    </mt-tab-item>
    <mt-tab-item id="mine">
      <i class="iconfont fa-angle-right">&#xe60c;</i> 我的
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
import Vue from 'vue'
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
      selected: 'mine'
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.iconfont {
  font-size: 22px;
  margin-bottom: 5px;
  display: block;
}

.mint-tabbar>.mint-tab-item.is-selected {
  color: #49B144;
}
</style>
