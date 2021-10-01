import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VModal from 'vue-js-modal'
import '@mdi/font/css/materialdesignicons.css' // この行を追加

Vue.config.productionTip = false
Vue.use(VModal);

new Vue({
  render: h => h(App),
  vuetify,
}).$mount('#app')
