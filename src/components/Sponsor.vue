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
        <a  v-for="(item, index) in sponsor.list" :key="index" :href="item.url"><img :src="item.icon" :style="item.style || sponsor.style"></a>
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
          level: '钻石赞助',
          style: 'height: 110px; width: auto;',
          list: [
            {
              icon: require('@/assets/sponsors/mob.png'),
              url: 'http://www.mob.com'
            }
          ]
        },
        {
          level: '铂金赞助',
          style: 'height: 77px; width: auto;',
          list: [
            {
              icon: require('@/assets/sponsors/jiguang.png'),
              url: 'https://jiguang.cn'
            },
            {
              icon: require('@/assets/sponsors/xiangwushuo.png'),
              url: 'https://www.xiangwushuo.com'
            },
            {
              icon: require('@/assets/sponsors/100offer.png'),
              url: 'https://www.100offer.com/'
            },
            {
              icon: require('@/assets/sponsors/pingxx.png'),
              url: 'https://www.pingxx.com/',
              style: 'height: 217px; width: auto; margin-top: -20px; margin-bottom: -56px;'
            }
          ]
        },
        {
          level: '合作伙伴',
          style: 'height: 50px; width: auto;',
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
              url: 'https://segmentfault.com',
              style: 'height: 80px; width: auto;'
            },
            {
              icon: require('@/assets/sponsors/ioscaff.png'),
              url: 'https://ioscaff.com'
            },
            {
              icon: require('@/assets/sponsors/cocoachina.png'),
              url: 'http://www.cocoachina.com/',
              style: 'height: 90px; width: auto; margin-bottom: -10px;'
            },
            {
              icon: require('@/assets/sponsors/itdks.png'),
              url: 'https://www.itdks.com/',
              style: 'height: 40px; width: auto;'
            },
            {
              icon: require('@/assets/sponsors/pricetag.png'),
              url: 'https://j.youzan.com/HxKT6Y',
              style: 'height: 80px; width: auto; margin-bottom: -8px;'
            },
            {
              icon: require('@/assets/sponsors/xiaozhuanlan.png'),
              url: 'https://xiaozhuanlan.com/book'
            },
            {
              icon: require('@/assets/sponsors/ptpress.png'),
              url: 'http://www.ptpress.com.cn/'
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
