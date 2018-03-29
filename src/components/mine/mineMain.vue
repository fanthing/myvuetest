<template lang="html">
  <div>

      <Myheader :titletext="titletext" :icontext="icontext" :emitevent="emitevent">
      </Myheader>

    <transition class="mine-box" name="fade" mode="out-in">
      <router-view>
      </router-view>
    </transition>
  </div>
</template>

<script>
import Bus from '@/bus';
import Myheader from '@/components/header';
export default {
  data() {
    return {
      gobackshow: false,
      titletext: '设置',
      icontext: '&#xe69e;',
      emitevent: '231'
    }
  },
  components: {
    Myheader
  },
  mounted() {
    Bus.$on('setHeader', (state) => {
      console.log("setHeader", state);
      this.titletext = state.titletext
      this.icontext = state.icontext
      this.emitevent = state.emitevent
    })
  }
}
</script>

<style scoped lang="css">
.mine-box{
  /* overflow: hidden; */
}
</style>
