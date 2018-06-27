<template>
  <div class="home" id="intro">
    <div class="title">@Swift</div>
    <div class="sub-title">
      <span>CON</span>
      <Logo class="logo" />
      <span>2018</span>
    </div>
    <div class="comment">
      一场面向 Swift 开发者的知识盛宴
    </div>
    <div class="location">
      <span class="date">09月15日</span>
      <span>香格里拉酒店 • 北京 中国</span>
    </div>
    <div class="carousel">
      <RegisterButton />
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import RegisterButton from './RegisterButton'

export default {

  components: {
    Logo,
    RegisterButton
  }

}
</script>

<style lang="less" scoped>
.home {
  padding-top: 50px;

  .title {
    font-family: Rubik;
    font-size: 120px;
    color: #ED523F;
    text-align: center;

    @media (max-width: 800px) {
      & {
        font-size: 70px;
      }
    }
  }

  .sub-title {
    font-family: Rubik;
    font-size: 90px;
    color: #ED523F;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
      & {
        font-size: 40px;
      }
    }

    .logo {
      height: 60px;
      width: 60px;

      @media (max-width: 800px) {
        & {
          height: 35px;
          width: 35px;
        }
      }
    }
  }

  .comment {
    font-weight: bold;
    font-size: 18px;
    color: #777777;
    letter-spacing: 0.22px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 50px;

    @media (max-width: 800px) {
      & {
        font-size: 14px;
      }
    }
  }

  .play {
    height: 135px;
    width: 135px;
    @media (max-width: 800px) {
      & {
        height: 68px;
        width: 68px;
      }
    }
  }

  .location {
    background: #F6F6F1;
    font-size: 30px;
    color: #4C4C4C;
    letter-spacing: 0;
    line-height: 70px;
    margin-top: 50px;

    .date {
      margin-right: 30px;
    }

    @media (max-width: 800px) {
      & {
        height: 50px;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .date {
          margin-right: 0;
        }

        span {
          display: block;
        }
      }
    }
  }

  .carousel {
    height: 500px;
    background-image: url(../assets/carousel_mock.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
      & {
        height: 253px;
      }
    }
  }
}
</style>
