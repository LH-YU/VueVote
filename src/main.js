import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {axios} from "./utils/axios"

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
