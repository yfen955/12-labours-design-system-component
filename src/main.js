import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import TwelveLComponentLibrary from './components/index.js'

Vue.config.productionTip = false

Vue.use(TwelveLComponentLibrary)
Vue.use(VueRouter)

const router = new VueRouter({
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
