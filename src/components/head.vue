<template>
  <div class="headWrap">
    <header class="header">
      <div class="wrap container">
        <div class="logo">
          <router-link  to="/">
            <i></i>
            <p>PANYUN</p>
          </router-link>
        </div>
        <ul class="nav size-14">
          <li>
            <router-link to="/">{{ $t('nav.home') }}</router-link>
          </li>
          <li>
            <router-link to="/loan">{{ $t('nav.loan') }}</router-link>
          </li>
          <li>
            <a  href="#product">{{ $t('nav.about') }}</a>
          </li>
          <li>
            <a href="#question">{{ $t('nav.faq') }}</a>
          </li>
        </ul>
        <div class="call">
          <i></i>
          <span>8928217286</span>
          <!--<a href="https://play.google.com/store/apps/details?id=com.panshi.wifiloan" class="size-12">Download App</a>-->
        </div>
      </div>
    </header>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        toggle:true
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import "../css/mixin.styl";
  .headWrap
    position fixed
    left 0
    top 0
    width 100%
    min-width 1250px; /*no*/
    overflow-x: auto
    height 100px
    background-color rgb(255,255,255)
    z-index 999
    .header
      width 1200px
      height @height
      margin 0 auto
      //$media()
      .wrap
        text-align center
        margin 0 auto
        .logo
          display table
          float left
          width 104px
          height @height
          text-align center
          a
            display table-cell
            vertical-align middle
            i
              display block
              margin 0 auto
              width 104px
              height 57px
              vertical-align middle
              background-image url("./img/icon_panyun_logo.png")
              background-repeat no-repeat
              $bg-size(100%,100%)
            p
              margin-top 10px
              color #1B55B4
        .call
          height @height
          line-height @height
          float right
          color #1C56B4
          font-size:0
          i
            display inline-block
            width 16px; /*no*/
            height 16px; /*no*/
            background url("./img/icon_call.png")  no-repeat
            $bg-size(100%,100%)
            margin-right 12px
          span
            font-size 18px; /*no*/
          a
            display inline-block
            height 36px
            width 210px
            background-color #ffffff
            border-radius 5px
            line-height @height
            text-align center
            color #2490FF
            font-size 18px; /*no*/
          $media-size()
        ul
          display inline-block
          height @height
          line-height @height
          font-size 0
          li
            display inline-block
            height @height
            font-size:18px;/*no*/
            font-family:ArialMT
            a
              padding 20px 50px
              color:rgba(129,129,129,1)
            .router-link-exact-active
              color #FEF85E
        $media-size()
</style>
