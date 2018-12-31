<template>
    <div class="leader">
      <h2 v-html="content"></h2>
      <div class="solid"></div>
    </div>
</template>

<script>
  export default {
    name: 'leader',
    props:{
      content:{
        type: String
      }
    }
  }
</script>

<style scoped lang="stylus">
.leader
  margin 100px auto
  text-align center
  font-size 36px
  color #4a4a4a
  h2
    margin-bottom 45px
    line-height 50px
  .solid
    margin 0 auto
    width 170px;/*no*/
    height 3px;/*no*/
    background-color #1C56B4
</style>
