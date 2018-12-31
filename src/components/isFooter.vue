<template>
    <div class="footerWap">
      <div class="footer">
        <ul>
          <li>
            <h4>Address</h4>
            <p>#409,Cresent Business</p>
            <p> Square,Kherani</p>
            <p> Road,Sakinaka,Andheri East</p>
            <p> Mumbai 400072</p>
          </li>
          <li>
            <h4>About PANYUN</h4>
            <P>About Us</P>
            <p>Loans</p>
          </li>
          <li>
            <h4>Useful Links</h4>
            <P>Privacy Policy</P>
          </li>
          <li>
            <h4>Privacy Policy</h4>
            <p>FAQ</p>
            <p>Contact Us</p>
            <ul class="link">
              <li><a><img src="./img/footer-icon-linkedin_select.png" alt=""></a></li>
              <li><a><img src="./img/footer-icon-facebook_select.png" alt=""></a></li>
              <li><a><img src="./img/footer-icon-google_select.png" alt=""></a></li>
              <li><a><img src="./img/footer-icon-twitter_select.png" alt=""></a></li>
            </ul>
          </li>
          <li style="margin-bottom: 0">
            <h4>EMAIL</h4>
            <P>oloan1238@gmail.com</P>
          </li>
        </ul>
      </div>
    </div>

</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style scoped lang="stylus">
.footerWap
  width 100%
  background:rgba(36,41,60,1)
.footer
  display table
  margin 0 auto
  width 1200px
  height 600px
  vertical-align middle
  ul
    display table-cell
    margin 0 auto
    vertical-align middle
    font-size 0
    padding 0 100px
    li
      display inline-block
      vertical-align top
      width 25%
      box-sizing border-box
      color #ffffff
      margin-bottom 70px
      h4
        font-size 18px
        margin-bottom 52px
      p
        line-height 30px
        font-size 16px
      .link
        display block
        font-size 0
        padding 0
        margin 45px 0 0 0
        li
          display inline-block
          width auto
          margin 0 20px 0 0
          a
            display block
            width auto
            cursor pointer
          i
            display block

</style>
