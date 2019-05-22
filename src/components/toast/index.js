import toast from './index.vue'
import Vue from 'vue'
let instance
let seed = 1
let index = 2000
let alertMsg = null;
const install = () => {
  Object.defineProperty(Vue.prototype, '$toast', {
    get () {
        let id = 'message_' + seed++
         alertMsg = options => {
           if (instance){
             instance.msg = options.msg
            instance.close()
           }else {
             instance = new (Vue.extend(toast)) ({
               propsData: options
             })
             index++
             instance.id = id
             instance.vm = instance.$mount()
             document.body.appendChild(instance.vm.$el)
             instance.vm.$el.style.zIndex = index
             instance.close()
             return instance.vm
           }
        }
      return alertMsg
    }
  })
}
export default install
