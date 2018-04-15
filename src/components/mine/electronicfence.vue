<template lang="html">
  <div class="electronic-fence">

    <div class="fence-item">
      <div class="first">
        <div class="icon-div">
            <i class="iconfont">&#xe688;</i>
        </div>
        <div class="span-div">
          <p class="fence-p"><span>20180415133527</span><span class="right gray little">方圆200米</span></p>
          <p class="fence-p"><span class="gray little">广东省广州市黄埔区石化路166广东省广州市黄埔区石化路166广东省广州市黄埔区石化路166</span></p>
        </div>
      </div>
      <div class="second">
          <div class="second-icon-div" @click="update(1)">
              <i class="iconfont update">&#xe6d4;</i>
              <p>编辑围栏</p>
          </div>
          <div class="second-icon-div" @click="deletefence(2)">
              <i class="iconfont delete">&#xe659;</i>
              <p>删除围栏</p>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import Bus from '@/bus';
export default {
  data() {
    return {
      electronicItems: []
    }
  },
  mounted() {
    Bus.$emit('click-showHeader', true);
    Bus.$on('createfence', (state) => {
      console.log("createfence", state);

    })
  },
  methods: {
    update(id) {
      console.log(id);
    },
    deletefence(id) {
      console.log(id);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == "mine") {
      Bus.$emit('mine-tabbarshow', true);
      Bus.$emit('mine-showHeader', false);
    }
    Bus.$off('createfence')
    next();
  }
}
</script>

<style scoped lang="css">
.fence-item{
  width: 94%;
  margin: 0.5rem auto;
  border: 1px solid rgb(212, 211, 211);
  border-top-left-radius: 0.82rem;
  border-bottom-right-radius: 0.82rem;
}
.second{
  display: flex;
  height: 3rem;
}
.second-icon-div{
  flex-shrink:1;
  width: 50%;
  text-align: center;
  padding-top: 0.4rem;
}
.second-icon-div .iconfont{
}
.update{
  color: rgb(55, 217, 70)
}
.delete{
  color:rgb(237, 14, 137)
}
.second-icon-div p{
  margin: 0;
  font-size: 0.6rem;
  line-height: 1rem;
  color: rgb(157, 157, 157);
}

.first{
  display: flex;
  border-bottom: 1px solid rgb(232, 232, 232);
}
.icon-div{
  margin:0 0.5rem;
  height: 3rem;
  text-align: center;
  vertical-align: top;
}
.first .iconfont{
  display:inline-block;
  border-radius: 1rem;
  background-color: #26A2FF;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1.2rem;
  color: #FFF;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.span-div{
  display: inline-block;
}
.fence-p{
  font-size: 0.7rem;
  margin: 0.3rem 0;
  width: 12rem;
  overflow: hidden;
  text-overflow:ellipsis;
  position: relative;
}
.gray{
  color:rgb(153, 157, 158)
}
.little{
  font-size: 0.6rem;
  white-space:nowrap;
}
.right{
  position: absolute;
  right: 0.2rem;
}
</style>
