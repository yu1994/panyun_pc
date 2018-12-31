<template>
  <div class="wrap">
    <!-- page 1 -->
    <div class="introduce">
      <div class="banner">
        <img src="./img/bg_banner.png" alt="" width="100%">
      </div>
      <leader :content="leader.t1"></leader>
      <div class="introduce_main w1200">
        <p>{{ $t('introduce_main.content') }}</p>
        <ul class="introduce_list">
          <li><i></i><h4>₹5000 - ₹15000</h4>
            <p>Get a real loan that builds your credit</p>
          </li>
          <li><i></i><h4>Easy Online Application</h4>
            <p>Qualify in minutes without filling out paperwork or visiting a branch</p>
          </li>
          <li><i></i><h4>Better Rates</h4>
            <p>Our rate is low compared to other online loan</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- page 2 -->
    <div class="ourProduct">
      <leader :content="leader.t2"></leader>
      <div class="ourProduct_main w1200">
        <p class="ourProduct_sign">PANYUN have many different types  of lending products,you can choose the right product whenever you need</p>
        <ul class="ourProduct_list">
          <li>
            <i></i>
            <h4>Short-term Loans</h4>
            <p class="ourProduct_detail">We are one of the prominent instant loan providers in India for people who are looking for short-term loans. There are innumerable reasons why people may need quick personal loans. It may be just to save on interest or when one is short of cash. These are unsecured loans where there is no need to put up your vehicle or home as collateral. It costs less than taking cash advance loans or using a credit card.</p>
            <div class="go">
              <button>GO</button>
            </div>
          </li>
          <li>
            <i></i>
            <h4>Interest-free Loans</h4>
            <p class="ourProduct_detail">Our product  is Indian market oriented interest-free loan products, a full automatic audit can help short-term funding needs, efficient and fast to solve financial difficulties.The average time taken for a loan to be disbursed is about 10 minutes, subject to proper documentation.</p>
            <div class="go">
              <button>GO</button>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <!--page 3 -->
    <div class="whyPANYUN">
      <leader :content="leader.t3"></leader>
      <div class="banner">
        <img src="./img/bg_banner02.png" alt="">
        <div class="why_main w1200">
          <div class="david"></div>
          <div class="get"></div>
        </div>

      </div>
      <div class="why_main w1200">

      </div>
    </div>
    <!--page 4 -->
    <div class="questions">
      <leader :content="leader.t4"></leader>
      <div class="questions_main w1200">
        <ul class="questions_list">
          <li>
            <div>
              <h4>WHY DO USERS CHOOSE LOAN?
              </h4>
              <p>We offers personal loans in a small amount of Rs. 5,000 to Rs. 15,000 in just no time. We provide pressure and convenient instant loans for people aged between 21 and 40 with id CARDS.The loans are offered to people like Support Salaried Professionals, Blue-collar workers, self-employed workers and more. The monthly salary is 15000 rupees. We strive hard to ensure quick loan approval</p>
            </div>
            <div class="information">
              <h4 style="white-space: nowrap">WHAT INFORMATION ARE REQUIRED TO AVAIL A LOAN?
              </h4>
              <p>We need your</p>
              <ul>
                <li>1.Pan Card</li>
                <li>2.Aadhaar Card</li>
                <li>3.Address proof of self and firm</li>
                <li>4.Some simple information</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h4>HOW DO I APPLY FOR A LOAN?
              </h4>
              <p>Applying is quick and easy and typically takes less than 10 minutes. We ask for basic information about you and your business. Securely connect your bank information so we can assess your business without long forms, waiting in line or having to dig up old paperwork. Your association with business services who we have partnered with helps get you more fitting loans.</p>
            </div>
            <div class="information">
              <router-link to="/faq" style="color: #4A72E3">If you have other queries, check our FAQ section</router-link>
              <div class="goBtn">
                <button>GO</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div style="margin-top: 260px">
      <is-footer></is-footer>
    </div>

  </div>
</template>

<script>
  import leader from '@/components/leader'
  import isFooter from '@/components/isFooter'
  export default {
    name: 'home',
    data () {
      return {
        leader: {
          t1: `PANYUN Is Transforming The Way <br/> We Engage With Traditional Loan`,
          t2: `Our Product`,
          t3: `Why PANYUN?`,
          t4: `Frequently Asked Questions`
        }
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      BTN () {
        //  this.$alert('222')
      }
    },
    components: { leader, isFooter }
  }
</script>

<style scoped lang="stylus">
  @import "../../css/mixin.styl";
  $media-size()
  .wrap
    position relative
    width 100%
    min-width 1250px; /*no*/
    margin 0 auto
    .introduce
      margin 0 auto
      background-color #ffffff
      .banner
        text-align center
      .introduce_main
        margin 0 auto
        color #808080
        font-size 18px;/*no*/
        line-height 24px;/*no*/
        text-align center
      .introduce_list
        padding 90px 0
        height auto
        font-size 0
        li
          display inline-block
          width 320px
          height 250px
          background:rgba(255,255,255,1)
          border:1px solid rgba(217, 217, 217, 1)
          border-radius:8px
          vertical-align middle
          text-align center
          i
            display block
            width 80px
            height 80px
            margin 30px auto 0
            background-repeat no-repeat
            $bg-size(100%,100%)
          h4
            font-size 24px
            font-weight bold
            color #4a4a4a
            margin 18px 0
          p
            padding 0 40px
            font-size 16px
            line-height 20px
            color #808080
        & li:nth-child(1)
            i
              background-image url("./img/icon_01.png")
        & li:nth-child(2)
          margin 0 30px
          i
            background-image url("./img/icon_02.png")
        & li:nth-child(3)
          margin 0 30px
          i
            background-image url("./img/icon_03.png")

    .ourProduct
      overflow hidden
      text-align center
      margin 0 auto
      background-color #f9f9f9
      .ourProduct_sign
        color:rgba(128,128,128,1)
        line-height:30px
        font-size 18px;/*no*/
      .ourProduct_main,
        text-align center
        margin 0 auto
        .ourProduct_list
          width 100%
          margin-top 109px
          overflow hidden
          li
            position relative
            width 553px
            height 770px
            background:rgba(255,255,255,1)
            border:1px solid rgba(217, 217, 217, 1)
            border-radius:8px
            i
              display block
              margin 60px auto 72px
              width 201px
              height 224px
              background-repeat no-repeat
              $bg-size(100%,100%)
            h4
              font-size:24px;
              font-family:Arial-BoldMT;
              font-weight:bold;
              color:rgba(74,74,74,1);
            .ourProduct_detail
              padding 40px
              font-size 16px;/*no*/
              line-height 24px
              text-align center
              color:rgba(128,128,128,1)
            .go
              position absolute
              bottom 65px
              width 174px
              left 50%
              margin-left (-174/2)px
              button
                width @width
                height 40px
                outline none
                background:rgba(197,44,215,0);
                border:2px solid rgba(94, 57, 108, 1);
                border-radius:21px;
          & li:nth-child(1)
            float left
            i
              background-image url("./img/icon_picture01.png")

          & li:nth-child(2)
            float right
            i
              background-image url("./img/icon_picture02.png")


    .whyPANYUN
      background-color #f9f9f9
      overflow hidden
      .why_main
        position absolute
        left 0
        top 0
    .questions
      .questions_main
        margin 0 auto
        color #4A4A4A
        .questions_list
          overflow hidden
          li
            width 553px
            h4
              text-align left
              font-size 20px
              margin-bottom 20px
            p
              font-size 16px
              line-height 40px
            .information
              margin-top 105px
              color #4A4A4A
              h4
                font-size 20px
              ul
                li
                  padding-left 27px
                  float none
                  font-size 16px
                  line-height 36px
                  color #4A4A4A
              .goBtn
                margin-top 50px
                button
                  width:193px;
                  height:52px;
                  background:rgba(74,114,227,1);
                  border-radius:4px;
                  outline none
                  border:none
                  font-size 20px
                  color:rgba(255,255,255,1)

          & li:nth-child(1)
            float left
          & li:nth-child(2)
            float right

  .banne
    color red
</style>
