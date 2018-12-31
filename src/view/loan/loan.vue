<template>
  <div class="wrap">
    <div class="banner">
      <img src="./img/bg_banner.png" alt="" width="100%">
    </div>
    <div class="personal">
      <leader :content="leader.t1"></leader>
      <div class="content">
        <p>Getting a personal loan used to be a hassle, requiring a trip to the bank and lots of paperwork, waiting, and often disappointment. We’re here to make things simpler.
        <p>For qualified applicants, we've got funds waiting to be transferred into your bank account right now. Apply for a personal loan today, and you could have the money you need in your bank account in 1 business day!
        </p>
        <p>PANYUN have different personal loans to fit your needs. Request any amount from $5,000 to $15,000. If you find we have a personal loan that's right for you, you can select a short-term plan that's right for you, and get on the path to becoming debt-free. It's fast, it's easy, it's fair, and it might be just what you need to achieve your financial goals.</p>
      </div>
      <ul class="list">
        <li><i></i><h4></h4><p></p></li>
        <li><i></i><h4></h4><p></p></li>
        <li><i></i><h4></h4><p></p></li>
      </ul>

    </div>
  </div>
</template>

<script>
  import leader from '@/components/leader'
  export default {
    name: 'loan',
    data () {
      return {
        leader: {
          t1: `Get a Personal Loan from PANYUN`,
          t2: `Our Product`,
          t3: `Why PANYUN?`,
          t4: `Frequently Asked Questions`
        }
      }
    },
    components: { leader }
  }
</script>

<style scoped lang="stylus">
.personal
  color #808080
  .content
    width 1148px
    margin 0 auto
    p
      font-size 18px
      line-height 30px
      margin-bottom 20px
      text-align center
  .list
    text-align center
    margin 100px auto 125px
    font-size 0
    li
      width 320px
      height 250px
      display inline-block
      background-color red
      border:1px solid rgba(217, 217, 217, 1)
      border-radius:8px
    & li:nth-child(1)
      i
        display block
    & li:nth-child(2)
      margin 0 55px
    & li:nth-child(3)
      i
        display block
</style>
