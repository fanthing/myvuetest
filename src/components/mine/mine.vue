<template lang="html">
<div class="mine-div" :style="tabbarHeight">
  <div class="accountbg">
    <img @click="mine" class="accountimg" :src="minesrc" />
  </div>
  <div class="page-cell">
    <mt-cell title="我的服务商" icon="more" is-link @click.native="gonext(1)">
      <i slot="icon" class="iconfont mineicon">&#xe679;</i>
    </mt-cell>
    <mt-cell title="围栏管理" icon="more" is-link @click.native="gonext(2)">
      <i slot="icon" class="iconfont mineicon">&#xe610;</i>
    </mt-cell>
    <mt-cell title="意见反馈" icon="more" is-link @click.native="gonext(3)">
      <i slot="icon" class="iconfont mineicon">&#xe605;</i>
    </mt-cell>
    <mt-cell title="常见问题" icon="more" is-link @click.native="gonext(4)">
      <i slot="icon" class="iconfont mineicon">&#xe60b;</i>
    </mt-cell>
    <mt-cell title="设置" icon="more" is-link @click.native="gonext(5)">
      <i slot="icon" class="iconfont mineicon">&#xe622;</i>
    </mt-cell>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import Bus from '@/bus';
import {
  Toast,
  Cell
} from 'mint-ui';

Vue.component(Cell.name, Cell);


export default {
  name: 'mine',
  data() {
    return {
      minesrc: '/static/img/logoPIC.png',
      tabbarHeight: {
        'padding-bottom': this.$store.getters.tabbarHeight + 'px'
      }
      // minesrc: 'http://172.16.1.137:8020/gym-web/img/gym/mine.png'
    }
  },
  methods: {
    toast: function () {
      Toast({
        message: this.msg,
        position: 'bottom',
        duration: 2000
      });
    },
    mine: function () {
      this.$router.push({
        path: "/mine/accountmsg"
      })
      Bus.$emit('setHeader', {
        titletext: '个人资料',
        icontext: '',
        emitevent: ''
      });
      Bus.$emit('mine-tabbarshow', false);
      Bus.$emit('mine-showHeader', true);
    },
    gonext: function (page) {
      console.log("mine-tabbarshow");
      switch (page) {
      case 1:
        this.$router.push({
          path: "/mine/myserver"
        })
        Bus.$emit('setHeader', {
          titletext: '我的服务商',
          icontext: '',
          emitevent: ''
        });
        break;
      case 2:
        this.$router.push({
          path: "/mine/electronicfence"
        })
        Bus.$emit('setHeader', {
          titletext: '围栏管理',
          icontext: '&#xe752;',
          emitevent: 'createfence'
        });
        break;
      case 3:
        this.$router.push({
          path: "/mine/checkblock",
          query: {
            userId: 123
          }
        })
        Bus.$emit('setHeader', {
          titletext: '意见反馈',
          icontext: '',
          emitevent: ''
        });
        break;
      case 4:
        this.$router.push({
          path: "/mine/faq"
        })
        Bus.$emit('setHeader', {
          titletext: '常见问题',
          icontext: '',
          emitevent: ''
        });
        break;
      case 5:
        this.$router.push({
          name: "setting",
          params: {
            userId: 123
          }
        })
        Bus.$emit('setHeader', {
          titletext: '设置',
          icontext: '',
          emitevent: ''
        });
        break;
      }
      Bus.$emit('mine-tabbarshow', false);
      Bus.$emit('mine-showHeader', true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.accountbg {
  text-align: center;
  width: 100%;
  height: 220px;
  background-image: url(/static/img/accountBg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.accountimg {
  margin-top: 65px;
  height: 90px;
  width: 90px;
}

.mineicon {
  font-size: 1.1rem;
}
</style>
