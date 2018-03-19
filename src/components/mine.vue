<template>
<div class="hello">
  <div class="accountbg">
    <img @click="mine" class="accountimg" :src="minesrc" />
  </div>
  <h1>{{ msg }}</h1>
  <h2 @click='toast'>Essential Links</h2>

</div>
</template>

<script>
import {
  Toast
} from 'mint-ui';

export default {
  name: 'mine',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
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
  width: 100%;
  height: 220px;
  background-image: url(../assets/accountBg.png);
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
