import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {axios} from "./utils/axios"
// 引入全部组件
import { Toast} from 'mint-ui'
import 'mint-ui/lib/style.css'


// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.component(Toast.name, Toast)




Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
