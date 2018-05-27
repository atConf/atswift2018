<template>
  <footer>
    <h1>
      @Swift CONFERENCE
    </h1>
    <h1>
      YOU DON’T  WANT TO MISS
    </h1>
    <div style="margin-top: 150px;">
      <i class="fab fa-twitter"></i>
      <i class="fab fa-weibo"></i>
      <i class="fab fa-weixin"></i>
      <i class="fab fa-slack-hash"></i>
      <i class="fab fa-facebook-f"></i>
    </div>
    <ul>
      <li><a href="#">Become a sponsor</a></li>
      <li><a href="#">Contacts</a></li>
      <li><a href="#">SwiftGG</a></li>
    </ul>
    <small>
      @2018 Based on XXX. Designed and created by @Sketchk & @DianQK
    </small>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
footer {
  background-image: linear-gradient(0deg, #ED523F 0%, #EF6757 100%);
  text-align: center;
  color: white;
  padding: 70px 0 60px;

  h1 {
    font-family: Rubik-Bold;
    font-size: 80px;
    color: #FFFFFF;
    margin: 0;
  }

  small {
    font-weight: lighter;
    font-size: 18px;
  }

  i {
    background: white;
    color: #ED523F;
    font-size: 28px;
    line-height: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 15px;
  }

  ul {
    padding: 0;
  }

  li {
    display: inline;

    a {
      color: white;
    }

    &:not(:first-child)::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: white;
      margin: 0 10px;
    }
  }
}
</style>
