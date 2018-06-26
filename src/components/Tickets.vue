<template>
  <div class="tickets">
    <div class="title">
      门票
    </div>
    <div class="sub-title">
      别错过最佳购买时机！
    </div>
    <div class="container">
      <div class="ticket" v-for="ticket in tickets" :key="ticket.name">
        <div style="display: flex;">
          <span style="flex: 1;">{{ ticket.name }}</span>
          <span style="font-weight: bold; margin-right: 5px;">{{ ticket.price }}</span>
          <span>RMB</span>
        </div>
        <div class="note">
          {{ ticket.note }}
        </div>
      </div>
    </div>
    <div class="tip">
      以上类型的门票包含了此次会议的所有演讲内容，讨论议题和茶歇部分，不包括住宿、午餐、Workshop 等费用。支持发票，发票税额 25%。
    </div>
    <div class="fun">
      欢迎参加 2018 @Swift 开发者大会
    </div>
    <RegisterButton />
    <img srcset="@/assets/city.png 1x, @/assets/city@2x.png 2x" style="margin-top: 44px; max-width: 100%;">
  </div>
</template>

<script>
import RegisterButton from './RegisterButton'

export default {

  components: {
    RegisterButton
  },

  data () {
    return {
      tickets: [
        { name: '早早鸟票', note: '购买日期截止到2018年07月31日', price: '279' },
        { name: '早鸟票', note: '购买日期截止到2018年08月31日', price: '???' },
        { name: '标准门票', note: '购买日期截止到2018年09月15日', price: '???' },
      ]
    }
  }

}
</script>

<style lang="less" scoped>
.tickets {
  padding: 20px;
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

  .sub-title {
    font-size: 14px;
    color: #777777;
    margin-top: 5px;
  }

  .container {
    border: 2px solid #CFCFCF;
    border-radius: 8px;
    min-width: 320px;
    margin: 40px 0 15px;
    padding: 0 20px;

    @media (max-width: 800px) {
      & {
        padding: 0;
      }
    }

    @media (min-width: 800px) {
      & {
        width: 800px;
      }
    }

    .ticket {
      font-size: 30px;
      color: #4C4C4C;
      text-align: left;
      padding: 20px 0;

      @media (max-width: 800px) {
        & {
          font-size: 14px;
          padding: 10px 5px 5px;
        }
      }

      &:not(:last-child) {
        border-bottom: 1px dashed #CFCFCF;
      }

      .note {
        font-size: 12px;
        color: #AFAFAF;
        margin-top: 5px;

        @media (max-width: 800px) {
          & {
            font-size: 10px;
            margin-top: 0px;
          }
        }
      }
    }
  }

  .tip {
    font-size: 12px;
    color: #777777;

    @media (max-width: 800px) {
      & {
        font-size: 10px;
        margin: 0 30px;
      }
    }
  }

  .fun {
    margin-top: 167px;
    margin-bottom: 30px;
    font-size: 18px;
    color: #4C4C4C;

    @media (max-width: 800px) {
      & {
        font-size: 10px;
        margin-top: 50px;
        margin-bottom: 14px;
      }
    }
  }
}
</style>
