<template lang="html">
<div class="mine-div">
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
      minesrc: '/static/img/logoPIC.png'
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
      Toast({
        message: this.msg,
        position: 'bottom',
        duration: 2000
      });
    },
    gonext: function (page) {
      console.log("mine-gonext");
      switch (page) {
      case 5:
        this.$router.push({
          name: "setting",
          params: {
            userId: 123
          }
        })
        break;
      }
      Bus.$emit('mine-gonext', false);
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
  font-size: 22px;
}
</style>
