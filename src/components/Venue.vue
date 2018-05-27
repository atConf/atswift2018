<template>
  <div class="container" id="venue">
    <div class="hotel">
      <div class="title small" style="border-bottom: 2px solid #FFFFFF; padding-top: 0;">
        The conference will be held at the
      </div>
      <div class="title large">
        SHANGRILA HOTEL
      </div>
      <div class="title small" style="border-top: 2px solid #FFFFFF; padding-bottom: 0;">
        in Beijing, China
      </div>
    </div>
    <div class="location">
      <div class="hotel-sample">
        <div class="title large">The Venue</div>
        <div class="normal-container">
          <div class="title">Grand Ballroom</div>
          <div class="title">Shangri-La Hotel</div>
        </div>
        <div class="title small">29 Zizhuyuan Road,</div>
        <div class="title small">Beijing,</div>
        <div class="title small">China</div>
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
        font-family: Rubik-Bold;
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
          font-family: Rubik-Bold;
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
