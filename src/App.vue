<template>
  <v-app id="app">
    <navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar }
}
</script>

<style>
* {
  box-sizing: border-box !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .v-application--wrap {
  width: 100%;
  align-items: center;
}
</style>
