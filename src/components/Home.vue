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
    <svg class="play" viewBox="0 0 135 135" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop-HD" transform="translate(-653.000000, -453.000000)">
                <g id="首页" transform="translate(0.000000, 122.000000)">
                    <g id="Play" transform="translate(654.000000, 332.000000)">
                        <circle id="Oval" stroke="#EF6757" stroke-width="2" cx="66.5" cy="66.5" r="66.5"></circle>
                        <path d="M95.115417,71.6826734 L47.0232262,99.7364514 C44.1609147,101.406133 40.4870083,100.439316 38.8173266,97.5770042 C38.2820504,96.6593878 38,95.6161058 38,94.553778 L38,38.446222 C38,35.1325135 40.6862915,32.446222 44,32.446222 C45.0623278,32.446222 46.1056098,32.7282724 47.0232262,33.2635486 L95.115417,61.3173266 C97.9777285,62.9870083 98.944546,66.6609147 97.2748643,69.5232262 C96.7533515,70.417248 96.0094388,71.1611607 95.115417,71.6826734 Z" id="Triangle" fill="#EF6757"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
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
