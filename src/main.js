import Vue from 'vue'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import router from "./router";
import store from "./stores/store";
import App from './App.vue'

Vue.config.productionTip = false

axios.defaults.baseURL='https://menage-time.herokuapp.com/';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')