<template>
  <div id="app">
    <NavgationBar />
    <Home />
  </div>
</template>

<script>
import NavgationBar from './components/NavgationBar.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    NavgationBar,
    Home
  }
}
</script>

<style>
#app {
  font-family: 'PingFangSC', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 70px;
}

body {
  padding: 0;
  margin: 0;
}
</style>
