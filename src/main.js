import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.config.productionTip = false

// import axios from'axios'
// //根路径
// axios.defaults.baseURL='http://192.168.1.27:8888/api/private/v1/'
// Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
