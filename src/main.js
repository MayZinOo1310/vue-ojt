import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/foundation-sites/dist/css/foundation.min.css'
import './../node_modules/font-awesome/css/font-awesome.min.css'
import './assets/css/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
