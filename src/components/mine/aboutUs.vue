<template lang="html">
  <div class="logobg">
    <img class="logoimg" src="/static/img/logoPIC.png" />
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    let userId = this.$route;
    console.log("userId", userId);
  }
}
</script>

<style lang="css">
.logobg {
  text-align: center;
  width: 100%;
}

.logoimg {
  margin-top: 65px;
  height: 180px;
  width: 180px;
}
</style>
