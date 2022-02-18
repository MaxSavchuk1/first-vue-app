import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
import api from './plugins/api'

Vue.prototype.axios = axios

Vue.use(api)

Vue.config.productionTip = false

const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = kebabCase(
    fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
