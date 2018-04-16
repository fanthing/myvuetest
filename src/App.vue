<template lang="html">
<div id="app">
  <transition name="fade" mode="out-in">
  <router-view class="client-view"/>
  </transition>
  <transition name="fade" mode="out-in">
  <mt-tabbar v-model="selected" fixed v-show="tabbarshow" ref="tabbar">
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
    });
    console.log(this.$store.getters.tabbarHeight)
    // console.log("底部高度", this.$refs.tabbar.$el.offsetHeight);
    // this.$refs.clientView.$el.height = (window.outerHeight - this.$refs.tabbar.$el.offsetHeight) + "px";
    // console.log(this.$refs.clientView.$el.height)
  },
  watch: {
    selected(curVal, oldVal) {
      console.log(curVal + "---" + oldVal)
      switch (curVal) {
      case 'message':
        this.$router.push({
          path: "/message/list"
        })
        break;
      case 'mine':
        this.$router.push({
          path: "/mine"
        })
        break;
      }
    }
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
