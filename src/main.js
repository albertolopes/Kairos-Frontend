import Vue from 'vue'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import router from "./router";
import store from "./stores/store";
import App from './App.vue'
import materialUi from 'material-design-icons-iconfont'

Vue.config.productionTip = false

axios.defaults.baseURL='http://localhost:9000/';

new Vue({
  router,
  store,
  materialUi,
  vuetify,
  render: h => h(App)
}).$mount('#app')