<template>
  <div class="schedule" id="schedule">
    <div class="title">
      议程
    </div>
    <div class="sub-title">
      顺序以会议当天现场安排为准
    </div>
    <div class="text">
      此次开发者大会的时间为 2018 年 09月 15 号，周六，欢迎您的到来！
    </div>
    <div class="schedule-list">
      <div v-for="schedule in schedules" :key="schedule.title" class="content">
        <div class="partion-title">
          {{ schedule.title }}
        </div>
        <div v-for="item in schedule.items" :key="item.time + item.name" class="item">
          <div class="time">
            {{ item.time }}
          </div>
          <div class="separator">
            <div class="line"></div>
            <div class="circle" :class="item.guest"></div>
          </div>
          <div class="name" :class="item.guest">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      schedules: [
        {
          title: 'AM',
          items: [
            { time: '08:30 AM', name: '注册' },
            { time: '09:20 AM', name: '开场' },
            { time: '09:30 AM', name: '王巍', guest: 'guest' },
            { time: '10:20 AM', name: '戴铭', guest: 'guest' },
            { time: '11:10 AM', name: '神秘嘉宾', guest: 'guest' },
            { time: '12:00 AM', name: '休息' }
          ]
        },
        {
          title: 'PM',
          items: [
            { time: '01:20 PM', name: '开场' },
            { time: '01:30 PM', name: '王文槿', guest: 'guest' },
            { time: '02:20 PM', name: 'Andyy Hope', guest: 'guest' },
            { time: '03:10 PM', name: '刘镇夫', guest: 'guest' },
            { time: '04:00 PM', name: '唐巧', guest: 'guest' },
            { time: '05:00 PM', name: '闭幕' }
          ]
        }
      ]
    }
  }

}
</script>

<style lang="less" scoped>
.schedule {
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

  .text {
    font-size: 20px;
    color: #777777;
    letter-spacing: 0.3px;
    margin-top: 29px;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 39px;
    margin-bottom: 100px;

    @media (max-width: 800px) {
      & {
        margin-bottom: 50px;
      }
    }
  }

  .content {
    text-align: left;
    margin: 0 100px;

    .partion-title {
      font-size: 20px;
      color: #777777;
      border-bottom: 1px solid #CFCFCF;
      line-height: 48px;
      width: 330px;
    }

    .item {
      display: flex;
      align-items: center;

      .time {
        font-size: 20px;
        color: #AFAFAF;
        width: 94px;
      }

      .separator {
        width: 13px;
        margin: 0 20px;
        height: 43px;
        position: relative;

        .line {
          background-color: #CFCFCF;
          width: 2px;
          height: 43px;
          position: absolute;
          left: 5px;
        }
        .circle {
          border: 1px solid #979797;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          position: absolute;
          background-color: white;
          top: 15px;

          &.guest {
            border: 2px solid #EF6757;
          }
        }
      }

      .name {
        font-size: 20px;
        color: #AFAFAF;

        &.guest {
          color: #4C4C4C;
        }
      }
    }
  }
}
</style>
