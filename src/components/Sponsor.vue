<template>
  <div class="container" id="sponsor">
    <div class="title">
      赞助商
    </div>
    <div class="content">
      我们得到了许多赞助商的支持，是它们让今天的 @Swift 大会如此与众不同！
      SwiftGG 有着十分优秀的线上和线下的 iOS 社区资源，欢迎赞助并支持我们！
    </div>
    <div v-for="sponsor in sponsors" :key="sponsor.level">
      <div class="level">
        {{ sponsor.level }}
      </div>
      <div class="sponsor">
        <a  v-for="(item, index) in sponsor.list" :key="index" :href="item.url"><img :src="item.icon"></a>
      </div>
    </div>
    <div style="margin-top: 100px; text-align: center;">
      <a target="_blank" href="http://cn.mikecrm.com/Gza336G" class="primary">
        成为赞助商
      </a>
      <img srcset="@/assets/coconut.png 1x, @/assets/coconut@2x.png 2x" style="margin: 80px auto; max-width: 100%; display: block">
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      sponsors: [
        {
          level: '合作伙伴',
          list: [
            {
              icon: require('@/assets/sponsors/juejin.png'),
              url: 'https://juejin.im'
            },
            {
              icon: require('@/assets/sponsors/boxueio.png'),
              url: 'https://boxueio.com'
            },
            {
              icon: require('@/assets/sponsors/infoq.png'),
              url: 'https://www.infoq.com'
            },
            {
              icon: require('@/assets/sponsors/segmentfault.png'),
              url: 'https://segmentfault.com'
            },
            {
              icon: require('@/assets/sponsors/ioscaff.png'),
              url: 'https://ioscaff.com'
            }
          ]
        }
      ]
    }
  }

}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-weight: bold;
    font-size: 40px;
    color: #4C4C4C;
    border-bottom: 1px solid #CFCFCF;
    margin: auto;
    width: 220px;
  }

  .content {
    max-width: 800px;
    font-size: 14px;
    line-height: 30px;
    margin-top: 20px;
    color: #777777;

    @media (max-width: 800px) {
      & {
        font-size: 10px;
        line-height: 15px;
        margin: 10px 40px;
      }
    }
  }

  .level {
    font-weight: bold;
    font-size: 30px;
    color: #4C4C4C;
    margin: 25px auto 5px;
    text-align: center;
    position: relative;

    &:after {
      content: ' ';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 150px;
      border-bottom: 1px solid #EF6757;
      transform:translateX(-50%);

      @media (max-width: 800px) {
        & {
          width: 40px;
        }
      }
    }

    @media (max-width: 800px) {
      & {
        font-size: 14px;
      }
    }
  }

  .sponsor {
    max-width: 1080px;

    img {
      margin: 15px 50px;
      width: 260px;
      background: #F8F8F8;
      border: 2px solid #979797;

      @media (max-width: 800px) {
        & {
          width: 100px;
          margin: 5px 10px;
        }
      }
    }
  }
}
</style>
