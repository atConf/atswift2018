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
        <template v-for="item in schedule.items">
          <div :key="item.time + item.name" class="item">
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
          <div v-if="item.topic" :key="item.topic" class="item topic">
            <div class="time"></div>
            <div class="separator">
              <div class="line"></div>
            </div>
            <div class="topic" :class="item.guest">
              {{ item.topic }}
            </div>
          </div>
        </template>
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
            { time: '09:30 AM', name: '王巍', guest: 'guest', topic: '从 Swift 到机器学习' },
            { time: '10:20 AM', name: '戴铭', guest: 'guest', topic: '怎么用 Swift 写解释器以及实用场景' },
            { time: '11:10 AM', name: '刘冠杉', guest: 'guest', topic: '做个多人 AR 游戏挺好的' },
            { time: '12:00 AM', name: '休息' }
          ]
        },
        {
          title: 'PM',
          items: [
            { time: '01:20 PM', name: '开场' },
            { time: '01:30 PM', name: '唐巧', guest: 'guest', topic: '猿辅导从 OC 到 Swift 的迁移之路' },
            { time: '02:20 PM', name: 'Andyy Hope', guest: 'guest', topic: 'iOS Architecture improvements with Swift' },
            { time: '03:10 PM', name: '刘镇夫', guest: 'guest', topic: 'Strings Seven Ways' },
            { time: '04:00 PM', name: '唐晓轩', guest: 'guest', topic: 'Live Code' },
            { time: '04:15 PM', name: '王文槿', guest: 'guest', topic: 'Swift For Tensorflow' },
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
    // align-items: center;
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
    flex: 1;

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

        & + .topic {
          height: 30px;
        }

        .line {
          background-color: #CFCFCF;
          width: 2px;
          height: 43px;
          position: absolute;
          left: 5px;

          & + .topic {
            height: 30px;
          }
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

      .topic {
        flex: 1;
        font-size: 15px;
      }
    }
  }
}
</style>
