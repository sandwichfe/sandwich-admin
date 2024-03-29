import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './util/rem'

// element-ui
import ElementUI from 'element-ui';
import  'element-ui/lib/theme-chalk/index.css';

// swiper
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// js-cookie
import Cookies from 'js-cookie'

//echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.use(ElementUI);

Vue.use(vueSwiper)

Vue.use(Cookies);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
