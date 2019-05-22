<template>
    <div class="toast" v-show="isAutoClose">
      {{msg}}
    </div>
</template>

<script>
  export default {
    name: 'index',
    props: {
      msg: {
        type: [String, Number],
        default: ''
      },
      duration: {
        type: Number,
        default: 3000
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      isAutoClose: {
        type: Boolean,
         default: true
      }
    },
    methods:{
      close() {
        this.isAutoClose = true
        let time = null;
        time = setTimeout(() =>{
          this.isAutoClose = false;
          clearTimeout(time)
          time = null;
        },this.duration)
      }
    }
  }
</script>

<style scoped lang="stylus">
.toast
  position: fixed;
  top: 50%;
  left: 50%;
  padding  5px 15px
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
  max-width: 70%;
  font-size: 0.14rem;
  line-height: 0.2rem;
  border-radius: 0.04rem;
  word-break: break-all;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transform: translate3d(-50%,-50%,0);
  transform: translate3d(-50%,-50%,0);
  background-color: rgba(0,0,0,.7);
  width: -webkit-fit-content;
</style>
