<template>
  <div class="talkers" id="talker">
    <div class="title">
      Learn From These Great Talkers
    </div>
    <div class="talker" v-for="(talker, index) in talkers" :key="index" :style="talker.style">
      <div class="links">
        <a v-for="link in talker.links" :key="link.title" href="#">{{ link.title }}</a>
      </div>
      <div class="name-container">
        <div class="name" v-for="name in talker.names" :key="name">
          {{ name }}
        </div>
      </div>
      <div class="introduction">
        {{ talker.introduction }}
      </div>
      <img class="picture" :srcset="`${talker.picture} 2x`" sizes="(max-width: 800px) 20px, (max-width: 800px) 20px" />
      <!-- srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" -->
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      talkers: [
        {
          names: ['王文槿'],
          links: [{ title: 'WEBSITE' }, { title: 'TWITTER' }],
          introduction: `莲叔(aaaron7)，真名王文槿，SwiftGG 资深灌水师。目前供职于阿里 uc 事业群，负责客户端的视频类业务。技术栈较广（曾经创过业，你懂的）。近期主要对Swift，函数式编程，计算机视觉等方向比较感兴趣。`,
          picture: require('../assets/talks/aaaron7.png'),
          style: `color: #4C4C4C; background: url(${require('../assets/talks/aaaron7_background_element.png')}) bottom right no-repeat / 525px 448px, #EBC0A0;`
        },
        {
          names: ['Alex', 'Cornell'],
          links: [{ title: 'WEBSITE' }, { title: 'TWITTER' }],
          introduction: `Type Sam is a strange mashup of developer, writer and trainer. By day you'll find him recording videos for Razeware, writing tutorials, attending conferences and generally being a good guy. By night he's likely to be out entertaining people, armed with his trombone and killer dance moves.`
        },
        {
          names: ['Allison', 'House'],
          links: [{ title: 'WEBSITE' }, { title: 'TWITTER' }],
          introduction: `Type Sam is a strange mashup of developer, writer and trainer. By day you'll find him recording videos for Razeware, writing tutorials, attending conferences and generally being a good guy. By night he's likely to be out entertaining people, armed with his trombone and killer dance moves.`
        }
      ]
    }
  }

}
</script>

<style lang="less" scoped>
.talkers {
  display: flex;
  flex-direction: column;
  padding: 0 145px;

  @media (max-width: 800px) {
    & {
      padding: 0;
      align-items: stretch;
    }
  }

  .title {
    font-size: 40px;
    color: #4C4C4C;
    text-align: center;
    margin: 72px auto;
    border-bottom: 1px solid #CFCFCF;

    @media (max-width: 800px) {
      & {
        font-size: 28px;
        margin: 50px 15px;
        align-self: center;
        padding-bottom: 17px;
      }
    }
  }
  .talker {
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.50);
    max-width: 1050px;
    padding: 30px 60px 95px 90px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: black;
    margin-bottom: 20px;
    position: relative;

    @media (min-width: 800px) {
      & {
        height: 560px;
      }

      &:nth-child(even) {
        align-self: flex-end;
      }
    }

    @media (max-width: 800px) {
      & {
        padding: 25px 20px 0;
        box-shadow: 0 0 0 0 rgba(0,0,0,0.50);
        margin-bottom: 0;
      }
    }

    .picture {
      position: absolute;
      right: 15px;
      bottom: 0;

      @media (max-width: 800px) {
        & {
          position: inherit;
          display: block;
          width: 160px;
          margin: auto;
          margin-top: 20px;
          text-align: center;
        }
      }
    }

    .links {
      align-self: flex-end;

      @media (max-width: 800px) {
        & {
          align-self: flex-start;
        }
      }

      a {
        font-size: 12px;
        color: inherit;
        margin-left: 30px;

        @media (max-width: 800px) {
          & {
            margin-left: 0;
            margin-right: 20px;
          }
        }
      }
    }

    .name-container {
      text-align: left;
      margin: 10px 0;

      .name {
        font-family: Times-Bold;
        font-size: 90px;
        text-align: left;

        @media (max-width: 800px) {
          & {
            font-size: 32px;
            display: inline;
          }
        }
      }
    }

    .introduction {
      font-size: 18px;
      text-align: left;
      margin-top: 50px;
      margin-right: 460px;

      @media (max-width: 800px) {
        & {
          margin: 0;
        }
      }
    }
  }
}
</style>
