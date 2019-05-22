<template>
  <div class="wrap">
    <div class="content">
      <div class="validator">
          <div class="title" v-if="loanBtnShow">
            <h1 class="once">Enter phone number
            </h1>
            <h1>Measure your loan amount
            </h1>
          </div>
          <div class="title" v-else>
            <h1>Estimate loan amount</h1>
          </div>
          <div class="measure">
            <div class="dial">
              <i class="pointer" ref="pointer"></i>
              <p class="val"><span>₹</span> {{limit}}</p>
            </div>
          </div>
        <div class="getLoan"  v-if="!loanBtnShow">
          <div class="amount">
            <button style="color: #fe9c36;background-color: #ffffff" @click="sendAndroidLoan">Go for loan</button>
          </div>
        </div>
      </div>
      <div class="getLimit" v-if="loanBtnShow">
        <div class="tel">
          <i class="picture"></i>
          <input type="tel" placeholder="Enter phone number please" maxlength="13" v-model="commit.phoneNumber"  @focus="phoneBlur" @click="IntoView($event)">
        </div>
        <div class="amount">
          <button @click="commitData">Check Loan Amount</button>
        </div>
        <div class="policy">
          <div class="checkbox">
            <input id ="color-input-purple" v-model="checkedDeal" class="chat-button-location-radio-input" type="checkbox" name="color-input-purple" value="#c37ad3" />
            <label for="color-input-purple"></label>
          </div>
          <div style="text-align: left"><p>I have read and accepted <a @click.prevent="agreement">Privacy Policy</a></p><p> and the <a @click.prevent="agreement">Terms&Conditions</a></p></div>
        </div>
      </div>
      <commend-list v-if="commendShow" :commend-data="commendData"></commend-list>
      <div>
        <div class="dialog" v-show="dialogMode">
          <my-dialog :title="'Enter OTP please'" @closeDialog="closeDialog">
            <div class="dialogMain" slot="main">
              <p class="info">Have sent to your phone{{commit.phoneNumber}}
              </p>
              <password-input :value="commit.validateCode" @focus="focus"></password-input>
            </div>
            <div slot="btn" class="btn">
              <button @click="send" ref="sendNoteBtn">
                <span v-if="!time.disabled">Resend ({{time.timekeepingNum}}) s</span>
                <span v-else class="resend">Resend</span>
              </button>
            </div>
          </my-dialog>
        </div>
        <transition name="slide-fade">
          <number-keyboard v-show="showKeyboard" @delete="onDelete" @input="onInput" @ent="onEnter"></number-keyboard>
        </transition>
      </div>
    </div>
     <spinner v-show="spinnerShow"></spinner>
  </div>
</template>

<script>
import { noteVerifyApi, phoneVerifyApi } from '@/api/login'
import passwordInput from '@/components/passwordInput'
import myDialog from '@/components/dialog'
import spinner from '@/components/spinner'
import numberKeyboard from '@/components/numberKeyboard'
import { deg, getRequest } from '@/utils'
import commendList from '@/components/commendList'
export default {
  name: 'home',
  data () {
    return {
      commit: {
        phoneNumber: '', // 手机号码
        validateCode: '' // 短语验证数字
      },
      spinnerShow: false,
      time: {
        Interval: null,
        timekeepingNum: 60,
        disabled: false
      },
      appParams: {

      },
      limit: '',
      checkedDeal: true,
      loanBtnShow: true,
      dialogMode: false,
      showKeyboard: false,
      commendShow: false,
      commendData: {
        limit: 10000
      },
      userID: '',
      version: ''
    }
  },
  watch: {
    'commit.phoneNumber' (val, oldVal) {
      if (val.length < 3) {
        this.commit.phoneNumber = '91-'
      } else {
        if (val.slice(0, 3) !== '91-') {
          this.commit.phoneNumber = oldVal
        }
      }
    }
  },
  created () {
    const request = getRequest()
    this.version = request.version
    if (request.quota) {
      this.loanBtnShow = false
      this.limit = this.commendData.limit = request.quota
      this.commendShow = true
      this.rotatePointer(request.quota)
    }
  },
  methods: {
    onInput (key) {
      this.commit.validateCode = (this.commit.validateCode + key).slice(0, 4)
      if (this.commit.validateCode.length === 4) {
        this.onEnter()
      }
    },
    onDelete () {
      this.commit.validateCode = this.commit.validateCode.slice(0, this.commit.validateCode.length - 1)
    },
    commitData () { // 提交手机号码
      const that = this
      const phone = this.phoneSlice()
      if (!this.checkedDeal) {
        this.$toast({
          msg: 'Please check the Get money privacy policy'
        })
        return false
      }
      if (new RegExp(this.$root.integerType).test(phone)) {
        this.spinnerShow = true
        phoneVerifyApi({ phone, version: this.version }).then((res) => { // 获取短信验证码请求
          this.spinnerShow = false
          if (res.data.code === 0) {
            WebViewJavascriptBridge.callHandler(
              'getLocation'
              , {}
              , function (response) {
                that.appParams = JSON.parse(response)
                that.dialogMode = true
                that.timekeepingControl()
              }
            )
            that.sendAndroidCount()
          } else {
            this.$toast({
              msg: res.data.message
            })
          }
        }).catch((error) => {
          this.spinnerShow = false
          this.$toast({
            msg: error + ''
          })
        })
      } else {
        this.$toast({
          msg: 'Enter correct phone number!'
        })
      }
    },
    onEnter () { /* 短信发送验证 请求  */
      if (new RegExp(this.$root.noteVerifyType).test(this.commit.validateCode)) {
        this.spinnerShow = true
        let params
        // if (typeof Object.assign != 'function') {
        //   params = JSON.parse(JSON.stringify(this.commit))
        //   for (let i in this.appParams) {
        //     params[i] = this.appParams[i]
        //   }
        // }else params = Object.assign({},this.commit,this.appParams);
        params = Object.assign({}, this.commit, this.appParams)
        params.phoneNumber = this.phoneSlice()
        noteVerifyApi(params, {imei: this.appParams.IMEI, version: this.version}).then((res) => { /**/
          if (res.data.code === 0) {
            this.getUserInfo(res.data.data)
            if (res.data.data.newUser) { // 如果是新用户
              this.getLimit()
            } else { // 老用户
              if (res.data.data.loanQuota) {
                this.updateLimit(res.data.data.loanQuota)
              } else this.getLimit()
            }
          } else {
            this.spinnerShow = false
            this.$toast({
              msg: res.data.message
            })
          }
        }).catch((error) => {
          this.spinnerShow = false
          this.$toast({
            msg: error + ''
          })
        })
      } else {
        this.$toast({
          msg: 'Enter OTP incorrectly'
        })
      }
    },
    send () {
      if (!this.time.Interval) {
        this.time.disabled = false
        this.commitData()
      } else {
        this.$toast({
          msg: 'exception!'
        })
      }
    },
    focus () {
      this.showKeyboard = !this.showKeyboard
    },
    timekeepingControl () {
      if (!this.time.Interval) {
        this.$refs.sendNoteBtn.setAttribute('disabled', true)
        this.time.disabled = false
        this.time.Interval = setInterval(() => {
          if (this.time.timekeepingNum <= 0) {
            if (this.$refs.sendNoteBtn) {
              this.$refs.sendNoteBtn.removeAttribute('disabled')
            }
            clearInterval(this.time.Interval)
            this.time.timekeepingNum = 60
            this.time.disabled = true

            this.time.Interval = null
          } else this.time.timekeepingNum--
        }, 1000)
      } else return false
    },
    closeDialog () {
      this.dialogMode = false
      this.showKeyboard = false
    },
    getLimit () { // 获取额度
      const that = this
      /* 调用APP 方法获取额度 */
      WebViewJavascriptBridge.callHandler(
        'postDeviceInfo'
        , {}
        , function (response) {
          that.spinnerShow = false
          const res = JSON.parse(response)
          if (res.code == 0) {
            that.updateLimit(res.data)
          } else {
            that.$toast({
              msg: res + 'exception'
            })
          }
        }
      )
    },
    phoneSlice () {
      return this.commit.phoneNumber.slice(3, this.commit.phoneNumber.length)
    },
    getUserInfo (data) {
      WebViewJavascriptBridge.callHandler(
        'setUserInfo'
        , data
        , function (response) {
        }
      )
    },
    updateLimit (limit) {
      this.loanBtnShow = false
      this.spinnerShow = false
      this.commendData.limit = limit
      this.commendShow = true
      this.limit = limit
      this.closeDialog()
      this.$toast({
        msg: 'Estimate loan amount' + this.limit
      })
      this.rotatePointer(limit)
    },
    rotatePointer (limit) {
      let time = setTimeout(() => {
        const element = this.$refs.pointer
        element.style.webkitTransform = 'rotateZ(' + deg(limit) + 'deg)'
        element.style.MozTransform = 'rotateZ(' + deg(limit) + 'deg)'
        element.style.msTransform = 'rotateZ(' + deg(limit) + 'deg)'
        element.style.OTransform = 'rotateZ(' + deg(limit) + 'deg)'
        element.style.transform = 'rotateZ(' + deg(limit) + 'deg)'
        clearTimeout(time)
        time = null
      }, 1000)
    },
    sendAndroidCount () {
      WebViewJavascriptBridge.callHandler(
        'queryAmoutLmit'
        , {}
        , function (response) {
        }
      )
    },
    sendAndroidLoan () {
      WebViewJavascriptBridge.callHandler(
        'goLoan'
        , {}
        , function (response) {
        }
      )
    },
    agreement () {
      WebViewJavascriptBridge.callHandler(
        'goProtrol'
        , {}
        , function (response) {
        }
      )
    },
    phoneBlur () {
      if (!this.commit.phoneNumber) {
        this.commit.phoneNumber += '91-'
      }
    },
    IntoView (event) {
      let e = event || window.event
      const target = e.target || e.srcElement
      setTimeout(() => {
        target.scrollIntoView()
      }, 500)
    }
  },
  components: { passwordInput, myDialog, numberKeyboard, spinner, commendList }
}
</script>

<style scoped lang="stylus">
  @import "../../css/mixin.styl";
  $media-size()
  .wrap
    position relative
    width 100%
    height 100%
    margin 0 auto
    box-sizing border-box
    overflow-x hidden
    overflow-y auto
    .content
      width 100%
      height 100%
      padding-bottom 35px
      /*padding-bottom 10px*/
    .validator
      width 100%
      padding 50px 0 23px 0
      background:rgba(254,156,54,1)
      text-align center
      .title
        h1
          font-size 22px
          color rgb(255,255,255)
        .once
          margin-bottom 17px
      .measure
        padding 12px
        .dial
          position relative
          width 217px
          height 239px
          margin 0 auto
          $bg-image("./img/icon_home_dial")
          background-repeat no-repeat
          background-size 100% 100%
          .pointer
            position absolute
            width (70/2)px
            height (232/2)px
            left 50%
            z-index 999
            top (((239/2-@height/2)/2))px
            margin-left ((-@width)/2)px
            $bg-image("./img/icon_home_pointer")
            background-repeat no-repeat
            background-size 100% 100%
            transform-origin: center 84.3%
            transform rotateZ(-82.5deg)
            transition all 1s linear
          .val
            position absolute
            top 170px
            left 0
            width 100%
            font-size:24px;
            font-weight:400;
            color:rgba(255,255,255,1);

    .getLimit,.getLoan
      text-align center
      .tel
        width:270px
        position relative
        margin 46px auto 20px
        .picture
          position absolute
          left 18px
          top 50%
          margin-top -9px
          width 13px
          height 18px
          $bg-image("./img/icon_home_phone")
          background-size 100% 100%
          background-repeat no-repeat
        /*.sign
          position absolute
          font-size 14px
          left 26px
          top 50%
          height 18px
          line-height 18px
          margin-top -9px
          color #666666*/

        input
          width: @width
          padding-left 40px
          box-sizing border-box
          height:40px;
          color #666666
          font-size 14px
          border:1px solid #578CEC;/*no*/
          border-radius:20px;
          /*border-image:linear-gradient(0deg, rgba(0,0,0,1), rgba(255,255,255,1)) 10 10
          background:linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(255,255,255,1) 100%)*/

       .amount
          button
            border none
            width:270px;
            height:40px;
            color #FFFFFF
            font-size 20px
            line-height:16px;
            background:rgba(254,156,54,1);
            border-radius:20px;
    /*.getLoan
      margin 46px auto 20px*/
  .dialog
    .dialogMain
      .info
        font-size:16px;
        font-weight:400;
        color:rgba(153,153,153,1);
        text-align center
        margin 22px 0 31px
    .btn
      height 45px
      text-align center
      font-size:17px;
      font-weight:400;
      color:rgba(153,153,153,1);
      button
        border none
        width 100%
        height @height
        background-color #FFFFFF
      .resend
        font-size:17px;
        font-weight:400;
        color:rgba(255,13,13,1);
  .slide-fade-enter-active
    transition: all .3s ease
  .slide-fade-leave-active
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateY(300px);
    opacity: 0
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-active
    opacity: 0
    transform: translateY(300px)
  input[type=checkbox]{
    visibility: hidden;
  }
  #color-input-purple +label{
    display: block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 2px;
    left: 15px;
    background: rgba(195, 122, 211, 1);
  }
  .policy
    position relative
    display flex
    width 270px
    margin 13px auto 0
    font-size:12px;
    line-height 16px
    font-family:Helvetica;
    color:rgba(204,204,204,1);
    a
      color #FE9C36
    .checkbox
      margin 0 10px
    #color-input-purple:checked +label::before
      display: block;
      content: "\2714";
      text-align: center;
      font-size: 12px;
      color: white;
    input[type=checkbox]
      visibility: hidden
    #color-input-purple +label
      display: block;
      width: 10px;
      height: 10px;
      cursor: pointer;
      position: absolute;
      top: 2.5px;
      left: 10px;
      border:1px solid #FE9C36;/*no*/
      background: rgba(255, 255, 255, 1)

    #color-input-purple:checked +label::before
      display: block;
      content: "\2714";
      text-align: center;
      font-size: 12px;
      height 10px
      line-height @height
      color: #FE9C36
</style>
