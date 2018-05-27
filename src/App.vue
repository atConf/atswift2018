<template>
  <div id="app">
    <NavgationBar />
    <Home />
    <Talkers />
    <Tickets />
  </div>
</template>

<script>
import NavgationBar from './components/NavgationBar.vue'
import Home from './components/Home.vue'
import Talkers from './components/Talkers'
import Tickets from './components/Tickets'

export default {
  name: 'app',
  components: {
    NavgationBar,
    Home,
    Talkers,
    Tickets
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

a {
  text-decoration: none;
}

* {
  -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
        box-sizing: border-box;
}
</style>
