<template lang="html">
  <div class="">
    <mt-cell  title="1、GT200常见问题" is-link  @click.native="gonext(1)">
  </mt-cell>
  </div>
</template>

<script>
import Bus from '@/bus';

export default {
  name: 'faq',
  data() {
    return {

    };
  },
  methods: {
    gonext() {
      console.log("setting-gonext");
      this.$router.push({
        path: "aboutUs"
      })
      Bus.$emit('setHeader', {
        titletext: '关于我们',
        icontext: '',
        emitevent: ''
      });
    }
  },
  beforeCreate() {

  },
  mounted() {
    Bus.$emit('click-showHeader', true);
    // console.log(this.$route.params.userId);
    // console.log("appid=" + api.appId);
    // const userInfo = $api.getStorage('userinfo');
    // console.log("userInfo=" + JSON.stringify(userInfo));
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == "mine") {
      Bus.$emit('mine-tabbarshow', true);
      Bus.$emit('mine-showHeader', false);
    }
    next();
  }
}
</script>

<style lang="css">
</style>
