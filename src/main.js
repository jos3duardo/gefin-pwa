// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'

Vue.use(HighchartsVue, {
  highcharts: Highcharts
})
Vue.use(Vuex)

axios.defaults.withCredentials = true;

Vue.prototype.$http = axios
Vue.prototype.$urlAPI = 'http://localhost:8000/api/'

const store = new Vuex.Store({
  state: {
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
  },
  getters:{
    getUser: state => {
      return state.user
    },
    getToken: state => {
      return state.user.token
    }
  },
  mutations: {
    setUser(state, n){
      state.user = n
    }
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  template: '<App/>',
  components: { App }
})
