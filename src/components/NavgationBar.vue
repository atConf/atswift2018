<template>
  <div class="navgation-bar">
    <Logo style="margin-left: 20px;"/>
    <div class="menus">
      <div v-for="menu in menus" class="menu" :key="menu.name">
        {{ menu.name }}
      </div>
      <button type="button" name="button" class="register">
        Register
      </button>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'

export default {

  components: {
    Logo
  },

  data () {
    return {
      menus: [
        { name: 'Intro' },
        { name: 'Talker' },
        { name: 'Schedule' },
        { name: 'Sponsor' },
        { name: 'Venue' }
      ]
    }
  }

}
</script>

<style lang="less" scoped>
.navgation-bar {
  background: #FFFFFF;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.50);
  font-weight: bold;
  font-size: 24px;
  color: #4C4C4C;
  text-align: center;
  position: fixed;
  top: 0;
  top: constant(safe-area-inset-top);
  top: env(safe-area-inset-top);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100vw;

  .menus {
    display: flex;
    flex-direction: row;
    margin-right: 20px;

    .menu {
      padding: 0 10px;
    }

    .register {
      background: #ED523F;
      border: 2px solid #ED523F;
      border-radius: 4px;
      color: #F0F0F0;
      font-weight: bold;
      font-size: 24px;
    }
  }
}
</style>
