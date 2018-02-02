<template>
  <div>
    <div class="circle">
      <div id="circle_bot"></div>
      <div id="circle_mid"></div>
      <div id="circle_top"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'circle'
}
</script>

<style scoped>
  #circle_bot {
    background-color: #E09;
    width: 150px;
    height: 150px;
    margin: 0;
    border-radius: 50%;
  }
  #circle_mid {
    background-color: #EAA;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: -125px 0 0 25px;
  }
  #circle_top {
    background-color: #ED9;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: -75px 0 0 50px;
  }
</style>
