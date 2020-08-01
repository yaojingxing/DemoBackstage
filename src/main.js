import Vue from 'vue'
import App from './App.vue'
import elementconstructor from './element.dev'
import router from "./router/index.js"

Vue.config.productionTip = false
elementconstructor()


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
