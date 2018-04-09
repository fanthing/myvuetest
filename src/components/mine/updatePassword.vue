<template lang="html">
  <div class="">
    <div class="textarea">
      <mt-field label="当前密码" placeholder="请输入密码" type="password" v-model="currentPassword"></mt-field>
      <mt-field label="新密码" placeholder="请设置新密码" type="password" v-model="currentPassword"></mt-field>
      <mt-field label="确认密码" placeholder="请再一次输入新密码" type="password" v-model="currentPassword"></mt-field>
      <mt-button class="my-button" size="large" type="primary" @click.native="submit">提交</mt-button>
    </div>
  </div>
</template>

<script>
import Bus from '@/bus';
import {
  Indicator
} from 'mint-ui';
export default {
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      checkPassword: ''
    }
  },
  mounted() {
    Bus.$emit('click-showHeader', true);
  },
  methods: {
    checkblock: function (event) {
      console.log(event.target.className);
      if (event.target.className != "") {
        this.$set(this.colorOptions, event.target.className.substring(7, 8) - 1, !this.colorOptions[event.target.className.substring(7, 8) - 1]);
      }
    },
    submit() {
      console.log(11)
      Indicator.open();
      setTimeout(function () {
        Indicator.close();
      }, 3000);
    }
  },
  beforeRouteLeave(to, from, next) {
    Bus.$emit('setHeader', {
      titletext: '个人资料',
      icontext: '',
      emitevent: ''
    });
    next();
  }
}
</script>

<style scoped lang="css">
label{
  margin: 0 1rem;
}
.my-button{
  margin-top: 1rem;
}
.textarea{
  margin: 0.5rem 0;
  width: auto;
  border: 5px solid rgba(0,0,0,0);
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
　-moz-box-sizing: border-box;
  width: 100%;
  font-size: 0.8rem;
}
.textarea input{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
　-moz-box-sizing: border-box;
  border: 1px solid #DCDCDC;
  border-radius: 6px;
  padding:5px;
  width: 100%;
  outline:none;
  height: 2rem;
  line-height: 2rem;
  margin:0 0 0.5rem 0;
}
textarea{
  margin:0 0 0.5rem 0;
  resize: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
　-moz-box-sizing: border-box;
  border: 1px solid #DCDCDC;
  border-radius: 6px;
  padding:5px;
  width: 100%;
  font-size: 0.8rem;
  outline:none;
}
.my-checkblock-div{
  background-color: #FFF;
  margin: 15px 5px;
  border: 1px solid #DCDCDC;
  border-radius: 6px;
  font-size: 0.8rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
  padding-bottom: 1rem;
}
.my-checkblock-div span{
  width: 22%;
  display: inline-block;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #DCDCDC;
  border-radius: 5px;
  margin: 1rem 0 0;
}
.my-checkblock-div .bgcolor1{
  background-color: #FED032
}
.my-checkblock-div .bgcolor2{
  background-color: #FEAB5D
}
.my-checkblock-div .bgcolor3{
  background-color: #83C6FB
}
.my-checkblock-div .bgcolor4{
  background-color: #FA8DB4
}
.my-checkblock-div .bgcolor5{
  background-color: #82CEE5
}
.my-checkblock-div .bgcolor6{
  background-color: #FD816D
}
.my-checkblock-div .bgcolor7{
  background-color: #75E0C9
}
.my-checkblock-div .bgcolor8{
  background-color: #9CE265
}
</style>
