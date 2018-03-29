<template lang="html">
<div class="faqdetail">
  <p class="question">1、设备电话能打通平台显示离线？</p>
  <p class="answer">答：1.查看设备GPRS是否连接。</p>
  <p class="answer">2.查看设备内手机卡GPRS流量是否有开通。</p>

</div>
</template>

<script>
export default {
  name: "faqdetail",
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="css">
.question{
  font-size: 0.8rem;
  font-weight: 700;
  color: #000;
  margin: 1rem 0.5rem;
}
.answer{
  font-size: 0.7rem;
  color: #737373;
  margin: 0.5rem 0.5rem;
}
</style>
