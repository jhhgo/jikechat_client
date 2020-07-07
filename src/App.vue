<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};

let html = document.querySelector("html");
html.style.fontSize = document.documentElement.clientWidth / 16 + "px";
</script>

<style lang="less">
  #app {
    height: 100%;
  }
</style>
