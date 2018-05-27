<template>
  <div class="container">
    <div class="title">
      SPONSOR
    </div>
    <div class="content">
      We’ve been lucky enough to be sponsored by some amazing companies, without whom we wouldn't be able to put this on.
      Interested in becoming a sponsor? We've got lots of opportunities to spend time with the iOS community!
    </div>
    <div v-for="sponsor in sponsors" :key="sponsor.level">
      <div class="level">
        {{ sponsor.level }}
      </div>
      <div class="sponsor">
        <img v-for="(item, index) in sponsor.list" :key="index" :src="item.icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      sponsors: [
        {
          level: 'Platinum',
          list: [
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            }
          ]
        },
        {
          level: 'Glod',
          list: [
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            }
          ]
        },
        {
          level: 'Sliver',
          list: [
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            }
          ]
        },
        {
          level: 'Partners',
          list: [
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
            },
            {
              icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_240x88dp.png',
              url: ''
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
  }

  .level {
    font-weight: bold;
    font-size: 30px;
    color: #4C4C4C;
    border-bottom: 2px solid #EF6757;
    margin: 25px auto 5px;
    width: 150px;
  }

  .sponsor {
    max-width: 1080px;

    img {
      margin: 15px 50px;
      width: 260px;
      background: #F8F8F8;
      border: 2px solid #979797;
    }
  }
}
</style>
