<template>
  <div class="container" id="venue">
    <div class="hotel">
      <div class="title small" style="border-bottom: 2px solid #FFFFFF; padding-top: 0;">
        大会的举办地点
      </div>
      <div class="title large">
        香格里拉酒店
      </div>
      <div class="title small" style="border-top: 2px solid #FFFFFF; padding-bottom: 0;">
        北京 中国
      </div>
    </div>
    <div class="location">
      <div class="hotel-sample">
        <div class="title large">会议地址</div>
        <div class="normal-container">
          <div class="title">大宴会厅</div>
          <div class="title">香格里拉大酒店</div>
        </div>
        <div class="title small">紫竹院路 29 号</div>
        <div class="title small">北京</div>
        <div class="title small">中国</div>
      </div>
      <img class="map" src="../assets/map.png" alt="" @click="openLocation">
      <!-- <iframe class="map" width='560' height='440' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://f.amap.com/5r3wU_0D14T9s'></iframe>' -->
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    openLocation () {
      location.href = 'https://maps.apple.com/?address=%E4%B8%AD%E5%9B%BD%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA%E7%B4%AB%E7%AB%B9%E9%99%A2%E8%B7%AF29%E5%8F%B7&auid=1117160141592849&ll=39.944343,116.308065&lsp=57879&q=%E5%8C%97%E4%BA%AC%E9%A6%99%E6%A0%BC%E9%87%8C%E6%8B%89%E9%A5%AD%E5%BA%97&_ext=Ch4KBAgEEAQKBAgFEAMKBAgGEAsKBAgKEAEKBAgbEAMSJClM0+FnovdDQDGykL9U3xJdQDmwgMjcNvpDQEEPO03GhRRdQA%3D%3D&t=m'
    }
  }

}
</script>

<style lang="less" scoped>
.container {
  padding: 0 30px;

  @media (max-width: 800px) {
    & {
      padding: 0 0 50px;
    }
  }

  .hotel {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/hotel.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 90px 0;

    .title {
      color: #FFFFFF;

      &.small {
        font-weight: lighter;
        font-size: 20px;
        width: 450px;
        margin: auto;
        padding: 27px 0;

        @media (max-width: 800px) {
          & {
            width: 225px;
            padding: 10px 0;
            font-size: 14px;
          }
        }
      }

      &.large {
        font-family: Rubik;
        font-size: 50px;
        margin: 20px;

        @media (max-width: 800px) {
          & {
            font-size: 28px;
            margin: 8px;
          }
        }
      }

    }
  }

  .location {
    display: flex;
    flex-direction: row;
    margin: 50px 0;

    @media (max-width: 800px) {
      & {
        flex-direction: column;
        margin: 0;
      }
    }

    .map {
      max-width: 640px;
      max-height: 549px;

      @media (max-width: 800px) {
        & {
          width: 100%;
          margin: auto;
        }
      }
    }

    .hotel-sample {
      background-image: url(../assets/hotel_sample.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      flex: 1;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media (max-width: 800px) {
        & {
          padding: 50px 0;
        }
      }

      .normal-container {
        margin: 27px 0;

        @media (max-width: 800px) {
          & {
            margin: 17px 0;
          }
        }
      }

      .title {
        font-size: 28px;
        color: #FFFFFF;

        @media (max-width: 800px) {
          & {
            font-size: 18px;
          }
        }

        &.large {
          font-family: Rubik;
          font-size: 40px;

          @media (max-width: 800px) {
            & {
              font-size: 28px;
            }
          }
        }
        &.small {
          font-size: 20px;
          line-height: 26px;

          @media (max-width: 800px) {
            & {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
