<template lang="html">
<div class="hello">
  <div class="accountbg">
    <img @click="mine" class="accountimg" :src="minesrc" />
  </div>
  <div class="page-cell">
    <mt-cell title="标题文字" icon="more" is-link>
      <i slot="icon" class="iconfont">&#xe60c;</i>
    </mt-cell>
    <mt-cell title="路由跳转" label="跳转到 /#/toast" is-link @click.native="gonext(1)"></mt-cell>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import Bus from '../../bus';
import {
  Toast,
  Cell
} from 'mint-ui';

Vue.component(Cell.name, Cell);


export default {
  name: 'mine',
  data() {
    return {
      minesrc: 'http://127.0.0.1:8020/gym-web/img/gym/mine.png'
    }
  },
  methods: {
    toast: function() {
      Toast({
        message: this.msg,
        position: 'bottom',
        duration: 2000
      });
    },
    mine: function() {
      Toast({
        message: this.msg,
        position: 'bottom',
        duration: 2000
      });
    },
    gonext: function(page) {
      this.$router.push({
        name: "setting",
        params: {
          userId: 123
        }
      })
      Bus.$emit('mine-gonext', false);
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

a {
  color: #42b983;
}
</style>
