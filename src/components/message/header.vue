<template lang="html">
  <header >
    <div class="header-div" style="height:20px;"></div>
    <transition name="fade" mode="out-in">
      <div class="page-back" v-show="gobackshow" >
        <a class="left" @click="goBack()"><i class="mintui mintui-back"></i></a>
        <i class="iconfont search-icon">&#xe607;</i>
        <input type="text" class="search-input" name="" value="" placeholder="请输入IMEI号或者设备名称">
        <a class="right" @click="sendEmit()"><i class="iconfont tabbar-icon" v-html='icontext'></i></a>
      </div>
    </transition>
  </header>
</template>

<script>
import Bus from '@/bus';
export default {
  data() {
    return {
      gobackshow: true,
      canuseClick: true //true表示当前可用
    }
  },
  props: ['titletext', 'icontext', 'emitevent', 'emitevents'],
  methods: {
    goBack: function () {
      if (this.canuseClick) {
        this.canuseClick = false;
        this.$router.go(-1);
      }
    },
    sendEmit: function () {
      if (this.emitevent != "") {
        Bus.$emit(this.emitevent, 1);
      }
    }
  },
  mounted() {
    Bus.$on('mine-showHeader', (state) => {
      if (state == true) {
        setTimeout(() => {
          this.gobackshow = state;
        }, 300);
      } else {
        this.gobackshow = state;
      }

    })
    Bus.$on('click-showHeader', (state) => {
      this.canuseClick = state;
    })
  }
}
</script>

<style scoped lang="css">
header{
	width: 100%;
	text-align: center;
	color: #fff;
	font-size: 20px;
}
.header-div{
  background-color: #424242;
}
header .search-input{
  width: 60%;
  height: 25px;
  border: 1px solid #DCDCDC;
  border-radius: 13px;
  outline:none;
  color: #adadad;
  font-size: 0.5rem;
  padding-left: 28px;
  line-height: 25px;
}
.search-icon{
  position: absolute;
  left:17%;
  color: #DCDCDC;
  font-size: 1rem;
  height: 25px;
  line-height: 25px;
  top: 31px;
  vertical-align: bottom;
}
header a{
  position: absolute;
  width: 35px;
  height: 40px;
  line-height: 42px;
  text-align: center;
  font-size: 14px;
}
header .left{
  left:0;
}
header .right{
  right:10px;
  top:20px;
}
header .page-back{
  	width: 100%;
    height: 42px;
    line-height: 42px;
    background-color: #424242;
}
</style>
