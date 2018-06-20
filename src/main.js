import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'

import '../node_modules/vuesax/dist/vuesax.css'
Vue.use(Vuesax)

new Vue({
  el: '#app',
  render: h => h(App)
})
