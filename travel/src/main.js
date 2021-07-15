import Vue, { createApp } from 'vue';
import App from './App'
import router from './router'
// import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

// fastClick.attach(document.body)
// Vue.use(VueAwesomeSwiper)

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
