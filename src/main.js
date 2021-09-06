//imports
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {Routes} from './Components/Routes'
import {store} from './store'
import Vuelidate from 'vuelidate'

//plugins
Vue.use(Vuelidate)
Vue.use(VueRouter)
const router = new VueRouter({
routes:Routes,
  mode:'history'
})

//Vue instance
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
