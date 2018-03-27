<template lang="html">
  <div class="page-cell">
  <div class="div-cell">
    <span>服务商:</span><span>admin</span>
  </div>
  <div class="div-cell">
    <span>联系人:</span><span>admin</span>
  </div>
  <div class="div-cell cell-last">
    <span>联系电话:</span><span>020-66666666</span>
  </div>

  </div>
</template>

<script>
import Bus from '@/bus';
export default {
  mounted() {
    Bus.$emit('click-showHeader', true);
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

<style scoped lang="css">
.page-cell{
   background-color: #FFF;
   margin: 15px 10px;
   border: 1px solid #DCDCDC;
   border-radius: 6px;
   font-size: 0.8rem;
}
.div-cell{
   background-color: rgba(245,245,245,0);
   height: 70px;
   line-height: 70px;
}
.div-cell:not(.cell-last){
  border-bottom:  1px solid #DCDCDC;
}
.div-cell>span:nth-of-type(1){
  margin-left:10px
}
</style>
