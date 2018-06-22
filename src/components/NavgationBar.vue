<template>
  <div class="navgation-bar">
    <Logo style="margin-left: 20px; height: 58px; width: 58px;"/>
    <div class="menus">
      <a v-for="menu in menus" class="menu" :key="menu.name" :href="menu.src">
        {{ menu.name }}
      </a>
      <button type="button" name="button" class="register">
        购买门票
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
        { name: '简介', src: '#intro' },
        { name: '讲师', src: '#talker' },
        { name: '议程', src: '#schedule' },
        { name: '赞助商', src: '#sponsor' },
        { name: '地点', src: '#venue' }
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100vw;
  z-index: 1;

  .menus {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    align-items: center;

    .menu {
      padding: 0 10px;
      color: #4C4C4C;

      @media (max-width: 800px) {
        & {
          display: none;
        }
      }
    }

    .register {
      background: #ED523F;
      border: 2px solid #ED523F;
      border-radius: 4px;
      color: #F0F0F0;
      font-weight: 600;
      font-size: 24px;
      margin-left: 10px;
      padding: 9px 20px;
    }
  }
}
</style>
