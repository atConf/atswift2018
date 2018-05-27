<template>
  <div class="container" id="venue">
    <div class="hotel">
      <div class="title small" style="border-bottom: 2px solid #FFFFFF; padding-bottom: 27px;">
        The conference will be held at the
      </div>
      <div class="title large">
        SHANGRILA HOTEL
      </div>
      <div class="title small" style="border-top: 2px solid #FFFFFF; padding-top: 27px;">
        in Beijing, China
      </div>
    </div>
    <div class="location">
      <div class="hotel-sample">
        <div class="title large" style="margin-bottom: 26px;">The Venue</div>
        <div class="title">Grand Ballroom</div>
        <div class="title">Shangri-La Hotel</div>
        <div class="title small" style="margin-top: 27px;">29 Zizhuyuan Road,</div>
        <div class="title small">Beijing,</div>
        <div class="title small">China</div>
      </div>
      <iframe width='560' height='440' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://f.amap.com/5r3wU_0D14T9s'></iframe>'
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

  .hotel {
    background-image: url(../assets/hotel.png);
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
      }

      &.large {
        font-family: Rubik-Bold;
        font-size: 50px;
        margin: 20px;
      }

    }
  }

  .location {
    display: flex;
    flex-direction: row;
    margin: 50px 0;;

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

      .title {
        font-size: 28px;
        color: #FFFFFF;

        &.large {
          font-family: Rubik-Bold;
          font-size: 40px;
        }
        &.small {
          font-size: 20px;
          line-height: 26px;
        }
      }
    }
  }
}
</style>
