<template lang="html">
  <div>
   <p>aaa</p>
  </div>
</template>

<script>
import Bus from '../../bus';
export default {
  name: 'setting',
  data() {
    return {
      selected: 'mine',
      tabbarshow: true
    };
  },
  mounted() {
    console.log(this.$route.params.userId);
  },
  beforeRouteLeave(to, from, next) {
    Bus.$emit('mine-gonext', true);
    next();
  }
}
</script>

<style lang="css">
</style>
