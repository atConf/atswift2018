<template>
  <div class="talkers" id="talker">
    <div class="title">
      Learn From These Great Talkers
    </div>
    <div class="talker" v-for="(talker, index) in talkers" :key="index" :style="(index % 2 == 0) ? 'align-self: flex-end;' : ''">
      <div class="links">
        <a v-for="link in talker.links" :key="link.title" href="#">{{ link.title }}</a>
      </div>
      <div class="name" v-for="name in talker.names" :key="name">
        {{ name }}
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
  // align-self: flex-end;

  .title {
    font-size: 40px;
    color: #4C4C4C;
    text-align: center;
    margin: 72px auto;
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

    .links {
      align-self: flex-end;

      a {
        font-size: 12px;
        color: #F0F0F0;
        margin-left: 30px;
      }
    }

    .name {
      font-family: Times-Bold;
      font-size: 90px;
      color: #F0F0F0;
      text-align: left;
    }

    .introduction {
      font-size: 18px;
      color: #F0F0F0;
      text-align: left;
      margin-top: 50px;
      margin-right: 460px;
    }
  }
}
</style>
