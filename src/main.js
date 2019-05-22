
import Vue from 'vue'
import App from './App'
import './css/index.styl'
import { getRem } from './utils/rem'
import FastClick from 'fastclick'
import toast from '@/components/toast/index'
FastClick.attach(document.body)
Vue.use(toast)
Vue.config.productionTip = false
  getRem(375, 100)
window.onresize = function(){
  getRem(375, 100)
}
new Vue({
  el: '#app',
  data() {
    return {
      integerType:/^[0-9]{10}$/,
      noteVerifyType:/^[0-9]{4}$/
    }
  },
  components: { App },
  template: '<App/>'
})

