<template>
  <div>
    <div class="dialog">
      <div class="close" @click="closeDialog">
        <i></i>
      </div>
      <div class="title">
        {{title}}
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div>
        <slot name="btn"></slot>
      </div>
    </div>
    <div class="dialogCover">

    </div>
  </div>

</template>

<script>
  export default {
    name: 'myDialog',
    props: {
      title:{
        type: String,
        default:''
      },

    },
    methods:{
      closeDialog(){
        this.$emit('closeDialog')
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../css/mixin.styl"
.dialogCover
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  width: 100%;
  height: 100%;
  z-index 2000
  background-color: rgba(0, 0, 0, 0.4)
.dialog
  position: fixed;
  top: 40%;
  left: 50%;
  width: 310px;
  font-size: 16px;
  overflow: hidden;
  z-index 2001
  -webkit-transition: .3s;
  transition: .3s;
  border-radius: 4px;
  background-color: #fff;
  -webkit-transform: translate3d(-50%,-50%,0);
  transform: translate3d(-50%,-50%,0);
  .title
    font-weight: 500;
    padding-top: 37px;
    color #333333
    font-size 22px
    text-align: center;
  .close
    position absolute
    right 0
    top 0
    padding 15px
    i
      display block
      width 20px
      height 20px
      $bg-image("./img/icon_close")
      background-repeat no-repeat
      background-size 100% 100%
</style>
