<template>
  <div class="tickets">
    <div class="title">
      TICKETS
    </div>
    <div class="sub-title">
      DON’T MISS OUT
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
      Tickets grant access to all conference sections, coffee breaks, lunch and party. Accommodation is NOT included in the ticket price.
    </div>
    <div class="fun">
      Come Join The Fun
    </div>
    <RegisterButton />
    <img srcset="@/assets/city.png 1x, @/assets/city@2x.png 2x" style="margin-top: 44px;">
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
        { name: 'Super Early Bird Tickets', note: 'Available until 20 April 2018 23:59', price: 233 },
        { name: 'Super Early Bird Ticket + Tax', note: 'Available until 20 April 2018 23:59', price: 555 },
        { name: 'Regular Tickets', note: 'Available until 20 April 2018 23:59', price: 666 },
        { name: 'Regular Tickets + Tax', note: 'Available until 20 April 2018 23:59', price: 888 }
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
    width: 800px;
    margin: 40px 0 15px;
    padding: 0 20px;

    .ticket {
      font-size: 30px;
      color: #4C4C4C;
      text-align: left;
      padding: 20px 0;

      &:not(:last-child) {
        border-bottom: 1px dashed #CFCFCF;
      }

      .note {
        font-size: 12px;
        color: #AFAFAF;
        margin-top: 5px;
      }
    }
  }

  .tip {
    font-size: 12px;
    color: #777777;
  }

  .fun {
    margin-top: 167px;
    margin-bottom: 30px;
    font-size: 18px;
    color: #4C4C4C;
  }
}
</style>
