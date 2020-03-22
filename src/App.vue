<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" alt="logo">
      <menuMain></menuMain>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <site-footer></site-footer>
  </div>
</template>

<script>


import menuMain from "@/components/menuMain";
import SiteFooter from "@/layouts/siteFooter";

export default {
  name: 'App',
  components: {
    SiteFooter,
    menuMain
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 5px 50px;
}
img {
  width: 80px;
  height: 80px;
}

@font-face{
  font-family: Roboto;
  src: url("assets/fonts/Roboto-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Roboto Bold";
  src: url("assets/fonts/Roboto-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "Roboto Light";
  src: url("assets/fonts/Roboto-Light.ttf") format("truetype");
}

</style>
