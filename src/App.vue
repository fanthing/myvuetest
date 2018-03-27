<template lang="html">
<div id="app">
  <transition name="fade" mode="out-in">
  <router-view/>
  </transition>
  <transition name="fade" mode="out-in">
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
    </transition>
</div>
</template>

<script>
import Bus from '@/bus';

export default {
  name: 'App',
  data() {
    return {
      selected: 'mine',
      tabbarshow: true
    };
  },
  mounted() {
    Bus.$on('mine-tabbarshow', (state) => {
      console.log("App.vue");
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
</style>
