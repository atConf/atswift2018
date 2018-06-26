<template>
  <div id="app">
    <NavgationBar />
    <Home />
    <Talkers />
    <Tickets />
    <Sponsor />
    <Venue />
    <Footer />
  </div>
</template>

<script>
import NavgationBar from './components/NavgationBar.vue'
import Home from './components/Home.vue'
import Talkers from './components/Talkers'
import Tickets from './components/Tickets'
import Sponsor from './components/Sponsor'
import Venue from './components/Venue'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    NavgationBar,
    Home,
    Talkers,
    Tickets,
    Sponsor,
    Venue,
    Footer
  }
}
</script>

<style lang="less">
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  src: local('Rubik Bold'), local('Rubik-Bold'), url(./assets/iJWHBXyIfDnIV7F6iGmd8WU.ttf) format('truetype');
}

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
a:visited {
  color: inherit;
}

* {
  -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
        box-sizing: border-box;
}

.primary {
  background: #ED523F;
  border-radius: 4px;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: 1.09px;
  text-align: center;
  padding: 20px 60px;

  @media (max-width: 800px) {
    & {
      font-size: 20px;
      padding: 15px 20px;
    }
  }

  &:visited {
    color: white;
  }
}
</style>
