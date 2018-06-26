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
      <img class="map" src="../assets/map.png" alt="">
      <!-- <iframe class="map" width='560' height='440' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://f.amap.com/5r3wU_0D14T9s'></iframe>' -->
    </div>
  </div>
</template>

<script>
export default {
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
