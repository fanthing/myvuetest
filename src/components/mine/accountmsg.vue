<template lang="html">
      <!-- <mt-cell title="消息设置" icon="more" is-link @click.native="gonext(1)">
        <i slot="icon" class="iconfont mineicon">&#xe612;</i>
      </mt-cell> -->
      <div class="accountmsg-div">
        <mt-cell title="账号" value="aaa">
        </mt-cell>
        <mt-cell title="手机号码" value="13929509577">
        </mt-cell>
        <mt-cell title="密码" is-link @click.native="gonext()">
        </mt-cell>
        <mt-button class="my-button" @click.native="logout">退出登陆</mt-button>
      </div>
</template>

<script>
import Bus from '@/bus';
import {
  Indicator
} from 'mint-ui';
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
        path: "/mine/password"
      })
      Bus.$emit('setHeader', {
        titletext: '修改密码',
        icontext: '',
        emitevent: ''
      });
    },
    logout() {
      console.log(11)
      Indicator.open();
      setTimeout(function () {
        Indicator.close();
      }, 3000);
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
.accountmsg-div .my-button{
  width: 90%;
  margin-left: 5%;
  margin-top:2rem;
  background-color: #9a968f;
}
</style>
