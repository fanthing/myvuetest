<template lang="html">
  <div>

      <Myheader :titletext="titletext" :icontext="icontext" :emitevent="emitevent">
      </Myheader>
  
    <transition name="component-fade" mode="out-in">
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
    Bus.$on('231', (state) => {
      console.log(state)
    })
  }
}
</script>

<style lang="css">

</style>
