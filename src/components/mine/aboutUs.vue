<template lang="html">
  <div class="logobg">
    <img class="logoimg" src="/static/img/logoPIC.png" />
  </div>
</template>

<script>
import Bus from '@/bus';
export default {
  name: "aboutUs",
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    let userId = this.$route;
    console.log("userId", userId);
  },
  beforeRouteLeave(to, from, next) {
    Bus.$emit('setHeader', {
      titletext: '设置',
      icontext: '&#xe69e;',
      emitevent: '231'
    });
    next();
  }
}
</script>

<style lang="css">
.logobg {
  text-align: center;
  width: 100%;
}

.logoimg {
  margin-top: 65px;
  height: 180px;
  width: 180px;
}
</style>
