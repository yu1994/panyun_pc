<template>
    <div class="passwordInput border-1px">
      <ul @click="toggleKeyboard">
        <li><i class="">{{value[0]}}</i></li>
        <li><i class="">{{value[1]}}</i></li>
        <li><i class="">{{value[2]}}</i></li>
        <li><i class="">{{value[3]}}</i></li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'index',
    props:{
      value:{
        type: String,
        required: true
      }
    },
    watch:{
      'value'(val){
        if (typeof (val) == "string"){
          val = val.split("")
        }
      }
    },
    methods:{
      toggleKeyboard(){
        this.$emit('focus')
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../css/mixin.styl"
  .passwordInput
    border-1px(rgba(204,204,204,1))
    ul
      display flex
      width 100%
      padding 0 35px 25px
      box-sizing border-box
      li
        flex 1
        width 45px
        height 45px
        position relative
        text-align center
        i
          position relative
          display inline-block
          width 45px
          height 45px
          line-height @height
          font-style normal
          font-size 30px
          color #333333
          font-family:Helvetica
          box-sizing border-box
          &::after
            content: ' ';
            position: absolute;
            pointer-events: none;
            box-sizing: border-box;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            border: 0 solid #ebedf0;
            border-width: 1px;/*no*/

</style>
