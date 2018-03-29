<template lang="html">
    <div class="page-cell">
      <!-- <mt-cell title="消息设置" icon="more" is-link @click.native="gonext(1)">
        <i slot="icon" class="iconfont mineicon">&#xe612;</i>
      </mt-cell> -->
      <div class="">
        <mt-cell title="关于我们" icon="more" is-link @click.native="gonext(1)">
          <i slot="icon" class="iconfont mineicon">&#xe673;</i>
        </mt-cell>
        <mt-cell title="当前版本" icon="more" value="test0.01">
          <i slot="icon" class="iconfont mineicon">&#xe63e;</i>
        </mt-cell>
      </div>
    </div>
</template>

<script>
import Bus from '@/bus';

export default {
  name: 'setting',
  data() {
    return {

    };
  },
  methods: {
    gonext() {
      console.log("setting-gonext");
      this.$router.push({
        path: "/mine/aboutUs"
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
.mineicon {
  font-size:1.1rem;
}
</style>
