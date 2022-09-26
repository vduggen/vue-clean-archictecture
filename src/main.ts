import Vue from 'vue'
import App from './App.vue'
import router from '@/application/router'
import store from '@/infrastructure/store/vuex/user-store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
