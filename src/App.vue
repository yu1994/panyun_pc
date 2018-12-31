<template>
  <div id="app">
    <is-header></is-header>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
import isHeader from '@/components/head'
export default {
  name: 'App',
  components: { isHeader }
}
</script>

<style lang="stylus" scoped>
  #app
    min-width 1250px; /*no*/
  .main
    margin-top 100px
</style>
