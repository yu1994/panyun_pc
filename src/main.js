
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/index.styl'
import { getRem } from './utils/rem'
import i18n from './lang'
Vue.config.productionTip = false
// getRem(document, window)
// window.onresize = function(){
//   getRem(document, window)
// }
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})
// Vue.prototype.$confirm = MessageBox.confirm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
