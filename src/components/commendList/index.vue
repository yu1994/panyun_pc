<template>
    <div class="commendWrap">
      <div class="header">
        <i class="left" ></i>
        <span class="center">Recommend to you</span>
        <i class="right"></i>
      </div>
      <ul class="list">
        <li v-for="(item,key) in list" :key="key">
          <div class="proNameBox">
            <i class="icon" :style="{backgroundImage:'url(' + item.iconUrl + ')'}"></i>
            <p class="teal"><span class="name">{{item.productName}}</span><span style="color: #FF9800">{{item.score}}</span><i class="star"></i></p>
            <p class="admit"><a  @click.stop="forward(item)"><span>Apply</span></a></p>
          </div>
          <div class="detailBox">
            <div class="money">
              <p class="weight num">₹{{item.loanMoney}}</p>
              <p>Maximum amount</p>
            </div>
            <div class="term">
              <p><strong class="weight">{{item.interest}}</strong>Daily interest</p>
              <p>Loan Term {{item.loanTerm}} days</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { commendHandelApi } from '@/api/login'

export default {
  name: 'index',
  props: {
    commendData: {
      type: Object,
      default: function () {
        return {
          limit: 10000
        }
      },
    }
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getCommendHandel()
  },
  methods: {
    forward (row) {
      WebViewJavascriptBridge.callHandler(
        'goCooglePlay'
        , {id: row.id,forwardUrl:row.forwardUrl}
        , function(response) {
        }
      )
    },
    getCommendHandel () {
      commendHandelApi(this.commendData.limit).then((res) => {
        if (res.data.code === 0) {
          this.list = res.data.data
        } else {
          this.$toast({
            msg: 'error' + res.data.message
          })
        }
      }).catch(error => {
        this.$toast({
          msg: 'error' + error
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "../../css/mixin.styl";
.commendWrap
  width 100%
  margin-top 15px
  .header
    display flex
    align-items center
    justify-content center
    font-size 16px
    color rgba(102,102,102,1)
    i
      width 59px
      height 7px
      font-style normal
      background-size 100% 100%
      background-repeat no-repeat
    .center
      padding 0 12px
    .left
      $bg-image('./img/icon_home_arrow_left')
    .right
      $bg-image('./img/icon_home_arrow_right')

  .list
    padding 16px 12px 0
    li
      width 100%
      height 100px
      margin-bottom 11px
      padding 10px 15px 0 15px
      box-sizing border-box
      background:rgba(255,255,255,1);
      box-shadow:0px 2px 6px 1px rgba(48,48,48,0.07);
      border-radius:5px
      .proNameBox
        display flex
        align-items center
        .teal
          display flex
          align-items center
        i
          width 40px
          height 40px
          background-repeat no-repeat
          background-size 100% 100%
        .name
          padding 0 4px 0 10px
        .admit
          flex 1
          text-align right
          a
            display inline-block
            height 40px
            padding 0 20px
            font-size:14px;
            color:rgba(255,255,255,1);
            span
              display flex
              align-items center
              justify-content center
              width:53px;
              height:18px;
              margin-top ((40 - 18)/2)px
              border-radius:9px;
              background:rgba(255,152,0,1);
        .star
          width 7px
          height 7px
          margin-left 3px
          $bg-image('./img/icon_home_star')
          background-size 100% 100%
          background-repeat no-repeat
      .detailBox
        display flex
        width 100%
        padding-left 47px
        box-sizing border-box
        margin-top 10px
        .term,.money
          width 50%
          font-size 12px
          line-height 18px
          color:rgba(163,165,171,1)
          .num
            padding-left 10px
        .term
          padding-left 30px
        .weight
          font-style normal
          font-family:Helvetica;
          font-weight:400;
          color:rgba(220,6,14,1);
          font-size 16px
    & li:last-child
      margin-bottom 0
</style>
