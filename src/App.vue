<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@font-face {
  font-family: Bahnschrift;
  src: url("@/assets/fonts/bahnschrift.ttf");
}

:root {
  --svgcolor: #fff;
}

#app {
  font-family: Bahnschrift, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
