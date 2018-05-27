<template>
  <div class="talkers" id="talker">
    <div class="title">
      Learn From These Great Talkers
    </div>
    <div class="talker" v-for="(talker, index) in talkers" :key="index">
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
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      talkers: [
        {
          names: ['David', 'Keegan'],
          links: [{ title: 'WEBSITE' }, { title: 'TWITTER' }],
          introduction: `Type Sam is a strange mashup of developer, writer and trainer. By day you'll find him recording videos for Razeware, writing tutorials, attending conferences and generally being a good guy. By night he's likely to be out entertaining people, armed with his trombone and killer dance moves.`
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
    box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.50);
    max-width: 1050px;
    padding: 30px 60px 95px 90px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: black;
    margin-bottom: 20px;

    @media (min-width: 800px) {
      &:nth-child(even) {
        align-self: flex-end;
      }
    }

    @media (max-width: 800px) {
      & {
        padding: 25px 20px 150px;
        box-shadow: 0 0 0 0 rgba(0,0,0,0.50);
        margin-bottom: 0;
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
        color: #F0F0F0;
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
        color: #F0F0F0;
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
      color: #F0F0F0;
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
