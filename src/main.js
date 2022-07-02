import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8040/";
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config
})

Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false
// main.js
import less from 'less'
Vue.use(less)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
