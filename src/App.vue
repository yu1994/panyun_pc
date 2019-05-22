<template>
  <div id="app">
    <div class="main">
      <login></login>
    </div>
  </div>
</template>

<script>
import login from '@/view/login'
export default {
  name: 'App',
  components: {  login }
}
</script>
<style lang="stylus">
  #app
    height 100%
    .main
      height 100%
</style>
